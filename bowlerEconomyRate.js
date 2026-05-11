//economy rate of bowlers
const deliveries = require("./deliveries.json");
function bowlerEconomyRate() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    const delivery = deliveries[i];
    const { bowler, inning, extras_type, ball, total_runs } = delivery;
    if (!result[bowler]) {
      result[bowler] = { totalBalls: 0, totalRuns: 0, economy: 0 };
    }
    if (Number(inning) == 1 || Number(inning) == 2) {
      if (extras_type != "wides" && extras_type != "noballs") {
        result[bowler].totalBalls++;
      }
      if (extras_type != "byes" && extras_type != "legbyes") {
        result[bowler].totalRuns =
          result[bowler].totalRuns + Number(total_runs);
      }
    }
  }
  let economyRate = 0;
  for (let bowler in result) {
    if (result[bowler].totalBalls > 0) {
      economyRate = (result[bowler].totalRuns / result[bowler].totalBalls) * 6;
      result[bowler].economy = economyRate;
    } else {
      result[bowler].economy = 0;
    }
  }
  return result;
}
console.log(bowlerEconomyRate());
const bowlerEconomyRateOutput = bowlerEconomyRate();
const formattedData = JSON.stringify(bowlerEconomyRateOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("bowlerEconomyRate.txt", formattedData);
