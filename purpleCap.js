//purple cap
const matches = require("./matches.json");
const deliveries = require("./deliveries.json");
function purpleCap() {
  const result = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let id = match.id;
    let season = match.season;
    for (let j = 0; j < deliveries.length; j++) {
      let delivery = deliveries[j];
      let bowler = delivery.bowler;
      let extras_type = delivery.extras_type;
      let wicket = Number(delivery.is_wicket);
      let inning = Number(delivery.inning);
      let match_id = delivery.match_id;
      if (match_id == id) {
        if (!result[season]) {
          result[season] = {};
        }
        if (inning == 1 || inning == 2) {
          if (!result[season][bowler]) {
            result[season][bowler] = 0;
          }
          if (extras_type != "runout") {
            result[season][bowler] = result[season][bowler] + wicket;
          }
        }
      }
    }
  }
  let final = [];
  for (let season in result) {
    let sorted = Object.entries(result[season]).sort((a, b) => b[1] - a[1]);
    let topBowler = sorted[0];
    final.push({ season: season, bowler: topBowler[0], wickets: topBowler[1] });
  }
  return final;
}
const purpleCapOutput = purpleCap();
const formattedDat = JSON.stringify(purpleCapOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("purpleCap.txt", formattedDat);
