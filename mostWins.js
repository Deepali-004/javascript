<<<<<<< HEAD
//find team that won most matches in each season
const matches = require("./matches.json");
function mostWins() {
  const winnerArray = {};
  const finalOutput = {};
  for (let i = 0; i < matches.length; i++) {
    let year = matches[i]["season"];
    let winner = matches[i]["winner"];
    if (!winnerArray[year]) {
      winnerArray[year] = {};
      if (!winnerArray[year][winner]) {
        winnerArray[year][winner] = 1;
      }
      // console.log(
      //   "if year not found check in if condition",
      //   year,
      //   winnerArray[year].winner,
      // );
    } else {
      // console.log("if year not found check", year, winnerArray[year].winner);
      if (!winnerArray[year][winner]) {
        winnerArray[year][winner] = 1;
        // console.log("checking team and count", year, winnerArray[year][winner]);
      } else {
        winnerArray[year][winner]++;
      }
    }
  }
  // console.log("Win array", winnerArray);
  for (let season in winnerArray) {
    // console.log("Outer key:", season);
    // console.log("Inner object:", winnerArray[season]);
    // console.log("checking season", season);
    // console.log("checking array values", Object.values(winnerArray[season]));
    // const max = Math.max(...Object.values(winnerArray[season]));
    const wins = winnerArray[season];
    // console.log(wins);
    let max = -Infinity;
    let maxTeam = "";
    for (let team in wins) {
      if (wins[team] > max) {
        max = wins[team];
        maxTeam = team;
      }
    }
    let result = {};
    result[season] = {
      team: maxTeam,
      wins: max,
    };
    // console.log(maxTeam, season, max);
    finalOutput[season] = { maxTeam: maxTeam, max: max };
    // console.log(max);
    // for (let team in winnerArray[season]) {
    //   console.log(team, winnerArray[season][team]);
    // }
  }
  return finalOutput;
}
// console.log(mostWins());
// mostWins();
const mostWinsOutput = mostWins();
const fs = require("fs");
let formattedData = JSON.stringify(mostWinsOutput, null, 2);
fs.writeFileSync("mostWins.txt", formattedData);
=======
//find team that won most matches in each season
const matches = require("./matches.json");
function mostWins() {
  const winnerArray = {};
  const finalOutput = {};
  for (let i = 0; i < matches.length; i++) {
    let year = matches[i]["season"];
    let winner = matches[i]["winner"];
    if (!winnerArray[year]) {
      winnerArray[year] = {};
      if (!winnerArray[year][winner]) {
        winnerArray[year][winner] = 1;
      }
      // console.log(
      //   "if year not found check in if condition",
      //   year,
      //   winnerArray[year].winner,
      // );
    } else {
      // console.log("if year not found check", year, winnerArray[year].winner);
      if (!winnerArray[year][winner]) {
        winnerArray[year][winner] = 1;
        // console.log("checking team and count", year, winnerArray[year][winner]);
      } else {
        winnerArray[year][winner]++;
      }
    }
  }
  // console.log("Win array", winnerArray);
  for (let season in winnerArray) {
    // console.log("Outer key:", season);
    // console.log("Inner object:", winnerArray[season]);
    // console.log("checking season", season);
    // console.log("checking array values", Object.values(winnerArray[season]));
    // const max = Math.max(...Object.values(winnerArray[season]));
    const wins = winnerArray[season];
    // console.log(wins);
    let max = -Infinity;
    let maxTeam = "";
    for (let team in wins) {
      if (wins[team] > max) {
        max = wins[team];
        maxTeam = team;
      }
    }
    let result = {};
    result[season] = {
      team: maxTeam,
      wins: max,
    };
    // console.log(maxTeam, season, max);
    finalOutput[season] = { maxTeam: maxTeam, max: max };
    // console.log(max);
    // for (let team in winnerArray[season]) {
    //   console.log(team, winnerArray[season][team]);
    // }
  }
  return finalOutput;
}
// console.log(mostWins());
// mostWins();
const mostWinsOutput = mostWins();
const fs = require("fs");
let formattedData = JSON.stringify(mostWinsOutput, null, 2);
fs.writeFileSync("mostWins.txt", formattedData);
>>>>>>> b6ff4d5b4384bfa681b49ed343d15168e3b4323d
