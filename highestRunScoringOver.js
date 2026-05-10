//highest run scoring over
const deliveries = require("./deliveries.json");
const matches = require("./matches.json");
function highestRunScoringOver() {
  let result = {};
  let output = [];
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let matchId = delivery.match_id;
    let inning = Number(delivery.inning);
    let over = Number(delivery.over);
    let totalRuns = Number(delivery.total_runs);
    let battingTeam = delivery.batting_team;
    let bowlingTeam = delivery.bowling_team;
    let pair = [matchId, inning, over];
    if (inning == 1 || inning == 2) {
      if (!result[matchId]) {
        result[matchId] = {};
      }
      if (!result[matchId][inning]) {
        result[matchId][inning] = {};
      }
      if (!result[matchId][inning][over]) {
        result[matchId][inning][over] = 0;
      }
      result[matchId][inning][over] = result[matchId][inning][over] + totalRuns;
    }
    // console.log(pair);
  }
  let max = 0;

  for (let matchId in result) {
    // console.log(matchId);
    for (let inning in result[matchId]) {
      max = Math.max(max, ...Object.values(result[matchId][inning]));
    }
  }
  let outputMatchInning;
  let outputMatchOver;
  let outputMatchId;
  let obj = {};
  for (let matchId in result) {
    for (let inning in result[matchId]) {
      for (let over in result[matchId][inning]) {
        if (result[matchId][inning][over] == max) {
          for (let i = 0; i < matches.length; i++) {
            let match = matches[i];
            if (match.id == matchId) {
              obj = {
                matchId: match.id,
                season: match.season,
                team1: match.team1,
                team2: match.team2,
                inning: inning,
                over: over,
                maxRuns: max,
              };
              output.push(obj);
            }
          }
        }
      }
    }
  }
  console.log(output);
  return output;
}
highestRunScoringOver();
const highestRunScoringOverOutput = highestRunScoringOver();
const formattedData = JSON.stringify(highestRunScoringOverOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("highestRunScoringOver.txt", formattedData);
