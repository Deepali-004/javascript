//most common dismissal type for batter
const { json } = require("node:stream/consumers");
const deliveries = require("./deliveries.json");
function mostCommonDIsmissalType() {
  const result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let batter = delivery.batter;
    let player_dismissed = delivery.player_dismissed;
    let dismissal_kind = delivery.dismissal_kind;
    if (player_dismissed == "NA") continue;
    if (!result[player_dismissed]) {
      result[player_dismissed] = {};
    }
    if (!result[player_dismissed][dismissal_kind]) {
      result[player_dismissed][dismissal_kind] = 0;
    }
    result[player_dismissed][dismissal_kind]++;
  }
  const final = {};
  for (let batter in result) {
    let max = 0;
    for (let dismissalKind in result[batter]) {
      if (result[batter][dismissalKind] > max) {
        max = result[batter][dismissalKind];
      }
      final[batter] = { dismissalKind: dismissalKind, dismissedTimes: max };
    }
  }
  return final;
}
const mostCommonDIsmissalTypeOutput = mostCommonDIsmissalType();
const formattedData = JSON.stringify(mostCommonDIsmissalTypeOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("mostCommonDismissalTypeForBatter.txt", formattedData);
