const getResult = (data) => {
  const [studentsCount, coordinatesString] = data;
  const housesCoordinates = coordinatesString.split(" ");
  const middleCoordinate = parseInt(Number(studentsCount) / 2);

  return housesCoordinates[middleCoordinate];
};

const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().split("\n");

fs.writeFileSync("output.txt", getResult(data).toString());
