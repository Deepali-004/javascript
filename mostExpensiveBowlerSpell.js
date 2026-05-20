<<<<<<< HEAD
//most expensive bowler spell
const deliveries = require("./deliveries.json");
function mostExpensiveBowlerSpell() {
  let result = {};
  let output = [];
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let { match_id, bowler, extras_type, dismissal_kind } = delivery;
    let wicket = Number(delivery.is_wicket);
    let total_runs = Number(delivery.total_runs);
    let over = Number(delivery.over);
    let ball = Number(delivery.ball);
    // console.log("hi");
    if (!result[bowler]) {
      result[bowler] = {};
      //   console.log("hello");
    }
    if (!result[bowler][match_id]) {
      result[bowler][match_id] = {
        total_balls: 0,
        total_overs: 0,
        total_runs: 0,
        wickets: 0,
      };
    }
    if (extras_type != "wides" && extras_type != "noballs") {
      result[bowler][match_id].total_balls++;
    }
    if (extras_type != "byes" && extras_type != "legbyes") {
      result[bowler][match_id].total_runs =
        result[bowler][match_id].total_runs + total_runs;
      if (
        dismissal_kind != "run out" &&
        dismissal_kind != "retired hurt" &&
        dismissal_kind != "obstructing the field"
      ) {
        result[bowler][match_id].wickets =
          result[bowler][match_id].wickets + wicket;
      }
    }
  }
  let max = 0;
  let expensiveSpellWickets = 0;
  for (let bowler in result) {
    for (let match in result[bowler]) {
      result[bowler][match].total_overs = result[bowler][match].total_balls / 6;
      if (result[bowler][match].total_runs > max) {
        max = result[bowler][match].total_runs;
        expensiveSpellWickets = result[bowler][match].wickets;
      }
    }
  }
  for (let bowler in result) {
    let obj = {};
    for (let match in result[bowler]) {
      if (result[bowler][match].total_runs == max) {
        // console.log(bowler);
        obj = {
          bowler: bowler,
          total_runs: max,
          wickets: expensiveSpellWickets,
          overs: result[bowler][match].total_overs,
        };
        output.push(obj);
      }
    }
  }
  //   console.log(output);
  //   console.log(max);
  return output;
}
console.log(mostExpensiveBowlerSpell());
const mostExpensiveBowlerSpellOutput = mostExpensiveBowlerSpell();
const formattedData = JSON.stringify(mostExpensiveBowlerSpellOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("mostExpensiveBowlerSpell.txt", formattedData);
=======
//most expensive bowler spell
const deliveries = require("./deliveries.json");
function mostExpensiveBowlerSpell() {
  let result = {};
  let output = [];
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let { match_id, bowler, extras_type, dismissal_kind } = delivery;
    let wicket = Number(delivery.is_wicket);
    let total_runs = Number(delivery.total_runs);
    let over = Number(delivery.over);
    let ball = Number(delivery.ball);
    // console.log("hi");
    if (!result[bowler]) {
      result[bowler] = {};
      //   console.log("hello");
    }
    if (!result[bowler][match_id]) {
      result[bowler][match_id] = {
        total_balls: 0,
        total_overs: 0,
        total_runs: 0,
        wickets: 0,
      };
    }
    if (extras_type != "wides" && extras_type != "noballs") {
      result[bowler][match_id].total_balls++;
    }
    if (extras_type != "byes" && extras_type != "legbyes") {
      result[bowler][match_id].total_runs =
        result[bowler][match_id].total_runs + total_runs;
      if (
        dismissal_kind != "run out" &&
        dismissal_kind != "retired hurt" &&
        dismissal_kind != "obstructing the field"
      ) {
        result[bowler][match_id].wickets =
          result[bowler][match_id].wickets + wicket;
      }
    }
  }
  let max = 0;
  let expensiveSpellWickets = 0;
  for (let bowler in result) {
    for (let match in result[bowler]) {
      result[bowler][match].total_overs = result[bowler][match].total_balls / 6;
      if (result[bowler][match].total_runs > max) {
        max = result[bowler][match].total_runs;
        expensiveSpellWickets = result[bowler][match].wickets;
      }
    }
  }
  for (let bowler in result) {
    let obj = {};
    for (let match in result[bowler]) {
      if (result[bowler][match].total_runs == max) {
        // console.log(bowler);
        obj = {
          bowler: bowler,
          total_runs: max,
          wickets: expensiveSpellWickets,
          overs: result[bowler][match].total_overs,
        };
        output.push(obj);
      }
    }
  }
  //   console.log(output);
  //   console.log(max);
  return output;
}
console.log(mostExpensiveBowlerSpell());
const mostExpensiveBowlerSpellOutput = mostExpensiveBowlerSpell();
const formattedData = JSON.stringify(mostExpensiveBowlerSpellOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("mostExpensiveBowlerSpell.txt", formattedData);
>>>>>>> b6ff4d5b4384bfa681b49ed343d15168e3b4323d
