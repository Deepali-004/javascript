//team with most wins batting first vs chasing
//{
//{bat: {'srh':12},{'rcb'10}},
//{field: {'kkr':10}, {'csk':8}}
//}
const matches = require("./matches.json");
function mostWinsBattingVsChasing2() {
  let result = { bat: {}, field: {} };
  let sortedArray = [];
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let tossWinner = match.toss_winner;
    let toss_decision = match.toss_decision;
    let winner = match.winner;
    let matchResult = match.result;
    let team1 = match.team1;
    let team2 = match.team2;
    let tossLoser = "";
    let battingTeam = "";
    let chasingTeam = "";
    if (winner == "NA") continue;
    if (tossWinner == team1) {
      tossLoser = team2;
    }
    if (tossWinner == team2) {
      tossLoser = team1;
    }
    if (toss_decision === "bat") {
      battingTeam = tossWinner;
      chasingTeam = tossLoser;
      if (battingTeam == winner) {
        if (!result.bat[battingTeam]) {
          result.bat[battingTeam] = 0;
        }
        result.bat[battingTeam]++;
      }
      if (chasingTeam == winner) {
        if (!result.field[chasingTeam]) {
          result.field[chasingTeam] = 0;
        }
        result.field[chasingTeam]++;
      }
      // if (!result.bat[winner]) {
      //   result.bat[winner] = 1;
      //   // console.log("initialize");
      //   // console.log(result.bat[winner]);
      // } else {
      //   result.bat[winner]++;
      //   // console.log("incrememnt");
      // }
    }
    if (toss_decision === "field") {
      chasingTeam = tossWinner;
      battingTeam = tossLoser;
      if (chasingTeam == winner) {
        if (!result.field[chasingTeam]) {
          result.field[chasingTeam] = 0;
        }
        result.field[chasingTeam]++;
      }
      if (battingTeam == winner) {
        if (!result.bat[battingTeam]) {
          result.bat[battingTeam] = 0;
        }
        result.bat[battingTeam]++;
      }
      // if (!result.field[winner]) {
      //   result.field[winner] = 1;
      // } else {
      //   result.field[winner]++;
      // }
    }
  }
  for (let choice in result) {
    sortedArray = Object.entries(result[choice]);
    sortedArray.sort((a, b) => b[1] - a[1]);
    result[choice] = sortedArray[0];
  }
  //   console.log(result);
  return result;
}
console.log(mostWinsBattingVsChasing2());
const mostWinsBattingVsChasing2Output = mostWinsBattingVsChasing2();
const formattedData = JSON.stringify(mostWinsBattingVsChasing2Output, null, 2);
const fs = require("fs");
fs.writeFileSync("mostWinsBattingVsChasing2.txt", formattedData);
