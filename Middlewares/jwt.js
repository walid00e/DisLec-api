const { expressjwt: jwt } = require("express-jwt");
const {unauthorizedResponse} = require("../Helpers/apiResponse");
const secret = process.env.JWT_SECRET;

const authenticate = jwt({
	secret: secret,
	algorithms: ["HS256"],
	requestProperty: 'user',
});

module.exports = authenticate;