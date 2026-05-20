//bowler with best dot ball percentage
const deliveries = require("./deliveries.json");
function bestDotBallPercentage() {
  const result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let bowler = delivery.bowler;
    let extras_type = delivery.extras_type;
    let total_runs = Number(delivery.total_runs);
    if (!result[bowler]) {
      result[bowler] = {
        bowler: bowler,
        total_balls: 0,
        dot_balls: 0,
        dot_ball_percentage: 0,
      };
    }
    if (extras_type != "wides" && extras_type != "noballs") {
      result[bowler].total_balls++;
      if (
        total_runs == 0 ||
        extras_type == "byes" ||
        extras_type == "legbyes"
      ) {
        result[bowler].dot_balls++;
      }
    }
  }
  let max = 0;
  for (let bowler in result) {
    if (result[bowler].total_balls > 500) {
      result[bowler].dot_ball_percentage =
        (result[bowler].dot_balls / result[bowler].total_balls) * 100;
      if (result[bowler].dot_ball_percentage > max) {
        max = result[bowler].dot_ball_percentage;
      }
    }
  }
  let final = [];
  for (let bowler in result) {
    if (result[bowler].dot_ball_percentage == max) {
      final.push(result[bowler]);
    }
  }
  //   return result;
  return final;
}
const bestDotBallPercentageOutput = bestDotBallPercentage();
const formattedData = JSON.stringify(bestDotBallPercentageOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("bestDotBallPercentage.txt", formattedData);
