//teams with highest dependency on toss
const matches = require("./matches.json");
function tossDependency() {
  let result = {};
  let output = [];
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let team1 = match.team1;
    let team2 = match.team2;
    let winner = match.winner;
    let tossWinner = match.toss_winner;
    if (!result[team1]) {
      result[team1] = {
        matchesPlayed: 0,
        wins: 0,
        winsWhereTossWon: 0,
        winRatio: 0,
      };
    }
    if (!result[team2]) {
      result[team2] = {
        matchesPlayed: 0,
        wins: 0,
        winsWhereTossWon: 0,
        winRatio: 0,
      };
    }
    result[team1].matchesPlayed++;
    result[team2].matchesPlayed++;
    if (winner == "NA") continue;
    result[winner].wins++;
    if (winner == tossWinner) {
      result[winner].winsWhereTossWon++;
    }
    // console.log(result[winner]);
  }
  for (let team in result) {
    // console.log(result[team]);
    if (result[team].matchesPlayed > 10 && result[team].wins > 0) {
      result[team].winRatio = result[team].winsWhereTossWon / result[team].wins;
    }
  }
  //   console.log(result);
  let max = -Infinity;
  for (let team in result) {
    if (result[team].winRatio > max) {
      max = result[team].winRatio;
    }
    // console.log(result[team].winRatio);
  }
  for (let team in result) {
    if (result[team].winRatio == max) {
      let obj = {
        team: team,
        matchesPlayed: result[team].matchesPlayed,
        wins: result[team].wins,
        winsWhereTossWon: result[team].winsWhereTossWon,
      };
      output.push(obj);
    }
  }
  //   console.log(output);
  return output;
  //   return result;
}
console.log(tossDependency());
const tossDependencyOutput = tossDependency();
const fs = require("fs");
const formattedData = JSON.stringify(tossDependencyOutput, null, 2);
fs.writeFileSync("tossDependency.txt", formattedData);
