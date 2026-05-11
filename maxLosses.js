//find team that lost maximum matches
// expected output:
// {
//     "Sunrisers Hyderabad": 100;
// }
// list of all teams with all their losses count:
// {
//     "Sunrisers Hyderabad": 100,
//     "Chennai Super Kings": 120,
//     "Royal Chanllengers Bengalurur":130,
// }
const matches = require("./matches.json");
function maxLosses() {
  let result = {};
  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    const { team1, team2, winner } = match;
    let loser = " ";
    if (winner == "NA") continue;
    if (team1 == winner) {
      loser = team2;
      // console.log(loser);
    } else {
      loser = team1;
    }
    if (!result[loser]) {
      result[loser] = 1;
    } else {
      result[loser]++;
    }
  }
  let arr = Object.entries(result);
  arr.sort((a, b) => b[1] - a[1]);
  // console.log(arr[0]);
  let output = arr[0];
  return output;
}
console.log(maxLosses());
const maxLossesOutput = maxLosses();
let fs = require("fs");
const formattedData = JSON.stringify(maxLossesOutput, null, 2);
fs.writeFileSync("maxLosses.txt", formattedData);
