//no of matches in which team won toss in each year
const matches = require("./matches.json");
function tossWonCount() {
  const result = {};
  for (let i = 0; i < matches.length; i++) {
    let year = matches[i]["season"];
    let team = matches[i]["toss_winner"];
    if (!result[year]) {
      // Code Suggestions: Note that entering this block creates the container but bypasses the counting logic entirely. We need to ensure the counting happens AFTER this initialization step, rather than inside an 'else'.
      result[year] = {};
    } else {
      if (!result[year][team]) {
        result[year][team] = 1;
      } else {
        result[year][team]++;
      }
    }
  }
  return result;
}
const tossWonCountOutput = tossWonCount();
const fs = require("fs");
let formattedData = JSON.stringify(tossWonCountOutput, null, 2);
fs.writeFileSync("tossWonCount.txt", formattedData);
