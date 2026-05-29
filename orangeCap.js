//orange cap of season
const deliveries = require("./deliveries.json");
const matches = require("./matches.json");
function orangeCap() {
  const result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let batter = delivery.batter;
    let batsman_runs = Number(delivery.batsman_runs);
    let match_id = Number(delivery.match_id);
    let inning = Number(delivery.inning);
    for (let j = 0; j < matches.length; j++) {
      let match = matches[j];
      let season = match.season;
      let id = Number(match.id);
      if (match_id == id) {
        if (!result[season]) {
          result[season] = {};
        }
        if (inning == 1 || inning == 2) {
          if (!result[season][batter]) {
            result[season][batter] = 0;
          }
          result[season][batter] = result[season][batter] + batsman_runs;
        }
      }
    }
  }
  let final = [];
  for (let season in result) {
    let sorted = Object.entries(result[season]).sort((a, b) => b[1] - a[1]);
    let topBatter = sorted[0];
    final.push({ season: season, batter: topBatter[0], runs: topBatter[1] });
  }

  return final;
}
const orangeCapOutput = orangeCap();
const formattedData = JSON.stringify(orangeCapOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("orangeCap.txt", formattedData);
