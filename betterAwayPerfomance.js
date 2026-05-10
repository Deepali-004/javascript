//teams with better away perfomance than home perfomance
const matches = require("./matches.json");
function betterAwayPerfomance() {
  let result = {};
  let final = {};
  for (let i = 0; i < matches.length; i++) {
    //  Code Suggestions:: 
    //dont take hardcoded values , take from the data itself
    // for each team  find their home ground and  based on that calculate away and home wins 

    const homeGrounds = {
      "Mumbai Indians": ["Wankhede Stadium", "Dr DY Patil Sports Academy"],

      "Chennai Super Kings": [
        "MA Chidambaram Stadium, Chepauk",
        "M. A. Chidambaram Stadium",
      ],

      "Royal Challengers Bangalore": ["M Chinnaswamy Stadium"],

      "Kolkata Knight Riders": ["Eden Gardens"],

      "Rajasthan Royals": ["Sawai Mansingh Stadium"],

      "Delhi Daredevils": ["Feroz Shah Kotla", "Arun Jaitley Stadium"],

      "Delhi Capitals": ["Feroz Shah Kotla", "Arun Jaitley Stadium"],

      "Kings XI Punjab": [
        "Punjab Cricket Association Stadium, Mohali",
        "IS Bindra Stadium",
      ],

      "Punjab Kings": [
        "Punjab Cricket Association Stadium, Mohali",
        "IS Bindra Stadium",
      ],

      "Deccan Chargers": ["Rajiv Gandhi International Stadium, Uppal"],

      "Sunrisers Hyderabad": ["Rajiv Gandhi International Stadium, Uppal"],

      "Gujarat Lions": ["Saurashtra Cricket Association Stadium"],

      "Rising Pune Supergiant": ["Maharashtra Cricket Association Stadium"],

      "Pune Warriors": ["Subrata Roy Sahara Stadium"],

      "Lucknow Super Giants": ["BRSABV Ekana Cricket Stadium"],

      "Gujarat Titans": ["Narendra Modi Stadium"],
    };
    let match = matches[i];
    let venue = match.venue;
    let winner = match.winner;
    if (winner == "NA") continue;
    if (!result[winner]) {
      result[winner] = { awayWins: 0, homeWins: 0 };
      //   result[winner] = 0;
    }
    // console.log(homeGrounds[winner]);
    let isHome = false;
    // Code Suggestions: Implicit Data Dropping Warning. Teams not manually seeded in the hardcoded map are silently discarded from statistical analysis here. Consider a default handling strategy for unmapped teams.
    if (!homeGrounds[winner]) continue;
    for (let i = 0; i < homeGrounds[winner].length; i++) {
      if (venue == homeGrounds[winner][i]) {
        isHome = true;
      }
    }
    if (isHome) {
      result[winner].homeWins++;
    } else {
      result[winner].awayWins++;
    }
    // console.log(homeGrounds[winner]);
    // result[winner].homeWins++;
    // for (let team in result) {
    //   console.log(homeGrounds[team]);
    // }
  }
  for (let team in result) {
    if (result[team].awayWins > result[team].homeWins) {
      final[team] = result[team];
    }
  }
  //   console.log(homeGrounds);
  //   console.log(final);
  return final;
}
console.log(betterAwayPerfomance());
const betterAwayPerfomanceOutput = betterAwayPerfomance();
const formattedData = JSON.stringify(betterAwayPerfomanceOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("betterAwayPerfomance.txt", formattedData);
