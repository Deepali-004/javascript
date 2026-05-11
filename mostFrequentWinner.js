//most frequent winner against each team
//{'srh':[kkr,2],'rcb':['csk',7]...}
const matches = require("./matches.json");
function mostFrequentWinner() {
  let result = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let { winner, team1, team2, id } = match;
    let loser;
    if (winner === "NA") continue;
    if (winner == team1) {
      loser = team2;
    }
    if (winner == team2) {
      loser = team1;
    }
    if (!result[loser]) {
      result[loser] = {};
    }
    if (!result[loser][winner]) {
      result[loser][winner] = 1;
    } else {
      result[loser][winner]++;
    }
  }
  for (let loser in result) {
    let arr = Object.entries(result[loser]);
    arr.sort((a, b) => b[1] - a[1]);
    result[loser] = arr;
    let max = arr[0][1];
    let topTeams = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][1] == max) {
        topTeams.push({ team: arr[i][0], count: arr[i][1] });
        // topTeams.push(arr[i][0], arr[i][1]);
      }
    }
    result[loser] = topTeams;
    // console.log(max);
  }
  return result;
}
console.log(mostFrequentWinner());
const mostFrequentWinnerOutput = mostFrequentWinner();
const formattedData = JSON.stringify(mostFrequentWinnerOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("mostFrequentWinner.txt", formattedData);
