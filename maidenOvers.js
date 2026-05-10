//maiden overs
const deliveries = require("./deliveries.json");
function maidenOver() {
  let result = {};
  let output = 0;
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let over = Number(delivery.over);
    let total_runs = Number(delivery.total_runs);
    let match_id = delivery.match_id;
    let inning = Number(delivery.inning);
    let extras_type = delivery.extras_type;
    if (!result[match_id]) {
      result[match_id] = {};
    }
    if (inning == 1 || inning == 2) {
      if (!result[match_id][inning]) {
        result[match_id][inning] = {};
      }
      if (!result[match_id][inning][over]) {
        result[match_id][inning][over] = 0;
      }
      if (extras_type != "byes" && extras_type != "legbyes") {
        result[match_id][inning][over] =
          result[match_id][inning][over] + total_runs;
      }
    }
  }
  for (let id in result) {
    for (let inning in result[id]) {
      for (let over in result[id][inning]) {
        if (result[id][inning][over] == 0) {
          output++;
        }
      }
    }
  }
  return output;
}
console.log(maidenOver());
const maidenOverOutput = maidenOver();
const formattedData = JSON.stringify(maidenOverOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("maidenOvers.txt", formattedData);
