//batters who accelerate in death overs
const deliveries = require("./deliveries.json");
function battersWhoAccelerateInDeathOvers() {
  const result = {};
  const final = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let batter = delivery.batter;
    let inning = Number(delivery.inning);
    let batsman_runs = Number(delivery.batsman_runs);
    let extras_type = delivery.extras_type;
    let over = Number(delivery.over);
    if (!result[batter]) {
      result[batter] = {
        death_over_strike_rate: 0,
        death_over_runs: 0,
        death_over_balls: 0,
        non_death_over_strike_rate: 0,
        non_death_over_runs: 0,
        non_death_over_balls: 0,
      };
    }
    if (inning == 1 || inning == 2) {
      if (extras_type != "wides" && extras_type != "noballs") {
        if (over >= 15 && over <= 19) {
          result[batter].death_over_runs =
            result[batter].death_over_runs + batsman_runs;
          result[batter].death_over_balls++;
        } else {
          result[batter].non_death_over_runs =
            result[batter].non_death_over_runs + batsman_runs;
          result[batter].non_death_over_balls++;
        }
      }
    }
  }
  for (let batter in result) {
    if (result[batter].death_over_balls > 0) {
      result[batter].death_over_strike_rate =
        (result[batter].death_over_runs / result[batter].death_over_balls) *
        100;
    }
    if (result[batter].non_death_over_balls > 0) {
      result[batter].non_death_over_strike_rate =
        (result[batter].non_death_over_runs /
          result[batter].non_death_over_balls) *
        100;
    }
    if (
      result[batter].death_over_strike_rate != 0 &&
      result[batter].non_death_over_strike_rate != 0
    ) {
      if (
        result[batter].death_over_strike_rate >
        result[batter].non_death_over_strike_rate
      ) {
        if (!final[batter]) {
          final[batter] = [];
        }
        final[batter].push(result[batter]);
      }
    }
  }
  //   return result;
  return final;
}
const battersWhoAccelerateInDeathOversOutput =
  battersWhoAccelerateInDeathOvers();
const formattedData = JSON.stringify(
  battersWhoAccelerateInDeathOversOutput,
  null,
  2,
);
const fs = require("fs");
fs.writeFileSync("batterWhoAccelerateInDeathOver.txt", formattedData);
