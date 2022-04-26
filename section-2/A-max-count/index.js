const getResult = (data) => {
  const endIndex = data.indexOf("0");  
  const seq = data.slice(0, endIndex).map((element) => Number.parseInt(element));
  const maxValue = Math.max(...seq);
  let counter = 0;

  for (const element of seq) {
    if (element === maxValue) {
      counter++;
    }
  }
  
  return counter;
};

const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().split("\n");

fs.writeFileSync("output.txt", getResult(data).toString());
