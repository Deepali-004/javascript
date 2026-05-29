//most player of match awards per season
const { sourceMapsEnabled } = require("process");
const matches = require("./matches.json");
function code() {
  const result = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let id = match.id;
    let season = match.season;
    let player_of_match = match.player_of_match;
    if (!result[season]) {
      result[season] = {};
    }
    if (!result[season][player_of_match]) {
      result[season][player_of_match] = 0;
    }
    result[season][player_of_match]++;
  }
  let final = [];
  for (let season in result) {
    let sort = Object.entries(result[season]).sort((a, b) => b[1] - a[1]);
    let topPlayer = sort[0];
    final.push({
      season: season,
      player: topPlayer[0],
      wonTimes: topPlayer[1],
    });
  }
  return final;
}
const codeOutput = code();
const formattedData = JSON.stringify(codeOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("mostPlayerOfMatchPerSeason.txt", formattedData);
