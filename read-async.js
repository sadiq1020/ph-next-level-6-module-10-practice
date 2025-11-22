const fs = require('fs');

console.log('start reading');
fs.readFile('./data/diary.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }
    console.log('file content:');
    console.log(data);
});

console.log('finished?- no, because file reading is still in progress... as this is run asynchronously');