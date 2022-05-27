// First solution O(N*K)

const HOUSE_ID = "1";
const SHOP_ID = "2";

const getResult = (data) => {
  const shopIndexes = [];
  const distances = [];

  data.forEach((element, index) => {
    if (element === SHOP_ID) {
      shopIndexes.push(index);
    }
  });

  data.forEach((element, index) => {
    if (element === HOUSE_ID) {
      const minDistance = Math.min(...shopIndexes.map((shopIndex) => Math.abs(index - shopIndex)));

      distances.push(minDistance);
    }
  });

  return Math.max(...distances);
}; 

const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().split(" ");

fs.writeFileSync("output.txt", getResult(data).toString());
