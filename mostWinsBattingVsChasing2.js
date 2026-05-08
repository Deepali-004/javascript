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
    let winner = match.winner;
    let matchResult = match.result;
    if (matchResult === "runs" && tossWinner === winner) {
      if (!result.bat[winner]) {
        result.bat[winner] = 1;
        // console.log("initialize");
        // console.log(result.bat[winner]);
      } else {
        result.bat[winner]++;
        // console.log("incrememnt");
      }
    }
    if (matchResult === "wickets" && tossWinner === winner) {
      if (!result.field[winner]) {
        result.field[winner] = 1;
      } else {
        result.field[winner]++;
      }
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
