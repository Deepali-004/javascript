//total balls faced by each batter
const deliveries = require("./deliveries.json");
function totalBallsFacedByEachBatter() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let batter = delivery.batter;
    let extraType = delivery.extras_type;
    let batsman_runs = delivery.batsman_runs;
    let wide = "wides";
    let inning = Number(delivery.inning);
    if (!result[batter]) {
      result[batter] = 0;
    }
    if (extraType != wide && (inning == 1 || inning == 2)) {
      result[batter]++;
    }
  }
  return result;
}
const totalBallsFacedByEachBatterOutput = totalBallsFacedByEachBatter();
const formattedData = JSON.stringify(
  totalBallsFacedByEachBatterOutput,
  null,
  2,
);
const fs = require("fs");
fs.writeFileSync("totalBallsFacedByEachBatter.txt", formattedData);
