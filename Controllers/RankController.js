const auth = require("../Middlewares/jwt");
const Rank = require("../Models/RankModel");
const apiResponse = require("../Helpers/apiResponse");

const rankDetails = [
    auth,
    async (req, res) => {
        try {
            const rank = await Rank.findOne({_id: req.params.id},);
            if (!rank) {
                return apiResponse.successResponseWithData(res, "Rank not found", null);
            }
            return apiResponse.successResponseWithData(res, "Rank found", rank);
        } catch (error) {
            return apiResponse.ErrorResponse(res, error);
        }
    }];

module.exports = {
    rankDetails
}