const getResult = (data) => {
  const [x, y] = data.map((item) => Number(item));

  if (x === y) {
    return 1;
  }

  return x <= 12 && y <= 12 ? 0 : 1;
};

const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().split(" ");

fs.writeFileSync("output.txt", getResult(data).toString());
