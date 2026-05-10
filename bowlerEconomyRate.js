//economy rate of bowlers
const deliveries = require("./deliveries.json");
function bowlerEconomyRate() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let bowler = delivery.bowler;
    let inning = delivery.inning;
    let extras_type = delivery.extras_type;
    let ball = Number(delivery.ball);
    let total_runs = Number(delivery.total_runs);
    if (!result[bowler]) {
      result[bowler] = { totalBalls: 0, totalRuns: 0, economy: 0 };
    }
    if (inning == 1 || inning == 2) {
      if (extras_type != "wides" && extras_type != "noballs") {
        result[bowler].totalBalls++;
      }
      if (extras_type != "byes" && extras_type != "legbyes") {
        result[bowler].totalRuns = result[bowler].totalRuns + total_runs;
      }
    }
  }
  let economyRate = 0;
  for (let bowler in result) {
    economyRate = (result[bowler].totalRuns / result[bowler].totalBalls) * 6;
    result[bowler].economy = economyRate;
  }
  return result;
}
console.log(bowlerEconomyRate());
const bowlerEconomyRateOutput = bowlerEconomyRate();
const formattedData = JSON.stringify(bowlerEconomyRateOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("bowlerEconomyRate.txt", formattedData);
