const getResult = (data) => {
  // Do something
};

const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().trim().split("\n");

fs.writeFileSync("output.txt", getResult(data).toString());
