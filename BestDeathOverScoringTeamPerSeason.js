//teams with best death over scoring per season
const matches = require("./matches.json");
const deliveries = require("./deliveries.json");
function code() {
  let result = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let id = match.id;
    let season = Number(match.season);
    for (let j = 0; j < deliveries.length; j++) {
      let delivery = deliveries[j];
      let match_id = delivery.match_id;
      let inning = Number(delivery.inning);
      let batting_team = delivery.batting_team;
      let over = Number(delivery.over);
      let total_runs = Number(delivery.total_runs);
      if (match_id == id) {
        if (!result[season]) {
          result[season] = {};
        }
        if (inning == 1 || inning == 2) {
          if (over >= 15) {
            if (!result[season][batting_team]) {
              result[season][batting_team] = 0;
            }
            result[season][batting_team] =
              result[season][batting_team] + total_runs;
          }
        }
      }
    }
  }
  for (let season in result) {
    let sorted = Object.entries(result[season]).sort((a, b) => b[1] - a[1]);
    result[season] = sorted[0];
  }
  return result;
}
const codeOutput = code();
const fomattedData = JSON.stringify(codeOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("BestDeathOverScoringTeamPerSeason.txt", fomattedData);
