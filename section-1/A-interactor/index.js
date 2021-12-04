const getResult = (data) => {
  const [exitCode, interactor, checker] = data.map((item) => Number(item));

  switch (interactor) {
    case 0:
      return exitCode === 0 ? checker : 3;
    case 1:
      return checker;
    case 4:
      return exitCode === 0 ? 4 : 3;
    case 6:
      return 0;
    case 7:
      return 1;
    default:
      return interactor;
  }
};

const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().split("\n");

fs.writeFileSync("output.txt", getResult(data).toString());
