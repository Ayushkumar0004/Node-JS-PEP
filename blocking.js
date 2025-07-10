const fs = require("fs");

console.log("Start reading file...");

const data = fs.readFileSync("file.txt", "utf8"); // Blocking
console.log(data);

console.log("Done reading file.");

/*
Start reading file...
<contents of file.txt>
Done reading file.
*/

// non blocking
const fs = require("fs");

console.log("Start reading file...");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("Done reading file.");

/**
Start reading file...
Done reading file.
<contents of file.txt> (after some time)

 */