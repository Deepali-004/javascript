//total runs per match
const deliveries = require("./deliveries.json");
function totalRunsPerMatch() {
  let result = {};
  let output = [];
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let matchId = delivery.match_id;
    let totalRuns = Number(delivery.total_runs);
    let battingTeam = delivery.batting_team;
    let bowlingTeam = delivery.bowling_team;
    let inning = Number(delivery.inning);
    let matchPair = [battingTeam, bowlingTeam].sort().join(" , ");
    if (!result[matchId]) {
      result[matchId] = {
        matchPair: matchPair,
        totalRuns: 0,
      };
    }
    if (inning == 1 || inning == 2) {
      result[matchId].totalRuns = result[matchId].totalRuns + totalRuns;
    }
  }
  for (let id in result) {
    output.push(result[id]);
  }
  return output;
}
console.log(totalRunsPerMatch());
const totalRunsPerMatchOutput = totalRunsPerMatch();
const formattedData = JSON.stringify(totalRunsPerMatchOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("totalRunsPerMatch.txt", formattedData);
