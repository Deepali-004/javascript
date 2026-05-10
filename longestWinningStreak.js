//longest winning streak
const matches = require("./matches.json");
function longestWinningStreak() {
  let result = {};
  let final = {};
  // Code Suggestions: Sequential counting relies directly on internal dataset ordering. To ensure streak reliability, we should pre-sort 'matches' by date before running our linear scan.
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let team1 = match.team1;
    let team2 = match.team2;
    let winner = match.winner;
    if (!result[team1]) {
      result[team1] = [];
    }
    if (!result[team2]) {
      result[team2] = [];
    }
    if (team1 == winner) {
      result[team1].push("w");
      result[team2].push("l");
    }
    if (team2 == winner) {
      result[team2].push("w");
      result[team1].push("l");
    }
  }
  for (let team in result) {
    // console.log(result[team]);
    let current = 0;
    let longest = 0;
    for (let i = 0; i < result[team].length; i++) {
      if (result[team][i] == "w") {
        current++;
        if (current > longest) {
          longest = current;
        }
      } else {
        current = 0;
      }
      //   console.log(result[team][i]);
      //     break;
    }
    final[team] = longest;
  }
  let array = Object.entries(final);
  array.sort((a, b) => b[1] - a[1]);
  let output = array[0];
  console.log(output);
  //   console.log(array);
  return output;
}
console.log(longestWinningStreak());
const output = longestWinningStreak();
const formattedData = JSON.stringify(output, null, 2);
const fs = require("fs");
fs.writeFileSync("longestWinningStreak.txt", formattedData);
