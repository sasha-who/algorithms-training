const getResult = (data) => {
  const firstArray = data[0].split(" ");
  const secondArray = data[1].split(" ");
  const combinedSet = new Set([...firstArray, ...secondArray]);
  const equalNumbersCount = firstArray.length + secondArray.length - combinedSet.size;

  return equalNumbersCount;
};

const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().trim().split("\n");

fs.writeFileSync("output.txt", getResult(data).toString());
