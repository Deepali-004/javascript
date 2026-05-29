//most runs at a specific venue
const deliveries = require("./deliveries.json");
const matches = require("./matches.json");
function code() {
  const result = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let id = match.id;
    let venue = match.venue;
    for (let j = 0; j < deliveries.length; j++) {
      let delivery = deliveries[j];
      let match_id = delivery.match_id;
      let batsman_runs = Number(delivery.batsman_runs);
      let batter = delivery.batter;
      if (id == match_id) {
        if (!result[venue]) {
          result[venue] = {};
        }
        if (!result[venue][batter]) {
          result[venue][batter] = 0;
        }
        result[venue][batter] = result[venue][batter] + batsman_runs;
      }
    }
  }
  let final = [];
  for (let venue in result) {
    let sort = Object.entries(result[venue]).sort((a, b) => b[1] - a[1]);
    let topBatter = sort[0][0];
    let topBatterRuns = sort[0][1];
    final.push({ venue: venue, batter: topBatter, runs: topBatterRuns });
  }
  return final;
}
const codeOutput = code();
const formattedData = JSON.stringify(codeOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("mostRunsAtVenue.txt", formattedData);
