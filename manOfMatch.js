//man of match of each season
const matches = require("./matches.json");
function manOfMatch() {
  const result = {};
  for (let i = 0; i < matches.length; i++) {
    let year = matches[i]["season"];
    let man = matches[i]["player_of_match"];
    if (!result[year]) {
      // Code Suggestions: By declaring the object here and skipping straight to the loop end, we accidentally miss recording the data point for the very first record of the new year. Move the counting step below this conditional so it always executes.
      result[year] = {};
    } else {
      if (!result[year][man]) {
        result[year][man] = 1;
      } else {
        result[year][man]++;
      }
    }
  }
  return result;
}
const manOfMatchOutput = manOfMatch();
const fs = require("fs");
let formattedData = JSON.stringify(manOfMatchOutput, null, 2);
fs.writeFileSync("manOfMatch.txt", formattedData);
