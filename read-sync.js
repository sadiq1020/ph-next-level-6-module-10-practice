const fs = require("fs");

console.log("start reading");

// const data = fs.readFileSync("./data/diary.txt", "utf-8");
// console.log(data);

try {
    const data1 = fs.readFileSync("./data/entries/entry1.txt", "utf-8");
    console.log('file content:');
    console.log(data1);
} catch (err) {
    console.error("Error reading entry1:", err.message);
}

console.log('finished');