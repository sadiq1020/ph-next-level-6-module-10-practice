const fs = require('fs');

// Synchronous file writing
const content1 = 'Today was a great day! \n I learned about synchronous file writing in Node.js.\n and this is synchronous';

try {
    fs.writeFileSync('./output/diary-sync.txt', content1, 'utf-8');
    console.log('File written successfully in sync mode.');
} catch (err) {
    console.error('Error writing file:', err.message);
}

// Asynchronous file writing
const content2 = '\nThis is an additional line added asynchronously.';
fs.writeFile('./output/diary-async.txt', content2, 'utf-8', (err) => {
    if (err) {
        console.error('Error writing file asynchronously:', err.message);
    }
    console.log('File written successfully in async mode.');
});

