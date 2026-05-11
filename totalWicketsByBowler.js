//total wickets by each bowler
const deliveries = require("./deliveries.json");
function totalWicketsByBowler() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let bowler = delivery.bowler;
    let wickets = Number(delivery.is_wicket);
    let inning = Number(delivery.inning);
    let dismissal_kind = delivery.dismissal_kind;
    // console.log(wickets);
    if (!result[bowler]) {
      result[bowler] = 0;
    }
    if (inning == 1 || inning == 2) {
      result[bowler] = result[bowler] + wickets;
      if (dismissal_kind != "run out") {
      }
    }
  }
  //   console.log(result);
  return result;
}
console.log(totalWicketsByBowler());
const totalWicketsByBowlerOutput = totalWicketsByBowler();
const formattedData = JSON.stringify(totalWicketsByBowlerOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("totalWicketsByBowler.txt", formattedData);
