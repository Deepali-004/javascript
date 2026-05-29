//lowest defended total
const matches = require("./matches.json");
function code() {
  let result = [];
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let id = match.id;
    let target_runs = Number(match.target_runs);
    let toss_decision = match.toss_decision;
    let toss_winner = match.toss_winner;
    let winner = match.winner;
    let match_result = match.result;
    let team1 = match.team1;
    let team2 = match.team2;
    let method = match.method;
    let battingTeam;
    let chasingTeam;
    if (match_result == "runs" && method != "D/L") {
      result.push([id, winner, target_runs - 1]);
    }
  }
  let final = [];
  result.sort((a, b) => a[2] - b[2]);
  let lowestScore = result[0][2];
  for (let i = 0; i < result.length; i++) {
    if (result[i][2] == lowestScore) {
      final.push(result[i]);
    }
  }
  return final;
}
const codeOutput = code();
const formattedData = JSON.stringify(codeOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("lowestDefendedTotal.txt", formattedData);
