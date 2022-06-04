const getResult = (data) => {
  const arrayMiddleIndex = data.length % 2 === 0 ?
    data.length / 2 :
    Math.floor(data.length / 2);

  let counter = 0;

  for (let i = 0; i < arrayMiddleIndex; i++) {
    const rightIndex = data.length - 1 - i;

    if (data[i] !== data[rightIndex]) {
      counter++;
    }
  }

  return counter;
};

const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().trim().split("");

fs.writeFileSync("output.txt", getResult(data).toString());
