const { log } = require("console");

function readMYFile(filePath, callBack) {
  const fs = require("fs");
  fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) {
      callBack(err, null);
    } else {
      callBack(null, data);
    }
  });
}
readMYFile("myFile.txt", function (err, data) {
  if (err) {
    console.error("false reading file", err);
  } else {
    console.log("Got file content", data);
  }
});
