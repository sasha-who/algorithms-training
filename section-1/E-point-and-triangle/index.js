const getResult = (data) => {
  const legLength = Number(data[0]);
  const [pointX, pointY] = data[1].split(" ").map((item) => Number(item));

  if (pointX >= 0 && pointY >= 0 && pointX + pointY <= legLength) {
    return 0;
  }

  const distanceToA = pointX ** 2 + pointY ** 2;
  const distanceToB = (pointX - legLength) ** 2 + pointY ** 2;
  const distanceToC = pointX ** 2 + (pointY - legLength) ** 2;
  const minDistance = Math.min(distanceToA, distanceToB, distanceToC);

  switch(minDistance) {
    case distanceToA:
      return 1;
    case distanceToB:
      return 2;
    case distanceToC:
      return 3;
  }
};

const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().split("\n");

fs.writeFileSync("output.txt", getResult(data).toString());
