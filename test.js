const matches = require("./matches.json");

function noOfMatches() {
  const matchesByYears = {};
  for (let i = 0; i < matches.length; i++) {
    if (matchesByYears[matches[i]["season"]]) {
      matchesByYears[matches[i]["season"]].push({
        id: matches[i].id,
        timestamp: new Date(matches[i].date).getTime(),
      });
    } else {
      matchesByYears[matches[i]["season"]] = [];
    }
  }
  return matchesByYears;
}

// console.log(matches);
// console.log(matches.name);
// console.log(noOfMatches());

function VenueCount() {
  const venueArray = {};
  for (let i = 0; i < matches.length; i++) {
    if (!venueArray[matches[i]["venue"]]) {
      venueArray[matches[i]["venue"]] = 1;
    } else {
      venueArray[matches[i]["venue"]]++;
    }
  }
  return venueArray;
}

// console.log(VenueCount());

function tossWonCount() {
  const result = {};
  for (let i = 0; i < matches.length; i++) {
    let year = matches[i]["season"];
    let team = matches[i]["toss_winner"];
    if (!result[year]) {
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

let tossWon = tossWonCount();
// console.log(tossWonCount());
let venuesCount = VenueCount();
let machesCount = noOfMatches();

const fs = require("fs");
const console = require("console");
let formattedData = JSON.stringify(tossWon, null, 2);
let formattedVenueData = JSON.stringify(venuesCount, null, 2);
let formattedYearData = JSON.stringify(machesCount, null, 2);
fs.writeFileSync("YearCount.txt", formattedYearData);
fs.writeFileSync("venueCount.txt", formattedVenueData);
fs.writeFileSync("tossWon.txt", formattedData);

// function noOfWins() {
//   const matchWinner = {};
//   for (let i = 0; i < matches.length; i++) {
//     let year = matches[i]["season"];
//     let winner = matches[i]["winner"];
//     if (matchWinner[year]) {
//       if (matchWinner[winner]) {
//         matchWinner[year][winner]++;
//         console.log(matchWinner[year][winner]);
//       } else {
//         matchWinner[year][winner] = 1;
//       }
//     } else {
//       matchWinner[year] = {};
//     }
//   }
//   return matchWinner;
// }

// noOfWins();

// console.log("Before loop");
// for (let i = 0; i < 5; i++) {
//   console.log("inside  loop");
// }

function noOfWins() {
  const result = {};
  for (let i = 0; i < matches.length; i++) {
    let year = matches[i]["season"];
    let winnerr = matches[i]["winner"];
    if (!result[year]) {
      result[year] = {};
    } else {
      if (!result[year][winnerr]) {
        result[year][winnerr] = 0;
      } else {
        result[year][winnerr]++;
      }
    }
  }
  return result;
}
let winsCount = noOfWins();

let formattedWins = JSON.stringify(winsCount, null, 2);
fs.writeFileSync("winsCount.txt", formattedWins);

function manOfMatch() {
  const result = {};
  for (let i = 0; i < matches.length; i++) {
    let year = matches[i]["season"];
    let man = matches[i]["player_of_match"];
    if (!result[year]) {
      result[year] = {};
    } else {
      if (!result[year][man]) {
        result[year][man] = 0;
      } else {
        result[year][man]++;
      }
    }
  }
  return result;
}
// console.log(manOfMatch());
let playerOfMatch = manOfMatch();
let formattedPlayer = JSON.stringify(playerOfMatch, null, 2);
fs.writeFileSync("PlayerOfMatchCount.txt", formattedPlayer);

function tossWonandWon() {
  let count = 0;
  for (let i = 0; i < matches.length; i++) {
    if (matches[i]["toss_winner"] == matches[i]["winner"]) {
      count++;
    }
  }
  return "Teams that won the toss and won the match: " + count;
}
// console.log("Teams that won the toss and won the match: " + tossWonandWon());

let tossWinnerAndMatchWinner = tossWonandWon();
let formattedTossWinnerAndWinner = JSON.stringify(
  tossWinnerAndMatchWinner,
  null,
  2,
);
fs.writeFileSync("tossWinnerAndMatchWinner.txt", formattedTossWinnerAndWinner);

function mostWins() {
  const winnerArray = {};
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
    console.log(maxTeam, season, max);
    // console.log(max);
    // for (let team in winnerArray[season]) {
    //   console.log(team, winnerArray[season][team]);
    // }
  }

  const result = {};
  let mostWins = 1;
  for (let i = 0; i < winnerArray.length; i++) {
    // console.log(winnerArray[i]);
  }
  return result;
}
// console.log(mostWins());
// mostWins();

function winPercentage() {
  let newObject = {};
  for (let i = 0; i < matches.length; i++) {
    let team1 = matches[i]["team1"];
    let team2 = matches[i]["team2"];
    let winner = matches[i]["winner"];
    if (!newObject[team1]) {
      newObject[team1] = { played: 0, wins: 0 };
    }
    if (!newObject[team2]) {
      newObject[team2] = { played: 0, wins: 0 };
    }
    newObject[team1].played += 1;
    newObject[team2].played += 1;
    if (winner == team1) {
      newObject[team1].wins += 1;
    } else {
      newObject[team2].wins += 1;
    }
  }
  const result = {};
  for (let team in newObject) {
    let played = newObject[team].played;
    let wins = newObject[team].wins;
    const winTeamPercentage = (wins / played) * 100;
    result[team] = winTeamPercentage;
  }
  return result;
}
// console.log(winPercentage());

// let mostWinsCount = mostWins();
// const formattedmostwins = JSON.stringify(mostWinsCount, null, 2);
// fs.writeFileSync("mostWinsCount.txt", formattedmostwins);

// let winPercent = winPercentage();
// const formattedDataPercentage = JSON.stringify(winPercent, null, 2);
// fs.writeFileSync("winPercentage.txt", formattedDataPercentage);

function tossWinnerLost() {
  let tossWinnerLoss = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    // console.log(match);
    let season = match.season;
    // console.log(season);
    let winner = match.winner;
    let toss_winner = match.toss_winner;
    // console.log(toss_winner);
    if (toss_winner != winner) {
      if (!tossWinnerLoss[season]) {
        tossWinnerLoss[season] = 0;
      }
      tossWinnerLoss[season]++;
    }
  }
  return tossWinnerLoss;
}
// console.log(tossWinnerLost());

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
    console.log(result);
  }
  return result;
}
// specificTeam("Kolkata Knight Riders");

function firstMatch() {
  let result = {};
  let seasonGroup = {};
  let firstmatches = {};
  for (let i = 0; i < matches.length; i++) {
    if (!seasonGroup[matches[i]["season"]]) {
      seasonGroup[matches[i]["season"]] = [];
      console.log("Empty array");
    } else {
      console.log("before push", seasonGroup[matches[i].season]);
      seasonGroup[matches[i]["season"]].push({
        id: matches[i].id,
        timestamp: new Date(matches[i].date).getTime(),
        date: matches[i].date,
      });
      console.log("after push", seasonGroup[matches[i].season]);
    }
  }
  // for (let season in seasonGroup) {
  //   seasonGroup[season].sort((a, b) => a.timestamp - b.timestamp);
  //   seasonGroup[season] = seasonGroup[season][0];
  // }
  // return seasonGroup;
}
console.log(firstMatch());
