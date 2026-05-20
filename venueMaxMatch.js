<<<<<<< HEAD
//find venue with max matches in each season
const matches = require("./matches.json");
function venueMaxMatch() {
  let result = {};
  let output = {};
  let result2 = {};
  let maxCount = 0;
  let maxVenues = [];
  let finalOutput = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let venue = match.venue;
    let season = match.season;
    if (!result[season]) {
      result[season] = {};
      if (!result[season][venue]) {
        result[season][venue] = 1;
      }
    } else {
      if (!result[season][venue]) {
        result[season][venue] = 1;
      } else {
        result[season][venue]++;
      }
    }
  }
  for (let season in result) {
    result2[season] = Object.entries(result[season]);
  }
  for (let season in result2) {
    // console.log(result2[season]);
    result2[season].sort((a, b) => b[1] - a[1]);
    let arr = result2[season];
    // result2[season] = result2[season][0];
    // console.log(result2[season][0]);
    // console.log(result2[season]);
    let max = arr[0][1];
    maxVenues = arr.filter((item) => item[1] === max);
    // console.log(season, max);
    finalOutput[season] = maxVenues;
    console.log(finalOutput);
  }
  // result2[season].sort((a, b) => a[1 - b[1]]);
  //   console.log(result2);
  return finalOutput;
}
console.log(venueMaxMatch());
let venueMaxMatchOutput = venueMaxMatch();
const fs = require("fs");
const formattedData = JSON.stringify(venueMaxMatchOutput, null, 2);
fs.writeFileSync("venueMaxMatch.txt", formattedData);
=======
//find venue with max matches in each season
const matches = require("./matches.json");
function venueMaxMatch() {
  let result = {};
  let output = {};
  let result2 = {};
  let maxCount = 0;
  let maxVenues = [];
  let finalOutput = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let venue = match.venue;
    let season = match.season;
    if (!result[season]) {
      result[season] = {};
      if (!result[season][venue]) {
        result[season][venue] = 1;
      }
    } else {
      if (!result[season][venue]) {
        result[season][venue] = 1;
      } else {
        result[season][venue]++;
      }
    }
  }
  for (let season in result) {
    result2[season] = Object.entries(result[season]);
  }
  for (let season in result2) {
    // console.log(result2[season]);
    result2[season].sort((a, b) => b[1] - a[1]);
    let arr = result2[season];
    // result2[season] = result2[season][0];
    // console.log(result2[season][0]);
    // console.log(result2[season]);
    let max = arr[0][1];
    maxVenues = arr.filter((item) => item[1] === max);
    // console.log(season, max);
    finalOutput[season] = maxVenues;
    console.log(finalOutput);
  }
  // result2[season].sort((a, b) => a[1 - b[1]]);
  //   console.log(result2);
  return finalOutput;
}
console.log(venueMaxMatch());
let venueMaxMatchOutput = venueMaxMatch();
const fs = require("fs");
const formattedData = JSON.stringify(venueMaxMatchOutput, null, 2);
fs.writeFileSync("venueMaxMatch.txt", formattedData);
>>>>>>> b6ff4d5b4384bfa681b49ed343d15168e3b4323d
