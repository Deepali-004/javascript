//batter with most dot balls
const deliveries = require("./deliveries.json");
function batterWithMostDots() {
  let result = {};
  let output = {};
  for (let i = 0; i < deliveries.length; i++) {
    const delivery = deliveries[i];
    const { batter, total_runs, inning } = delivery;
    if (!result[batter]) {
      result[batter] = 0;
    }
    if (
      Number(total_runs) == 0 &&
      (Number(inning) == 1 || Number(inning) == 2)
    ) {
      result[batter]++;
    }
  }
  const max = Math.max(...Object.values(result));
  for (let batter in result) {
    if (result[batter] == max) {
      player = batter;
      output[player] = max;
    }
  }
  //   console.log(result);
  //   return max;
  return output;
}
console.log(batterWithMostDots());
let batterWithMostDotsOutput = batterWithMostDots();
const formattedData = JSON.stringify(batterWithMostDotsOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("batterWithMostDots.txt", formattedData);
