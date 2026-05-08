//total runs scored by each batter
const deliveries = require("./deliveries.json");
function totalRunsByBatter() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let batsmanRuns = delivery.batsman_runs;
    let batter = delivery.batter;
    let inning = Number(delivery.inning);
    if (!result[batter]) {
      //   console.log("batter first time found");
      result[batter] = 0;
    }
    // console.log("outside if loop");
    // console.log(result[batter]);
    if (inning == 1 || inning == 2) {
      result[batter] = result[batter] + Number(batsmanRuns);
    }

    // console.log(result);
  }
  //   console.log(batter);
  // console.log(result);
  return result;
}
console.log(totalRunsByBatter());
const totalRunsByBatterOutput = totalRunsByBatter();
const formattedData = JSON.stringify(totalRunsByBatterOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("totalRunsByBatter.txt", formattedData);
