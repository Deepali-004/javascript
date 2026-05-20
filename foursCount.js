//total fours by each batter
const deliveries = require("./deliveries.json");
function foursCount() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let batter = delivery.batter;
    let runs = Number(delivery.batsman_runs);
    let inning = Number(delivery.inning);
    // console.log(runs);
    if (!result[batter]) {
      result[batter] = 0;
    }
    if (runs == 4 && (inning == 1 || inning == 2)) {
      result[batter]++;
    }
  }
  return result;
}
// console.log(foursCount());
const foursCountOutput = foursCount();
const formattedData = JSON.stringify(foursCountOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("foursCount.txt", formattedData);
