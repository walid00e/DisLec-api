const path = require('path');
const fs = require('fs');
const apiResponse = require("../Helpers/apiResponse");
const auth = require('../Middlewares/jwt');

const imagesDirectory = path.join(__dirname, '../Assets/Images'); // Path to your images directory
const imagesProfileDirectory = path.join(__dirname, '../Assets/Images/Profile'); // Path to your images directory
const imagesUtilsDirectory = path.join(__dirname, '../Assets/Images/Utils'); // Path to your images directory

exports.getImage = [
    auth,
    async (req, res) => {
        const filename = req.params.filename;
        const imagePath = path.join(imagesDirectory, filename);

        // Check if the image file exists
        fs.access(imagePath, fs.constants.F_OK, (err) => {
            if (err) {
                // Image file not found
                return apiResponse.notFoundResponse(res, "Image not found");
            }

            // Serve the image file
            res.sendFile(imagePath);
        });
    }];

exports.getUtilsImage = [
    auth,
    async (req, res) => {
        const filename = req.params.filename;
        const imagePath = path.join(imagesUtilsDirectory, filename);

        // Check if the image file exists
        fs.access(imagePath, fs.constants.F_OK, (err) => {
            if (err) {
                // Image file not found
                return apiResponse.notFoundResponse(res, "Image not found");
            }

            // Serve the image file
            res.sendFile(imagePath);
        });
    }];

exports.getProfileImage = [
    auth,
    async (req, res) => {
        const filename = req.params.filename;
        const imagePath = path.join(imagesProfileDirectory, filename);

        // Check if the image file exists
        fs.access(imagePath, fs.constants.F_OK, (err) => {
            if (err) {
                // Image file not found
                return apiResponse.notFoundResponse(res, "Image not found");
            }

            // Serve the image file
            res.sendFile(imagePath);
        });
    }];
