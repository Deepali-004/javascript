//highest partnership
const deliveries = require("./deliveries.json");
function highestPartnership() {
  const result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let match_id = Number(delivery.match_id);
    let batter = delivery.batter;
    let non_striker = delivery.non_striker;
    let batsman_runs = Number(delivery.batsman_runs);
    let pair = [batter, non_striker].sort().join("-");
    if (!result[pair]) {
      result[pair] = {};
    }
    if (!result[pair][match_id]) {
      result[pair][match_id] = 0;
    }
    result[pair][match_id] = result[pair][match_id] + batsman_runs;
  }
  let max = 0;
  for (let pair in result) {
    for (let match in result[pair]) {
      if (result[pair][match] > max) {
        max = result[pair][match];
      }
    }
  }
  let final = [];
  for (let pair in result) {
    for (let match in result[pair]) {
      if (result[pair][match] == max) {
        final.push({ pair: pair, partnership: max });
      }
    }
  }
  return final;
}
const highestPartnershipOutput = highestPartnership();
const formattedData = JSON.stringify(highestPartnershipOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("highestPartnership.txt", formattedData);
