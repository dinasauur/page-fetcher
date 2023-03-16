// to use node's request, must install the npm package
// npm init -> npm install request

const request = require('request');
const fs = require('fs');
const URL = process.argv[2];
const filePath = process.argv[3];

request(URL, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);

  fs.writeFile(filePath, body, 'utf8', (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`)
  }); 
});

// request(URL, (error, response, body) => {})
//// can paste in the URL directly in there or reference it

// Use Node's fs (file system) module to write the file
// fs.writeFile(filePath, body, 'utf8', (err) => {});
//// can write the file path directly in there (./ -> for path in this current folder) or reference it