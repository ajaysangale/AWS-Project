// welcome.js

async function uploadMedia() {
    const fileInput = document.getElementById('fileToUpload');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a file.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('/s3/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Upload failed.');
        }

        alert('File uploaded successfully!');
    } catch (error) {
        console.error('Error uploading file:', error);
        alert('Error uploading file. Please try again later.');
    }
}
