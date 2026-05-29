//batter with most runs in winning causes
const deliveries = require("./deliveries.json");
const matches = require("./matches.json");
function code() {
  const result = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let id = match.id;
    let winner = match.winner;
    for (let j = 0; j < deliveries.length; j++) {
      let delivery = deliveries[j];
      let match_id = delivery.match_id;
      let batsman_runs = Number(delivery.batsman_runs);
      let batter = delivery.batter;
      let batting_team = delivery.batting_team;
      let inning = Number(delivery.inning);
      if (match_id == id) {
        if (winner == batting_team) {
          if (!result[batter]) {
            result[batter] = 0;
          }
          if (inning == 1 || inning == 2) {
            result[batter] = result[batter] + batsman_runs;
          }
        }
      }
    }
  }
  let sort = Object.entries(result).sort((a, b) => b[1] - a[1]);
  return sort[0];
}
const codeOutput = code();
const formattedData = JSON.stringify(codeOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("batterWithMostRunsInWinningCause.txt", formattedData);
