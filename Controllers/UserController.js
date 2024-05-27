const auth = require("../Middlewares/jwt");
const User = require("../Models/UserModel");
const apiResponse = require("../Helpers/apiResponse");


const userDetails = [
    auth,
    async (req, res) => {
        try {
            const user = await User.findOne({_id: req.params.id},);
            if (!user) {
                return apiResponse.successResponseWithData(res, "User not found", null);
            }
            return apiResponse.successResponseWithData(res, "User found", user);
        } catch (error) {
            return apiResponse.ErrorResponse(res, error);
        }
    }];

module.exports = {
    userDetails
}