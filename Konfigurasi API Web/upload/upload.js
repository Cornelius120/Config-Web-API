const uploadForm = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const statusDiv = document.getElementById('status');

uploadForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const file = fileInput.files[0];

    if (!file) {
        statusDiv.textContent = 'Please select a file to upload';
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        // Kirim permintaan upload menggunakan Fetch API
        const response = await fetch('URL_API_UPLOAD', {
            method: 'POST',
            body: formData
        });

       
        if (response.ok) {
            const result = await response.json();
            statusDiv.textContent = 'File uploaded successfully: ' + result.message;
        } else {
            statusDiv.textContent = 'Error uploading file: ' + response.statusText;
        }
    } catch (error) {
        statusDiv.textContent = 'Error: ' + error.message;
    }
});
