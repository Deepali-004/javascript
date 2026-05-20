//most runs in death overs
const deliveries = require("./deliveries.json");
function mostRunsInDeathOvers() {
  const result = {};
  const finalResult = [];
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let inning = Number(delivery.inning);
    let over = Number(delivery.over);
    let bowler = delivery.bowler;
    let extras_type = delivery.extras_type;
    let total_runs = Number(delivery.total_runs);
    if (!result[bowler]) {
      result[bowler] = {
        death_overs: 0,
        death_over_runs: 0,
        death_over_balls: 0,
      };
    }
    if (inning == 1 || inning == 2) {
      if (over == 15 || over == 16 || over == 17 || over == 18 || over == 19) {
        if (extras_type != "wides" && extras_type != "noballs") {
          result[bowler].death_over_balls++;
        }
        if (extras_type != "legbyes" && extras_type != "byes") {
          result[bowler].death_over_runs =
            result[bowler].death_over_runs + total_runs;
        }
      }
    }
  }
  let maxRuns = 0;
  for (let bowler in result) {
    let overs = Math.floor(result[bowler].death_over_balls / 6);
    let balls = result[bowler].death_over_balls % 6;
    result[bowler].death_overs = `${overs}.${balls}`;
    if (result[bowler].death_over_runs > maxRuns) {
      maxRuns = result[bowler].death_over_runs;
    }
  }
  for (let bowler in result) {
    if (result[bowler].death_over_runs == maxRuns) {
      let obj = {
        bowler: bowler,
        death_over_runs: maxRuns,
        death_overs: result[bowler].death_overs,
        death_over_balls: result[bowler].death_over_balls,
      };
      finalResult.push(obj);
    }
  }
  return finalResult;
}
// mostRunsInDeathOvers();
const mostRunsInDeathOversOutput = mostRunsInDeathOvers();
const formattedData = JSON.stringify(mostRunsInDeathOversOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("mostRunsInDeathOvers.txt", formattedData);
