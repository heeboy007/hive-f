const express = require('express');
const http = require('http');
//const https = require('https');
const fs = require('fs');

const app = express();

// Serve static files from the 'dist' directory
app.use(express.static('dist'));

// HTTP server
const httpServer = http.createServer(app);

// HTTPS server
// const privateKey = fs.readFileSync('path/to/private.key', 'utf8'); // Replace 'path/to/private.key' with the path to your private key file
// const certificate = fs.readFileSync('path/to/certificate.crt', 'utf8'); // Replace 'path/to/certificate.crt' with the path to your certificate file
// const credentials = { key: privateKey, cert: certificate };
// const httpsServer = https.createServer(credentials, app);

// Start HTTP server
const port = process.env.PRODUCT_PORT || 80;
httpServer.listen(port, () => {
    console.log('HTTP server running on port 80');
});

// Start HTTPS server
// httpsServer.listen(443, () => {
//     console.log('HTTPS server running on port 443');
// });
