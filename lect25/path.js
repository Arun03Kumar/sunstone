// console.log(__dirname);
// console.log(__filename);

const path = require("path");

const result = path.join("users", "lect25", "notes.txt");
// console.log(result);

// const folder = "Images//////";
// const fileName = "photo.jpg";
// const filePath = path.join(folder, fileName);
// console.log(filePath);

// const res = path.join("users", "lect25", "..", "notes.txt");
// console.log(res);

console.log(path.basename(result)); // notes.txt
