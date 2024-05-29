const multer = require('multer');
const path = require('path');
const apiResponse = require("../Helpers/apiResponse");
const auth = require('../Middlewares/jwt');

// Set storage engine for multer
const storage = multer.diskStorage({
    destination: './Assets/Recordings',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Init upload
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const filetypes = /mp3|mp4|wav|m4a/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb('Error: Audio Files Only!');
        }
    }
}).single('audio');

// Upload audio file
exports.uploadAudio = [
    auth,
    (req, res) => {
        upload(req, res, (err) => {
            if (err) {
                return apiResponse.ErrorResponse(res, err);
            }
            if (!req.file) {
                return apiResponse.validationErrorWithData(res, 'No file uploaded', null);
            }

            const filePath = `Recordings/${req.file.filename}`;
            return apiResponse.successResponseWithData(res, 'Audio file uploaded successfully', {path: filePath});
        });
    }
];

// Get audio file
exports.getAudio = [
    auth,
    (req, res) => {
        const filename = req.params.filename;
        const filePath = path.join(__dirname, '../Assets/Recordings', filename);

        res.sendFile(filePath, (err) => {
            if (err) {
                return apiResponse.notFoundResponse(res, 'Audio file not found');
            }
        });
    }
];