// Importing a module
const fs = require("fs");
// Reading from the file
let text = fs.readFileSync("Backend/delete.txt", "utf-8")
// replacing the content of the file
text = text.replace("file", "\nI am replacing the content of this file\n")
// logging the content ot the console
console.log(text)

console.log("Creating a new file")
// Creating a new text file and writing to it
fs.writeFileSync("Backend/write.txt", text)