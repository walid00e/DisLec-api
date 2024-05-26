const User = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require("bcrypt");
const {body, validationResult} = require("express-validator");
const {sanitizeBody} = require("express-validator");
const apiResponse = require('../Helpers/apiResponse');

const login = [
    body("email").isLength({min: 1}).trim().withMessage("Email must be specified.")
        .isEmail().withMessage("Email must be a valid email address.").escape(),
    body("password").isLength({min: 1}).trim().withMessage("Password must be specified.").escape(),
    (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array());
            } else {
                User.findOne({email: req.body.email}).then(user => {
                    if (user) {
                        // compare given password with db's hash
                        bcrypt.compare(req.body.password, user.password, (err, same) => {
                            if (same) {
                                const userData = {
                                    _id: user._id,
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    email: user.email,
                                };
                                const jwtPayload = userData
                                const jwtData = {
                                    expiresIn: process.env.JWT_TIMEOUT_DURATION,
                                }
                                const secret = process.env.JWT_SECRET;
                                //Generated JWT token with Payload and secret.
                                userData.token = jwt.sign(jwtPayload, secret, jwtData);
                                return apiResponse.successResponseWithData(res, "Login Success.", userData);
                            } else {
                                return apiResponse.unauthorizedResponse(res, "Email or Password wrong.");
                            }
                        });
                    } else {
                        return apiResponse.unauthorizedResponse(res, "Email or Password wrong.");
                    }
                });
            }
        } catch (err) {
            return apiResponse.ErrorResponse(res, err);
        }
    }];

const register = [
    body("firstName").isLength({min: 1}).trim().withMessage("First name must be specified.")
        .isAlphanumeric().withMessage("First name has non-alphanumeric characters.").escape(),
    body("lastName").isLength({min: 1}).trim().withMessage("Last name must be specified.")
        .isAlphanumeric().withMessage("Last name has non-alphanumeric characters.").escape(),
    body("email").isLength({min: 1}).trim().withMessage("Email must be specified.")
        .isEmail().withMessage("Email must be a valid email address.").custom((value) => {
        return User.findOne({email: value}).then((user) => {
            if (user) {
                return Promise.reject("E-mail already in use");
            }
        });
    }).escape(),
    body("password").isLength({min: 6}).trim().withMessage("Password must be 6 characters or greater.").escape(),
    async (req, res) => {
        try {
            // Extract the validation errors from a request.
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                // Display sanitized values/errors messages.
                return apiResponse.validationErrorWithData(res, "Validation Error.", errors.array());
            } else {
                //hash input password
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                const user = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hashedPassword,
                });
                await user.save();
                const userData = {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                };
                return apiResponse.successResponseWithData(res, "Registration Success.", userData);
            }
        } catch (err) {
            //throw error in json response with status 500.
            return apiResponse.ErrorResponse(res, err);
        }
    }
];

module.exports = {
    login,
    register
}