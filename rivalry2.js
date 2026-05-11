//rivalry between 2 tteams
const matches = require("./matches.json");
function rivalry() {
  let result = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let team1 = match.team1;
    let team2 = match.team2;
    let winner = match.winner;
    let winCount = 0;
    let teamPair = [team1, team2].sort().join("-");
    if (!result[teamPair]) {
      result[teamPair] = {
        teams: teamPair.split("-"),
        matches: 0,
        wins: {},
        winDifference: 0,
      };
    }
    result[teamPair].matches++;
    if (winner != "NA") {
      if (!result[teamPair].wins[winner]) {
        result[teamPair].wins[winner] = 0;
      }
      result[teamPair].wins[winner]++;
    }
  }
  let array = Object.entries(result);
  //   .map(function (entry) {
  //     return {
  //       pair: entry[0],
  //       data: entry[1],
  //     };
  //   })
  //   console.log(array);
  array.sort((a, b) => b[1].matches - a[1].matches);
  //   console.log(array.data);
  //   array.sort((a,b)=>b.array.data)
  let answer = {};
  for (let match of array) {
    // console.log(match);
    let team1 = match[1].teams[0];
    let team2 = match[1].teams[1];
    let winsTeam1 = match[1].wins[team1];
    let winsTeam2 = match[1].wins[team2];
    let matches = match[1].matches;
    let diff = 0;
    if (matches > 0) {
      diff = winsTeam1 / matches;
    } else {
      diff = 0;
    }
    if (diff > 0.4 && diff < 0.6) {
      match[1].winDifference = Math.abs(winsTeam1 - winsTeam2);
      answer = match[1];
      break;
    }
    // console.log(match.data.wins);
  }
  //   console.log(answer);
  return answer;
}
console.log(rivalry());
const output = rivalry();
const formattedData = JSON.stringify(output, null, 2);
const fs = require("fs");
fs.writeFileSync("rivalry2.txt", formattedData);
