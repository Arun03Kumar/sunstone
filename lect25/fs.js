const fs = require("fs");

// fs.readFile("notes.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error reading file:", err);
//   } else {
//     console.log("File contents:", data);
//   }
// });

// const data = fs.readFileSync("notes.txt", "utf-8");
// console.log("File contents:", data);

// fs.writeFile("output.txt", "This is some text to write to the file.", (err) => {
//   if (err) {
//     console.log("Error writing to file:", err);
//   } else {
//     console.log("File written successfully.");
//   }
// });

// fs.writeFile("output.txt", "This is overwritten text.", (err) => {
//   if (err) {
//     console.log("Error appending to file:", err);
//   } else {
//     console.log("Text overwritten to file successfully.");
//   }
// });

// fs.writeFile(
//   "output.txt",
//   "This is appended with flag.",
//   { flag: "a" },
//   (err) => {
//     if (err) {
//       console.log("Error appending to file:", err);
//     } else {
//       console.log("Text appended to file successfully.");
//     }
//   },
// );

// fs.appendFile("output.txt", "This is appended text.", (err) => {
//   if (err) {
//     console.log("Error appending to file:", err);
//   } else {
//     console.log("Text appended to file successfully.");
//   }
// });

// fs.writeFile("empty.txt", "", () => {});

// fs.unlink("empty.txt", () => {});

// fs.rename("output.txt", "renamed.txt", () => {});

// fs.copyFile("renamed.txt", "copied.txt", () => {});

// fs.readdir(".", (err, files) => {
//   if (err) {
//     console.log("Error reading directory:", err);
//   } else {
//     console.log("Files in directory:", files);
//   }
// });

// fs.mkdir("newDir", (err) => {
//   if (err) {
//     console.log("Error creating directory:", err);
//   } else {
//     console.log("Directory created successfully.");
//   }
// });

// fs.rmdir("newDir", () => {});

// fs.readFile("notes.txt", "utf-8", (err, data) => {
//   fs.writeFile("output.txt", data, (err) => {
//     fs.appendFile("output.txt", "\nThis is appended text.", (err) => {});
//   });
// });

async function main() {
  const data = await fs.promises.readFile("notes.txt", "utf-8");
  console.log("File contents:", data);

  //   await fs.promises.rm("output.txt");
}

main();
