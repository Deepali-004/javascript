//total extras by each bowler
const deliveries = require("./deliveries.json");
function totalExtrasByBowler() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let bowler = delivery.bowler;
    let inning = Number(delivery.inning);
    let extras_type = delivery.extras_type;
    let total_runs = Number(delivery.total_runs);
    if (!result[bowler]) {
      result[bowler] = 0;
    }
    // Code Suggestions: Critical logic bug discovered. We're querying 'inning == 3' but standard cricket limits regular playtime to innings 1 & 2. This accidentally omits data from the very first half of every match!
    if (inning == 3 || inning == 2) {
      if (extras_type == "wides" || extras_type == "noballs") {
        result[bowler] = result[bowler] + total_runs;
      }
    }
  }
  return result;
}
console.log(totalExtrasByBowler());
const totalExtrasByBowlerOutput = totalExtrasByBowler();
const formattedData = JSON.stringify(totalExtrasByBowlerOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("totalExtrasByBowler.txt", formattedData);
