//batter dismissed most times
const deliveries = require("./deliveries.json");
function batterDismissedMostTimes() {
  let result = {};
  let output = [];
  for (let i = 0; i < deliveries.length; i++) {
    const delivery = deliveries[i];
    const { player_dismissed, inning } = delivery;
    if (player_dismissed == "NA") continue;
    if (!result[player_dismissed]) {
      result[player_dismissed] = 0;
    }
    if (Number(inning) == 1 || Number(inning) == 2) {
      result[player_dismissed]++;
    }
  }
  let obj = {};
  let mostDismissedPlayer = Math.max(...Object.values(result));
  // console.log(mostDismissedPlayer);
  for (let player in result) {
    if (result[player] == mostDismissedPlayer) {
      obj = { player: player, dismissedTimes: result[player] };
      output.push(obj);
      // output.player = player;
      // output.dismissedTimes = result[player];
    }
    // console.log(result[player]);
    //   let str = Object.values(result);
    //   console.log(str);
    //   mostDismissedPlayer = Math.max(...Object.values(result));
  }
  // console.log(mostDismissedPlayer);
  // console.log(output);
  return output;
}
console.log(batterDismissedMostTimes());
const batterDismissedMostTimesOutput = batterDismissedMostTimes();
const formattedData = JSON.stringify(batterDismissedMostTimesOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("batterDismissedMostTimes.txt", formattedData);
