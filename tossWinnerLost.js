//no of matches in which toss winner lost match
const matches = require("./matches.json");
function tossWinnerLost() {
  let tossWinnerLoss = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    // console.log(match);
    let season = match.season;
    // console.log(season);
    let winner = match.winner;
    let toss_winner = match.toss_winner;
    // console.log(toss_winner);
    if (toss_winner != winner) {
      if (!tossWinnerLoss[season]) {
        tossWinnerLoss[season] = 0;
      }
      tossWinnerLoss[season]++;
    }
  }
  return tossWinnerLoss;
}
// console.log(tossWinnerLost());
const tossWinnerLostOutput = tossWinnerLost();
const fs = require("fs");
let formattedData = JSON.stringify(tossWinnerLostOutput, null, 2);
fs.writeFileSync("tossWinnerLost.txt", formattedData);
