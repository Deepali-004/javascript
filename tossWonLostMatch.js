// find matches where specific team won toss but lost match
// expected output:
// {{
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
//   }...}
const matches = require("./matches.json");
function tossWonLostMatch() {
  let result = [];
  let count = 0;
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    // console.log(i);
    // console.log(matches[i]);
    let tossWinner = match.toss_winner;
    let winner = match.winner;
    if (tossWinner != winner) {
      result.push(match);
      count++;
      // console.log(count);
    }
    // console.log(count);
    // console.log(result);
  }
  //   console.log(count);
  //   console.log(result);
  return (count, result);
}
console.log(tossWonLostMatch());
const tossWonLostMatchOutput = tossWonLostMatch();
const fs = require("fs");
const formattedData = JSON.stringify(tossWonLostMatchOutput, null, 2);
fs.writeFileSync("tossWonLostMatch.txt", formattedData);
