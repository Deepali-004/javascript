//bowlers best at death overs
const deliveries = require("./deliveries.json");
function code() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let bowler = delivery.bowler;
    let inning = Number(delivery.inning);
    let over = Number(delivery.over);
    let extras_type = delivery.extras_type;
    let total_runs = Number(delivery.total_runs);
    if (!result[bowler]) {
      result[bowler] = { economy: 0, runs: 0, balls: 0, death_overs: 0 };
    }
    if (inning == 1 || inning == 2) {
      if (over >= 15) {
        if (extras_type != "wides" && extras_type != "noballs") {
          result[bowler].balls++;
        }
        if (extras_type != "byes" && extras_type != "legbyes") {
          result[bowler].runs = result[bowler].runs + total_runs;
        }
      }
    }
  }
  for (let bowler in result) {
    if (result[bowler].balls > 23) {
      let overs = Math.floor(result[bowler].balls / 6);
      let balls = result[bowler].balls % 6;
      result[bowler].death_overs = `${overs}.${balls}`;
      result[bowler].economy = result[bowler].runs / (result[bowler].balls / 6);
    }
  }
  let sorted = Object.entries(result)
    .filter(([bowler, stats]) => stats.economy > 0)
    .sort((a, b) => a[1].economy - b[1].economy);
  return sorted.slice(0, 10);
}
const codeOutput = code();
const fomattedData = JSON.stringify(codeOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("bowlersBestAtDeathOvers.txt", fomattedData);
