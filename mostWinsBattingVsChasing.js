//team with most wins batting first vs chasing
//{
//{bat: 'srh'},
//{field: 'kkr'}
//}
const matches = require("./matches.json");
function mostWinsBattingVsChasing() {
  let result = {};
  let finalOutput = { bat: [], field: [] };
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let tossWinner = match.toss_winner;
    let tossDecision = match.toss_decision;
    let winner = match.winner;
    let team1 = match.team1;
    let team2 = match.team2;
    let obj = {};
    let count = 0;
    // console.log(tossWinner);
    //   if (tossDecision == "bat") {
    //     obj.batting = tossWinner;
    //     // console.log(result);
    //     if (tossWinner == team1) {
    //       obj.chasing = team2;
    //     } else {
    //       obj.chasing = team1;
    //     }
    //     obj.winner = winner;
    //   } else {
    //     obj.chasing = tossWinner;
    //     if (tossWinner == team1) {
    //       obj.batting = team2;
    //     } else {
    //       obj.batting = team1;
    //     }
    //     obj.winner = winner;
    //   }
    //   result.push(obj);
    //   // console.log(result);
    // }
    // for (let value of result) {
    // console.log(result);
    // for (let key in value) {
    //   console.log(key);
    // }
    // if (value.winner == value.batting) {
    //   if (!finalOutput[value.winner]) {
    //     finalOutput[value.winner] = 1;
    //   } else {
    //     finalOutput[value.winner]++;
    //   }
    // }
    // if (value.winner == value.chasing) {
    //   if (!finalOutput[value.winner]) {
    //     finalOutput[value.winner] = 1;
    //   } else {
    //     finalOutput[value.winner]++;
    //   }
    // }
    if (tossDecision == "bat") {
      if (!result[tossDecision]) {
        result[tossDecision] = [];
        if (tossWinner == team1) {
          obj.battingTeam = tossWinner;
          obj.chasingTeam = team2;
        } else {
          obj.battingTeam = tossWinner;
          obj.chasingTeam = team1;
        }
        obj.tossWinner = tossWinner;
        obj.winner = winner;
        result[tossDecision].push(obj);
      } else {
        if (tossWinner == team1) {
          obj.battingTeam = tossWinner;
          obj.chasingTeam = team2;
        } else {
          obj.battingTeam = tossWinner;
          obj.chasingTeam = team1;
        }
        obj.tossWinner = tossWinner;
        obj.winner = winner;
        result[tossDecision].push(obj);
      }
    }
    if (tossDecision == "field") {
      if (!result[tossDecision]) {
        result[tossDecision] = [];
        if (tossWinner == team1) {
          obj.battingTeam = tossWinner;
          obj.chasingTeam = team2;
        } else {
          obj.battingTeam = tossWinner;
          obj.chasingTeam = team1;
        }
        obj.tossWinner = tossWinner;
        obj.winner = winner;
        result[tossDecision].push(obj);
      } else {
        if (tossWinner == team1) {
          obj.battingTeam = tossWinner;
          obj.chasingTeam = team2;
        } else {
          obj.battingTeam = tossWinner;
          obj.chasingTeam = team1;
        }
        obj.tossWinner = tossWinner;
        obj.winner = winner;
        result[tossDecision].push(obj);
      }
    }
    // for (let key in result) {
    //   // console.log(key);
    //   if (!finalOutput[key]) {
    //     finalOutput[key] = [];
    //     finalOutput[key].push(result[key]);
    //   } else {
    //     finalOutput[key].push(result[key]);
    //   }
    //   for (let innerKey in result[key]) {
    // console.log(result[key][innerKey]);
    // if (result[key][innerKey].team == result[key][innerKey].winner) {
    //   if (!finalOutput[result[key][innerKey].team]) {
    //     finalOutput[result[key][innerKey].team] = 1;
    //     // console.log("here", result[key][innerKey]);
    //   } else {
    //     finalOutput[result[key][innerKey].team]++;
    //   }
    // }
    // }
    // }
  }
  for (let key in result) {
    // console.log(key);
    // console.log(result[key]);
    // console.log("outer loop");
    // for (let innerKey of result[key]) {
    //   //   // console.log("inner loop before key");
    //   console.log(innerKey[battingTeam]);
    //   //   // console.log("inner loop after key");
    // }
    // console.log(key);
    if (key == "bat") {
      for (let innerKey of result[key]) {
        if (innerKey.tossWinner == innerKey.winner) {
          if (!finalOutput[key][winner]) {
            finalOutput[key][winner] = 0;
          } else {
            finalOutput[key][winner]++;
          }
        }
        console.log(innerKey.battingTeam);
      }
    } else if (key == "field") {
      for (let innerKey of result[key]) {
        if (innerKey.tossWinner == innerKey.winner) {
          if (!finalOutput[key][innerKey.winner]) {
            finalOutput[key][innerKey.winner] = 0;
          } else {
            finalOutput[key][innerKey.winner]++;
          }
        }
        // console.log(innerKey.battingTeam);
      }
    }
  }
  console.log(finalOutput);
  // Code Suggestions: Critical abandon found. This robust function generates significant stats, but completely forgets to write a 'return finalOutput;' statement, rendering execution useless as it returns undefined.
  // console.log(result);
  // console.log(battingArray);
}
console.log(mostWinsBattingVsChasing());
