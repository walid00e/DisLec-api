const auth = require("../Middlewares/jwt");
const Essay = require('../Models/EssayModel');
const apiResponse = require("../Helpers/apiResponse");

exports.getEssay = [
    auth,
    async (req, res) => {
        try {
            const essay = await Essay.findOne({_id: req.params.id},);
            if (!essay) {
                return apiResponse.successResponseWithData(res, "essay not found", null);
            }
            return apiResponse.successResponseWithData(res, "essay found", essay);
        } catch (error) {
            return apiResponse.ErrorResponse(res, error);
        }
    }
]