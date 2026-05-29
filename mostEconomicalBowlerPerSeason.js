//most economical bowler per season
const deliveries = require("./deliveries.json");
const matches = require("./matches.json");
function code() {
  let result = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let id = match.id;
    let season = match.season;
    for (let j = 0; j < deliveries.length; j++) {
      let delivery = deliveries[j];
      let match_id = delivery.match_id;
      let bowler = delivery.bowler;
      let extras_type = delivery.extras_type;
      let inning = Number(delivery.inning);
      let total_runs = Number(delivery.total_runs);
      if (id == match_id) {
        if (!result[season]) {
          result[season] = {};
        }
        if (!result[season][bowler]) {
          result[season][bowler] = { balls: 0, runs: 0, overs: 0, economy: 0 };
        }
        if (inning == 1 || inning == 2) {
          if (extras_type != "wides" && extras_type != "noballs") {
            result[season][bowler].balls++;
          }
          if (extras_type != "byes" && extras_type != "legbyes") {
            result[season][bowler].runs =
              result[season][bowler].runs + total_runs;
          }
        }
      }
    }
  }
  for (let season in result) {
    for (let bowler in result[season]) {
      if (result[season][bowler].balls > 10) {
        let total_overs = Math.floor(result[season][bowler].balls / 6);
        let total_balls = result[season][bowler].balls % 6;
        result[season][bowler].overs = `${total_overs}.${total_balls}`;
        result[season][bowler].economy =
          (result[season][bowler].runs / result[season][bowler].balls) * 6;
      }
    }
  }
  let final = [];
  for (let season in result) {
    let least = Infinity;
    let bestBowler = "";
    for (let bowler in result[season]) {
      if (result[season][bowler].economy > 0) {
        if (result[season][bowler].economy < least) {
          least = result[season][bowler].economy;
          bestBowler = bowler;
        }
      }
    }
    final.push({ season: season, bowler: bestBowler, economy: least });
  }
  return final;
}
const codeOutput = code();
const formattedData = JSON.stringify(codeOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("mostEconomicalBowlerPerSeason.txt", formattedData);
