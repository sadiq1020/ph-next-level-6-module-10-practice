const path = require('path');

console.log("current file info: ");
console.log("file name: ", __filename);
console.log("directory name: ", __dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filePath = "/sadiq/documents/nodejs/path/path-basic.js";

console.log('file path: ', filePath);
console.log('directory name: ', path.dirname(filePath));
console.log('Base Name: ', path.basename(filePath));
console.log('File Extension Name: ', path.extname(filePath));
console.log('File name: ', path.basename(filePath, path.extname(filePath)));

console.log("\n" + "-".repeat(50) + "\n");

const parsedPath = path.parse(filePath);
console.log('Parsed Path Object: ', parsedPath);

console.log("\n" + "-".repeat(50) + "\n");

const formatedPath = path.format(parsedPath);
console.log('Formated Path: ', formatedPath);