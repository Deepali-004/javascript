//no of matches in each season
const matches = require("./matches.json");
function noOfMatches() {
  //   Code Suggestions: The function computes and returns 'matchesByYears', but it fails to include an explicit 'return' statement. This results in the function implicitly returning 'undefined'.
  const matchesByYears = {};
  for (let i = 0; i < matches.length; i++) {
    // Code Suggestions: We can significantly tighten this control flow by using a direct logical OR assignment, reducing repetitive lines: `matchesByYears[season] = (matchesByYears[season] || 0) + 1;`
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
