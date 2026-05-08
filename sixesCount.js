//total sixes by each batter
const deliveries = require("./deliveries.json");
function sixesCount() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let batter = delivery.batter;
    let runs = Number(delivery.batsman_runs);
    // console.log(runs);
    if (!result[batter]) {
      result[batter] = 0;
    }
    if (runs == 6) {
      result[batter]++;
    }
  }
  return result;
}
// console.log(sixesCount());
const sixesCountOutput = sixesCount();
const formattedData = JSON.stringify(sixesCountOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("sixesCount.txt", formattedData);
