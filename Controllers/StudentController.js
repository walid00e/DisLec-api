const Student = require('../Models/StudentModel');
const apiResponse = require("../Helpers/apiResponse");
const auth = require('../Middlewares/jwt')

const studentsByUserId = [
    auth,
    async (req, res) => {
        try {
            const student = await Student.findOne({user: req.params.id},);
            if (!student) {
                return apiResponse.successResponseWithData(res, "Student not found", null);
            }
            return apiResponse.successResponseWithData(res, "Student found", student);
        } catch (error) {
            return apiResponse.ErrorResponse(res, error);
        }
    }];

const studentDetails = [
    auth,
    async (req, res) => {
        try {
            const student = await Student.findOne({_id: req.params.id},);
            if (!student) {
                return apiResponse.successResponseWithData(res, "Student not found", null);
            }
            return apiResponse.successResponseWithData(res, "Student found", student);
        } catch (error) {
            return apiResponse.ErrorResponse(res, error);
        }
    }];

module.exports = {
    studentDetails,
    studentsByUserId
}