const auth = require("../Middlewares/jwt");
const Professional = require("../Models/ProfessionalModel");
const apiResponse = require("../Helpers/apiResponse");

exports.professionalDetails = [
    auth,
    async (req, res) => {
        try {
            const professional = await Professional.findOne({_id: req.params.id},);
            if (!professional) {
                return apiResponse.successResponseWithData(res, "professional not found", null);
            }
            return apiResponse.successResponseWithData(res, "professional found", professional);
        } catch (error) {
            return apiResponse.ErrorResponse(res, error);
        }
    }
];

exports.professionalByUserId = [
    auth,
    async (req, res) => {
        try {
            const professional = await Professional.findOne({user: req.params.id},);
            if (!professional) {
                return apiResponse.successResponseWithData(res, "Professional not found", null);
            }
            if (professional.user.toString() !== req.user._id) {
                return apiResponse.unauthorizedResponse(res, "You are not authorized to view this professional's data.");
            }
            return apiResponse.successResponseWithData(res, "Professional found", professional);
        } catch (error) {
            return apiResponse.ErrorResponse(res, error);
        }
    }];

exports.addEssayToProfessional = [
    auth,
    async (req, res) => {
        try {
            // todo: add this
        } catch (error) {
            return apiResponse.ErrorResponse(res, error);
        }
    }
];