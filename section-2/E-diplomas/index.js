const getResult = (data) => {
  const [ [ foldersCount ], folders ] = data;
  let maxDimplomasFolder = 0;
  let secondsSum = 0;

  for (let i = 0; i < foldersCount; i++) {
    maxDimplomasFolder = maxDimplomasFolder >= folders[i] ? maxDimplomasFolder : folders[i];
    secondsSum += folders[i];
  }

  return secondsSum - maxDimplomasFolder; 
};

const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().trim().split("\n").map((part) => part.split(" ").map(Number));

fs.writeFileSync("output.txt", getResult(data).toString());
