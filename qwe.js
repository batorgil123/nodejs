const fs = require("fs");

// fs.readFile('task1.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err);
//       return;
//     }
//     const words=data.split(" ");
//     const index=words.indexOf('banana');
//     console.log(words[index+1]);
// })
// fs.readFile("task1.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   const ww = data.split(" ");
//   fs.readFile("test.txt", "utf8", (err, data2) => {
//     if (err) {
//       console.error("Error reading file:", err);
//       return;
//     }
//     const qq = data + " " + data2;
//     fs.writeFile("merged.txt", qq, "utf8", (err) => {
//       if (err) {
//         console.error("Error reading file:", err);
//         return;
//       }
//     });
//   });
// });
