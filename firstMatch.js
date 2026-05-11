//first match of each season
// expected output:
// // {2009:{
//     "id": 335982,
//     "season": "2007/08",
//     "city": "Bangalore",
//     "date": "2008-04-18",
//     "match_type": "League",
//     "player_of_match": "BB McCullum",
//     "venue": "M Chinnaswamy Stadium",
//     "team1": "Royal Challengers Bangalore",
//     "team2": "Kolkata Knight Riders",
//     "toss_winner": "Royal Challengers Bangalore",
//     "toss_decision": "field",
//     "winner": "Kolkata Knight Riders",
//     "result": "runs",
//     "result_margin": "140",
//     "target_runs": "223",
//     "target_overs": "20",
//     "super_over": "N",
//     "method": "NA",
//     "umpire1": "Asad Rauf",
//     "umpire2": "RE Koertzen"
//   },}

const matches = require("./matches.json");
function firstMatch() {
  let result = {};
  let seasonGroup = {};
  for (let i = 0; i < matches.length; i++) {
    if (!seasonGroup[matches[i]["season"]]) {
      seasonGroup[matches[i]["season"]] = [
        {
          id: matches[i].id,
          timestamp: new Date(matches[i].date).getTime(),
          date: matches[i].date,
        },
      ];

      // console.log("Empty array");
    } else {
      // console.log("before push", seasonGroup[matches[i].season]);
      seasonGroup[matches[i]["season"]].push({
        id: matches[i].id,
        timestamp: new Date(matches[i].date).getTime(),
        date: matches[i].date,
      });
      // console.log("after push", seasonGroup[matches[i].season]);
    }
  }
  for (let season in seasonGroup) {
    seasonGroup[season].sort((a, b) => a.timestamp - b.timestamp);
    seasonGroup[season] = seasonGroup[season][0];
    let firstMatchValue = matches.find(
      (match) => match.id === seasonGroup[season].id,
    );
    result[season] = firstMatchValue;
  }
  console.log(result);
  return result;
}
console.log(firstMatch());
let firstMatchOutput = firstMatch();
const fs = require("fs");
// console.log("Before Stringify");
let formattedData = JSON.stringify(firstMatchOutput, null, 2);
// console.log("After stringify");
fs.writeFileSync("firstMatch.txt", formattedData);
