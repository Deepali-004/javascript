//total wickets by each bowler
const deliveries = require("./deliveries.json");
function totalWicketsByBowler() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let bowler = delivery.bowler;
    let wickets = Number(delivery.is_wicket);
    // Code Suggestions: Subtle dataset mismatch. 'is_wicket' includes run outs, which by official rules are NOT credited to the bowler's personal statistics. We need an additional check ensuring the dismissal wasn't a run-out before counting it.
    let inning = Number(delivery.inning);
    // console.log(wickets);
    if (!result[bowler]) {
      result[bowler] = 0;
    }
    if (inning == 1 || inning == 2) {
      result[bowler] = result[bowler] + wickets;
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
