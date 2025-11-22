const fs = require('fs');

// fs.writeFileSync('./output/app.log', 'Log entry: Application started. \n');
// console.log('file created');

// const logEntry1 = 'Log entry: User logged in. \n';
// fs.appendFileSync('./output/app.log', logEntry1);
// console.log('first append initiated');

const logEntry2 = 'Log entry: User performed an action. \n';
fs.appendFileSync('./output/app.log', logEntry2);
console.log('second append initiated');