//batter with most dot balls
const deliveries = require("./deliveries.json");
function batterWithMostDots() {
  let result = {};
  let output = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let batter = delivery.batter;
    let totalRuns = delivery.total_runs;
    if (!result[batter]) {
      result[batter] = 0;
    }
    if (totalRuns == 0) {
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
