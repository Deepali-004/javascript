//matches played by specific team
const matches = require("./matches.json");
function specificTeam(teamname) {
  let result = {};
  let index = 0;
  for (let i = 0; i < matches.length; i++) {
    let team1 = matches[i].team1;
    let team2 = matches[i].team2;
    if (matches[i].team1 == teamname || matches[i].team2 == teamname) {
      result[index] = matches[i];
      index++;
    }
    // console.log(result);
  }
  return result;
}
// specificTeam("Kolkata Knight Riders");
const specificTeamOutput = specificTeam("Kolkata Knight Riders");
const fs = require("fs");
let formattedData = JSON.stringify(specificTeamOutput, null, 2);
fs.writeFileSync("specificTeam.txt", formattedData);
