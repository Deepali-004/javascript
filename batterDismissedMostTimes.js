//batter dismissed most times
const deliveries = require("./deliveries.json");
function batterDismissedMostTimes() {
  let result = {};
  let output = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let dismissedPlayer = delivery.player_dismissed;
    if (dismissedPlayer == "NA") continue;
    if (!result[dismissedPlayer]) {
      result[dismissedPlayer] = 0;
    }
    result[dismissedPlayer]++;
  }
  let mostDismissedPlayer = Math.max(...Object.values(result));
  for (let player in result) {
    if (mostDismissedPlayer == result[player]) {
      output.player = player;
      output.dismissedTimes = result[player];
    }
    // console.log(result[player]);
    //   let str = Object.values(result);
    //   console.log(str);
    //   mostDismissedPlayer = Math.max(...Object.values(result));
  }
  //   console.log(result);
  //   console.log(output);
  return output;
}
const batterDismissedMostTimesOutput = batterDismissedMostTimes();
const formattedData = JSON.stringify(batterDismissedMostTimesOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("batterDismissedMostTimes.txt", formattedData);
