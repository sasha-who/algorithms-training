const getResult = (data) => {
  const [stationCount, firstStation, lastStation] = data.map((item) => Number(item));

  const diff = Math.abs(firstStation - lastStation);
  const firstRoute = diff - 1;
  const secondRoute = stationCount - diff - 1;

  return (firstRoute > secondRoute) ? secondRoute : firstRoute;
};

const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().split(" ");

fs.writeFileSync("output.txt", getResult(data).toString());
