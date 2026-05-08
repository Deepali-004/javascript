//overall count where toss won and won macth too
const matches = require("./matches.json");
function tossWonandWon() {
  let count = 0;
  for (let i = 0; i < matches.length; i++) {
    if (matches[i]["toss_winner"] == matches[i]["winner"]) {
      count++;
    }
  }
  return "Teams that won the toss and won the match: " + count;
}
const tossWonandWonOutput = tossWonandWon();
const fs = require("fs");
let formattedData = JSON.stringify(tossWonandWonOutput, null, 2);
fs.writeFileSync("tossWonAndWon.txt", formattedData);
