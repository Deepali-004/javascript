//best strike rate in power play
const deliverirs = require("./deliveries.json");
function bestStrikeRateInPowerPlay() {
  const result = {};
  const finalResult = {};
  for (let i = 0; i < deliverirs.length; i++) {
    let delivery = deliverirs[i];
    let batter = delivery.batter;
    let batsman_runs = Number(delivery.batsman_runs);
    let inning = Number(delivery.inning);
    let over = Number(delivery.over);
    let extras_type = delivery.extras_type;
    if (!result[batter]) {
      result[batter] = {
        batter: batter,
        powerplay_strike_rate: 0,
        powerlay_runs: 0,
        powerplay_balls: 0,
      };
    }
    if (inning == 1 || inning == 2) {
      if (over >= 0 && over <= 5) {
        if (extras_type != "wides" && extras_type != "noballs") {
          result[batter].powerplay_balls++;
        }
        result[batter].powerlay_runs =
          result[batter].powerlay_runs + batsman_runs;
      }
    }
  }
  for (let batter in result) {
    if (
      result[batter].powerlay_runs > 500 &&
      result[batter].powerplay_balls > 0
    ) {
      result[batter].powerplay_strike_rate =
        (result[batter].powerlay_runs / result[batter].powerplay_balls) * 100;
    }
  }
  let max = 0;
  let sortedArray = Object.values(result);
  sortedArray.sort((a, b) => b.powerlay_runs - a.powerlay_runs);
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i].powerplay_strike_rate > max) {
      max = sortedArray[i].powerplay_strike_rate;
    }
  }
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i].powerplay_strike_rate == max) {
      finalResult.batter = sortedArray[i].batter;
      finalResult.powerplay_strike_rate = sortedArray[i].powerplay_strike_rate;
      finalResult.powerlay_runs = sortedArray[i].powerlay_runs;
      finalResult.powerplay_balls = sortedArray[i].powerplay_balls;
    }
  }
  //   let max = 0;
  //   for (let batter in result) {
  //     if (result[batter].powerplay_strike_rate > max) {
  //       max = result[batter].powerplay_strike_rate;
  //     }
  //   }
  //   for (let batter in result) {
  //     if (result[batter].powerplay_strike_rate == max) {
  //       let obj = {
  //         batter: batter,
  //         powerplay_strike_rate: max,
  //         powerlay_runs: result[batter].powerlay_runs,
  //         powerplay_balls: result[batter].powerplay_balls,
  //       };
  //       finalResult.push(obj);
  //     }
  //   }
  // return sortedArray;
  // return result;
  return finalResult;
}
const bestStrikeRateInPowerPlayOutput = bestStrikeRateInPowerPlay();
const formattedData = JSON.stringify(bestStrikeRateInPowerPlayOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("bestStrikeRateInPowerPlay.txt", formattedData);
