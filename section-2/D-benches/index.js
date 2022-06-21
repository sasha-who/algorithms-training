const getResult = (data) => {
  const [ [ benchLength, propsCount ], props ] = data;
  const centre = Math.floor(benchLength / 2);

  for (let i = 0; i < propsCount; i++) {
    if (benchLength % 2 !== 0 && props[i] === centre) {
      return `${props[i]}`;
    }

    if (props[i] >= centre) {
      return `${props[i - 1]} ${props[i]}`;
    }
  }
};

const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent
  .toString()
  .trim()
  .split("\n")
  .map((part) => part.split(" ").map(Number));

fs.writeFileSync("output.txt", getResult(data));
