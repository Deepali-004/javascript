//rivalry
//{'mi-csk': {mi:21, csk:20, rivalry:1}}
const matches = require("./matches.json");
function rivalry() {
  let result = {};
  let final = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let team1 = match.team1;
    let team2 = match.team2;
    let winner = match.winner;
    let pairKey = [team1, team2].sort().join("-");
    // console.log(pairKey);
    if (!result[pairKey]) {
      result[pairKey] = {
        teams: pairKey.split("-"),
        matches: 0,
        wins: {},
        winDifference: 0,
      };
    }
    if (result[pairKey]) {
      result[pairKey].matches++;
    }
    // if (winner != "NA") continue;
    if (winner != "NA") {
      if (!result[pairKey].wins[winner]) {
        result[pairKey].wins[winner] = 0;
      }
      result[pairKey].wins[winner]++;
    }
    // console.log("print");
  }
  // let min = Infinity;
  // for (let pair in result) {
  //   let teams = result[pair].teams;
  //   let team1 = teams[0];
  //   let team2 = teams[1];
  //   let wins1 = result[pair].wins[team1] || 0;
  //   let wins2 = result[pair].wins[team2] || 0;
  //   //   console.log(pair);
  //   //   console.log(pair, wins1);
  //   let min = Infinity;
  //   let diff = Math.abs(wins1 - wins2);
  //   let finalTeam1 = "";
  //   let finalTeam2 = "";
  //   let finalTeam1Wins = 0;
  //   let finalTeam2Wins = 0;
  //   if (diff < min) {
  //     min = diff;
  //     finalTeam1 = team1;
  //     finalTeam1Wins = wins1;
  //     finalTeam2 = team2;
  //     finalTeam2Wins = wins2;
  //     final = {
  //       team1: finalTeam1,
  //       team1Wins: finalTeam1Wins,
  //       team2: finalTeam2,
  //       team2Wins: finalTeam2Wins,
  //       rivalry: min,
  //     };
  //   }
  // }
  console.log(result);
  // Code Suggestions: Functional disconnect discovered here. We compile the finalized result but forget to return it, making this entire block yield 'undefined' to callers. Let's ensure we explicitly 'return result;' at function close.
}
console.log(rivalry());
