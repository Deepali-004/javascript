//strike rate of each batter
const deliveries = require("./deliveries.json");
function strikeRateOfEachBatter() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let batter = delivery.batter;
    let batsmanRuns = Number(delivery.batsman_runs);
    let extraType = delivery.extras_type;
    let inning = Number(delivery.inning);
    let wide = "wides";
    if (!result[batter]) {
      result[batter] = { runs: 0, balls: 0, strike_rate: 0 };
    }
    if (inning == 1 || inning == 2) {
      if (extraType != wide) {
        result[batter].balls++;
      }
      result[batter].runs = result[batter].runs + batsmanRuns;
      //   console.log(result[batter].runs, batter);
    }
  }
  for (let batter in result) {
    let strike = (result[batter].runs / result[batter].balls) * 100;
    result[batter].strike_rate = strike;
  }
  return result;
}
console.log(strikeRateOfEachBatter());
const strikeRateOfEachBatterOutput = strikeRateOfEachBatter();
const formattedData = JSON.stringify(strikeRateOfEachBatterOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("strikeRateOfEachBatter.txt", formattedData);
