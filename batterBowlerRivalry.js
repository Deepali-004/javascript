//batter bowler rivalry
const deliveries = require("./deliveries.json");
function batterBowlerRivalry() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let inning = Number(delivery.inning);
    let batter = delivery.batter;
    let bowler = delivery.bowler;
    let batsman_runs = Number(delivery.batsman_runs);
    let total_runs = Number(delivery.total_runs);
    let extras_type = delivery.extras_type;
    let wicket = Number(delivery.is_wicket);
    let player_dismissed = delivery.player_dismissed;
    let pair = [batter, bowler].sort().join("-");
    if (!result[pair]) {
      result[pair] = {
        batter: batter,
        bowler: bowler,
        batterRuns: 0,
        bowlerRuns: 0,
        batterBalls: 0,
        legalBalls: 0,
        batterWickets: 0,
        bowlerWickets: 0,
        batterStrikeRate: 0,
      };
    }
    if (inning == 1 || inning == 2) {
      if (extras_type != "wides") {
        result[pair].batterBalls++;
      }
      if (extras_type != "wides" && extras_type != "noballs") {
        result[pair].legalBalls++;
      }
      result[pair].batterRuns = result[pair].batterRuns + batsman_runs;
      if (extras_type != "byes" && extras_type != "legbyes") {
        result[pair].bowlerRuns = result[pair].bowlerRuns + total_runs;
      }
      if (result[pair].batter == player_dismissed) {
        result[pair].batterWickets++;
      }
      if (result[pair].batter == player_dismissed && extras_type != "noballs") {
        result[pair].bowlerWickets++;
      }
    }
  }
  for (let pair in result) {
    result[pair].batterStrikeRate =
      (result[pair].batterRuns / result[pair].legalBalls) * 100;
  }
  let output = [];
  let sorted = Object.values(result).sort(
    (a, b) => b.batterStrikeRate - a.batterStrikeRate,
  );
  for (let pair in result) {
    if (
      result[pair].batterStrikeRate > 120 &&
      result[pair].batterWickets >= 4
    ) {
      output.push(result[pair]);
    }
  }
  return output.slice(0, 10);
}
console.log(batterBowlerRivalry());
const batterBowlerRivalryOutput = batterBowlerRivalry();
const formattedData = JSON.stringify(batterBowlerRivalryOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("batterBowlerRivalry.txt", formattedData);
