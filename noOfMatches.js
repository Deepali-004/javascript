//no of matches in each season
const matches = require("./matches.json");
function noOfMatches() {
  const matchesByYears = {};
  for (let i = 0; i < matches.length; i++) {
    if (matchesByYears[matches[i]["season"]]) {
      matchesByYears[matches[i]["season"]]++;
    } else {
      matchesByYears[matches[i]["season"]] = 1;
    }
  }
  return matchesByYears;
}

// console.log(matches);
// console.log(matches.name);
console.log(noOfMatches());
const noOfMatchesOutput = noOfMatches();
const fs = require("fs");
let formattedData = JSON.stringify(noOfMatchesOutput, null, 2);
fs.writeFileSync("noOfMatches.txt", formattedData);
