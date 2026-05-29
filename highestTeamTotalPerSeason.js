//highest team total per season
const matches = require("./matches.json");
const deliveries = require("./deliveries.json");
const test = require("node:test");
function code() {
  let result = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let id = match.id;
    let season = match.season;
    for (let j = 0; j < deliveries.length; j++) {
      let delivery = deliveries[j];
      let batting_team = delivery.batting_team;
      let total_runs = Number(delivery.total_runs);
      let inning = delivery.inning;
      let match_id = delivery.match_id;
      if (match_id == id) {
        if (!result[season]) {
          result[season] = {};
        }
        if (inning == 1 || inning == 2) {
          if (!result[season][batting_team]) {
            result[season][batting_team] = 0;
          }
          result[season][batting_team] =
            result[season][batting_team] + total_runs;
        }
      }
    }
  }
  let final = [];
  for (let season in result) {
    let sorted = Object.entries(result[season]).sort((a, b) => (b[1] = a[1]));
    let topTeam = sorted[0];
    final.push({ season: season, team: topTeam[0], total_runs: topTeam[1] });
  }
  return final;
}
const codeOutput = code();
const formattedData = JSON.stringify(codeOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("highestTeamTotalPerSeason.txt", formattedData);
