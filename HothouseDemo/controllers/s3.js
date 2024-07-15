// s3Controller.js

const model = require('../models/s3');

async function uploadMedia(req, res) {
    try {
        // Call the model function to handle the upload
        const uploadResult = await model.uploadToS3Bucket(req.file);

        res.status(200).json({ message: 'Upload successful', data: uploadResult });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ message: 'Upload failed', error: error.message });
    }
}

module.exports = { uploadMedia };
