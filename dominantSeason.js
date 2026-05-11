//dominant season by any team
const test = require("node:test");
const matches = require("./matches.json");
function dominantSeason() {
  let result = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let season = match.season;
    let winner = match.winner;
    if (!result[season]) {
      result[season] = {};
    }
    if (winner == "NA") continue;

    if (!result[season][winner]) {
      result[season][winner] = 0;
    }
    result[season][winner]++;
  }
  let output = [];
  let max = 0;
  //   console.log(Object.values(result));
  for (let season in result) {
    for (let team in result[season]) {
      if (result[season][team] > max) {
        max = result[season][team];
      }
      // console.log(team, season);
    }
  }
  for (let season in result) {
    for (let team in result[season]) {
      if (result[season][team] == max) {
        let obj = { team: team, season: season, matchesWon: max };
        output.push(obj);
      }
    }
  }
  // console.log(season);
  //   console.log(output);
  return output;
}
console.log(dominantSeason());
const dominantSeasonOutput = dominantSeason();
const formattedData = JSON.stringify(dominantSeasonOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("dominantSeason.txt", formattedData);
