//win percentage of each team per season
const matches = require("./matches.json");
function winPercentagePerSeason() {
  let result = {};
  let finalResult = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let season = match.season;
    let team1 = match.team1;
    let team2 = match.team2;
    let winner = match.winner;
    // if (!result[season]) {
    //   result[season] = [{ winner: winner, team1: team1, team2: team2 }];
    // } else {
    //   result[season].push({ winner: winner, team1: team1, team2: team2 });
    // }
    if (!result[season]) {
      result[season] = {};
      //   console.log(season, result);
      //   if (!result[season][team1]) {
      //     result[season][team1] = {};
      //   }
      //   if (!result[season][team2]) {
      //     result[season][team2] = {};
      //   }
    }
    //team1 a won
    //team2 b
    //team1 a
    //team2 c won
    if (!result[season][team1]) {
      result[season][team1] = { played: 1, won: 0 };
      //a;{played:1, won:0}
    } else {
      result[season][team1].played++;
      //a:{played:2, won:0}
    }
    if (!result[season][team2]) {
      result[season][team2] = { played: 1, won: 0 };
      // b:{played:1, won:0}
      //c:{played:1, won:0}
    } else {
      result[season][team2].played++;
    }
    // console.log(team1, team2, winner);
    if (winner != "NA") {
      result[season][winner].won++;
    }
    // console.log(
    //   team1,
    //   result[season][team1],
    //   team2,
    //   result[season][team2],
    //   "winner",
    //   winner,
    //   "result[winner]",
    //   result[season][winner],
    // );
    // console.log(winner);
    // result[season][winner].won++;
    // if (winner == team1) {
    //   result[season][team1].won++;
    // }
    // if (winner == team2) {
    //   result[season][team2].won++;
    // }
  }
  // console.log(result);
  // console.log(result);
  for (let season in result) {
    // console.log(result[season]);
    // let arr = Object.entries(result[season]);
    // console.log(arr);
    // console.log(result[season][1]);
    if (!finalResult[season]) {
      finalResult[season] = {};
    }
    for (let team in result[season]) {
      // console.log(team);
      //   console.log(result[season][team].played);
      // console.log(result[season][team].won);
      if (!finalResult[season][team]) {
        finalResult[season][team] = { played: 0, won: 0, winPercentage: 0 };
      }
      let winPercentage = 0;
      if (result[season][team].played > 0) {
        winPercentage =
          (result[season][team].won / result[season][team].played) * 100;
      } else {
        winPercentage = 0;
      }
      //  console.log(winPercentage);
      finalResult[season][team].played = result[season][team].played;
      finalResult[season][team].won = result[season][team].won;
      finalResult[season][team].winPercentage = winPercentage;
      // console.log(finalResult[season][team]);
    }
  }
  console.log(finalResult);
  return finalResult;
}
console.log(winPercentagePerSeason());
const winPercentagePerSeasonOutput = winPercentagePerSeason();
const fs = require("fs");
const formattedData = JSON.stringify(winPercentagePerSeasonOutput, null, 2);
fs.writeFileSync("winPercentagePerSeason.txt", formattedData);
