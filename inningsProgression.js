//innings progression
const deliveries = require("./deliveries.json");
function inningsProgression() {
  const result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let match_id = Number(delivery.match_id);
    let inning = Number(delivery.inning);
    let over = Number(delivery.over);
    let total_runs = Number(delivery.total_runs);
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
      result[match_id][inning][over] =
        result[match_id][inning][over] + total_runs;
    }
  }
  for (let match in result) {
    for (let inning in result[match]) {
      let current_over_runs = 0;
      let progression_runs = 0;
      for (let over in result[match][inning]) {
        current_over_runs = result[match][inning][over];

        progression_runs = progression_runs + current_over_runs;
        result[match][inning][over] = progression_runs;
      }
    }
  }
  return result;
}
const inningsProgressionOutput = inningsProgression();
const formattedData = JSON.stringify(inningsProgressionOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("inningsProgression.txt", formattedData);
