//total extras by each bowler
const deliveries = require("./deliveries.json");
function totalExtrasByBowler() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let bowler = delivery.bowler;
    let extraRuns = Number(delivery.extra_runs);
    if (!result[bowler]) {
      result[bowler] = 0;
    }
    result[bowler] = result[bowler] + extraRuns;
  }
  return result;
}
console.log(totalExtrasByBowler());
const totalExtrasByBowlerOutput = totalExtrasByBowler();
const formattedData = JSON.stringify(totalExtrasByBowlerOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("totalExtrasByBowler.txt", formattedData);
