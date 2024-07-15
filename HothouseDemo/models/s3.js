// model.js

const AWS = require('aws-sdk');

// Function to upload media to S3
async function uploadToS3Bucket(file) {
    try {
        // Set up AWS configuration
        AWS.config.update({
            accessKeyId: process.env.ACCESS_KEY_ID,
            secretAccessKey: process.env.SECRET_ACCESS_KEY,
            region: 'us-east-1',
        });

        // Create an S3 instance
        const s3 = new AWS.S3();

        // Generate a unique file name
        const fileName = `file_${Date.now()}`;

        // Configure parameters for the upload
        const params = {
            Bucket: process.env.BUCKET_NAME,
            Key: fileName,
            Body: file.buffer, // Assuming 'file' is a buffer containing the file data
            ContentType: file.mimetype
        };

        // Perform the upload
        const uploadResult = await s3.upload(params).promise();

        return uploadResult;
    } catch (error) {
        console.error('Error uploading to S3:', error);
        throw error;
    }
}

module.exports = { uploadToS3Bucket };
