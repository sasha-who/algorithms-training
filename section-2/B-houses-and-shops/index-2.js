// Second solution O(2N)
const HOUSE_ID = "1";
const SHOP_ID = "2";

const getResult = (data) => {
  let leftmostShopId = -Infinity;
  let righmostShopId = Infinity;
  const distances = Array.from({ length: data.length }).map(() => -Infinity);

  for (let i = 0; i < data.length; i++) {
    if (data[i] === HOUSE_ID) {
      distances[i] = i - leftmostShopId;
    }

    if (data[i] === SHOP_ID) {
      leftmostShopId = i;
    }
  }

  for (let i = data.length - 1; i > -1; i--) {
    if (data[i] === HOUSE_ID) {
      distances[i] = Math.min(distances[i], righmostShopId - i);
    }

    if (data[i] === SHOP_ID) {
      righmostShopId = i;
    }
  }

  return Math.max(...distances);
}; 

const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");
const data = fileContent.toString().split(" ");

fs.writeFileSync("output.txt", getResult(data).toString());
