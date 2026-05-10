//batter dismissed most times
const deliveries = require("./deliveries.json");
function batterDismissedMostTimes() {
  let result = {};
  let output = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let dismissedPlayer = delivery.player_dismissed;
    let inning = Number(delivery.inning);
    if (dismissedPlayer == "NA") continue;
    if (!result[dismissedPlayer]) {
      result[dismissedPlayer] = 0;
    }
    if (inning == 1 || inning == 2) {
      result[dismissedPlayer]++;
    }
  }
  let mostDismissedPlayer = Math.max(...Object.values(result));
  for (let player in result) {
    if (mostDismissedPlayer == result[player]) {
      // Code Suggestions: This structure only catches the final player sharing the max dismissals tally. We should switch 'output' to an array to encompass all joint leaders.
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
