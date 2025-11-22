const fs = require('fs');

fs.writeFileSync('./output/temp-file.txt', 'This is a temporary file that will be deleted shortly.');
console.log('file created with sync');

// if (fs.existsSync('./output/temp-file.txt')) {
//     console.log('file exist');
//     fs.unlinkSync('./output/temp-file.txt');
//     console.log('Temporary file deleted.');
// }

// trying with try and catch block
try {
    if (fs.existsSync('./output/temp-file.txt')) {
        console.log('file exist');
        fs.unlinkSync('./output/temp-file.txt');
        console.log('Temporary file deleted.');
    }
} catch (error) {
    console.error('An error occurred:', error.message);
}

// Asynchronous file deletion

fs.writeFile('./output/temp-file-async.txt', 'This is another temporary file that will be deleted asynchronously.', (err) => {
    if (err) {
        console.error('Error creating temporary file:', err.message);
        return;
    } else {
        console.log('Temporary file created asynchronously.');
    }

    fs.unlink('./output/temp-file-async.txt', (err) => {
        if (err) {
            console.error('Error deleting temporary file asynchronously:', err.message);
            return;
        } else {
            console.log('Temporary file deleted asynchronously.');
        }
    });
}); 