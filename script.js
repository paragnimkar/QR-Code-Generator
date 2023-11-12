// Function to generate QR code
function generateQRCode() {
    // Get the text input value
    const textInput = document.getElementById('textInput').value;

    // Get the QR code container
    const qrcodeContainer = document.getElementById('qrcode');

    // Clear previous QR code if any
    qrcodeContainer.innerHTML = '';

    // Generate QR code
    const qrcode = new QRCode(qrcodeContainer, {
        text: textInput,
        width: 200,
        height: 200,
    });
}

// Function to download QR code
function downloadQR(format) {
    // Get the QR code container
    const qrcodeContainer = document.getElementById('qrcode');

    // Get the canvas containing the QR code
    const canvas = qrcodeContainer.querySelector('canvas');

    // Create an anchor element to trigger the download
    const downloadLink = document.createElement('a');

    // Set the appropriate format and file extension
    const filename = `qrcode.${format === 'svg' ? 'svg' : 'png'}`;
    downloadLink.download = filename;

    // Convert the canvas content to data URL based on the specified format
    const dataURL = format === 'svg' ? canvas.toDataURL('image/svg+xml') : canvas.toDataURL('image/png');

    // Set the href attribute of the anchor to the data URL
    downloadLink.href = dataURL;

    // Append the anchor to the document and trigger a click event
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove the anchor from the document
    document.body.removeChild(downloadLink);
}

// Event listener for text input changes
document.getElementById('textInput').addEventListener('input', function() {
    generateQRCode();
});

// Initial QR code generation on page load
generateQRCode();


