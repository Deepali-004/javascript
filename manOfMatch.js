<<<<<<< HEAD
//man of match of each season
const matches = require("./matches.json");
function manOfMatch() {
  const result = {};
  for (let i = 0; i < matches.length; i++) {
    let year = matches[i]["season"];
    let man = matches[i]["player_of_match"];
    if (!result[year]) {
      result[year] = {};
      if (!result[year][man]) {
        result[year][man] = 1;
      }
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
=======
//man of match of each season
const matches = require("./matches.json");
function manOfMatch() {
  const result = {};
  for (let i = 0; i < matches.length; i++) {
    let year = matches[i]["season"];
    let man = matches[i]["player_of_match"];
    if (!result[year]) {
      result[year] = {};
      if (!result[year][man]) {
        result[year][man] = 1;
      }
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
>>>>>>> b6ff4d5b4384bfa681b49ed343d15168e3b4323d
