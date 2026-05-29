//best chase
const matches = require("./matches.json");
function code() {
  const result = [];
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let id = match.id;
    let match_result = match.result;
    let winner = match.winner;
    let team1 = match.team1;
    let team2 = match.team2;
    let target_runs = match.target_runs;
    let method = match.method;
    let wonTeam;
    if (match_result == "wickets" && method != "D/L") {
      result.push([id, winner, target_runs]);
    }
  }
  let final = [];
  let sort = result.sort((a, b) => b[2] - a[2]);
  let bestScore = sort[0][2];
  for (let i = 0; i < result.length; i++) {
    if (result[i][2] == bestScore) {
      final.push(result[i]);
    }
  }
  return final;
}
const codeOutput = code();
const formattedData = JSON.stringify(codeOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("bestChase.txt", formattedData);
