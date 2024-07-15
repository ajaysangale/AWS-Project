// routes.js

const express = require('express');
const router = express.Router();
const s3Controller = require('../controllers/s3');

// Define route for uploading media to S3
router.post('/upload', s3Controller.uploadMedia);

module.exports = router;
