//most expensive single over by a bowler
const deliveries = require("./deliveries.json");
function mostExpensiveSingleOver() {
  const result = {};
  let max = 0;
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let bowler = delivery.bowler;
    let match_id = Number(delivery.match_id);
    let inning = Number(delivery.inning);
    let over = Number(delivery.over);
    let extras_type = delivery.extras_type;
    let total_runs = Number(delivery.total_runs);
    let key = `${match_id}-${inning}-${over}-${bowler}`;
    if (!result[key]) {
      result[key] = {
        bowler: bowler,
        match_id: match_id,
        inning: inning,
        over: over,
        runs: 0,
      };
    }
    if (extras_type != "wides" && extras_type != "noballs") {
      result[key].runs = result[key].runs + total_runs;
      if (result[key].runs > max) {
        max = result[key].runs;
      }
    }
  }
  let final = [];
  for (let key in result) {
    if (result[key].runs == max) {
      final.push(result[key]);
    }
  }
  return final;
}
const mostExpensiveSingleOverOutput = mostExpensiveSingleOver();
const formattedData = JSON.stringify(mostExpensiveSingleOverOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("mostExpensiveSingleOver.txt", formattedData);
