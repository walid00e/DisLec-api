const Student = require('../Models/StudentModel');
const apiResponse = require("../Helpers/apiResponse");

const studentDetails = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return apiResponse.successResponseWithData(res, "Student not found", null);
        }
        return apiResponse.successResponseWithData(res, "Student found", student);
    } catch (error) {
        return apiResponse.ErrorResponse(res, error);
    }
};

module.exports = {
    studentDetails
}