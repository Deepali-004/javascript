<<<<<<< HEAD
//batter bowler rivalry
const deliveries = require("./deliveries.json");
function batterBowlerRivalry() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    const delivery = deliveries[i];
    const {
      inning,
      batter,
      bowler,
      batsman_runs,
      total_runs,
      extras_type,
      is_wicket,
      player_dismissed,
    } = delivery;

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
    if (Number(inning) == 1 || Number(inning) == 2) {
      if (extras_type != "wides") {
        result[pair].batterBalls++;
      }
      if (extras_type != "wides" && extras_type != "noballs") {
        result[pair].legalBalls++;
      }
      result[pair].batterRuns = result[pair].batterRuns + Number(batsman_runs);
      if (extras_type != "byes" && extras_type != "legbyes") {
        result[pair].bowlerRuns = result[pair].bowlerRuns + Number(total_runs);
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
      (result[pair].batterRuns / result[pair].batterBalls) * 100;
  }
  let output = [];
  let sorted = Object.values(result).sort(
    (a, b) => b.batterStrikeRate - a.batterStrikeRate,
  );
  //   console.log(sorted);
  for (let i = 0; i < sorted.length; i++) {
    let pair = sorted[i];
    if (pair.batterStrikeRate > 120 && pair.batterWickets >= 4) {
      output.push(pair);
    }
  }
  return output.slice(0, 10);
}
console.log(batterBowlerRivalry());
const batterBowlerRivalryOutput = batterBowlerRivalry();
const formattedData = JSON.stringify(batterBowlerRivalryOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("batterBowlerRivalry.txt", formattedData);
=======
//batter bowler rivalry
const deliveries = require("./deliveries.json");
function batterBowlerRivalry() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    const delivery = deliveries[i];
    const {
      inning,
      batter,
      bowler,
      batsman_runs,
      total_runs,
      extras_type,
      is_wicket,
      player_dismissed,
    } = delivery;

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
    if (Number(inning) == 1 || Number(inning) == 2) {
      if (extras_type != "wides") {
        result[pair].batterBalls++;
      }
      if (extras_type != "wides" && extras_type != "noballs") {
        result[pair].legalBalls++;
      }
      result[pair].batterRuns = result[pair].batterRuns + Number(batsman_runs);
      if (extras_type != "byes" && extras_type != "legbyes") {
        result[pair].bowlerRuns = result[pair].bowlerRuns + Number(total_runs);
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
      (result[pair].batterRuns / result[pair].batterBalls) * 100;
  }
  let output = [];
  let sorted = Object.values(result).sort(
    (a, b) => b.batterStrikeRate - a.batterStrikeRate,
  );
  //   console.log(sorted);
  for (let i = 0; i < sorted.length; i++) {
    let pair = sorted[i];
    if (pair.batterStrikeRate > 120 && pair.batterWickets >= 4) {
      output.push(pair);
    }
  }
  return output.slice(0, 10);
}
console.log(batterBowlerRivalry());
const batterBowlerRivalryOutput = batterBowlerRivalry();
const formattedData = JSON.stringify(batterBowlerRivalryOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("batterBowlerRivalry.txt", formattedData);
>>>>>>> b6ff4d5b4384bfa681b49ed343d15168e3b4323d
