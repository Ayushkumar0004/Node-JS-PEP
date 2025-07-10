const fs = require("fs");

console.log("Starting reading file.....");

const data = fs.readFileSync("file.txt", "utf8", (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
});

console.log(data);

console.log("Done reading file......");