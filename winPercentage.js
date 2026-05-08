//calculate win percentage of each team
const matches = require("./matches.json");
function winPercentage() {
  let newObject = {};
  for (let i = 0; i < matches.length; i++) {
    let team1 = matches[i]["team1"];
    let team2 = matches[i]["team2"];
    let winner = matches[i]["winner"];
    if (!newObject[team1]) {
      newObject[team1] = { played: 0, wins: 0 };
    }
    if (!newObject[team2]) {
      newObject[team2] = { played: 0, wins: 0 };
    }
    newObject[team1].played += 1;
    newObject[team2].played += 1;
    if (winner == team1) {
      newObject[team1].wins += 1;
    } else {
      newObject[team2].wins += 1;
    }
  }
  const result = {};
  for (let team in newObject) {
    let played = newObject[team].played;
    let wins = newObject[team].wins;
    const winTeamPercentage = (wins / played) * 100;
    result[team] = winTeamPercentage;
  }
  return result;
}
// console.log(winPercentage());
const winPercentageOutput = winPercentage();
const fs = require("fs");
let formattedData = JSON.stringify(winPercentageOutput, null, 2);
fs.writeFileSync("winPercentage.txt", formattedData);
