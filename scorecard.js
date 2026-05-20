// scorecard
const deliveries = require("./deliveries.json");
const fs = require("fs");
function scorecard() {
  let result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let match_id = Number(delivery.match_id);
    let inning = Number(delivery.inning);
    let batting_team = delivery.batting_team;
    let total_runs = Number(delivery.total_runs);
    let wickets = Number(delivery.is_wicket);
    let extras_type = delivery.extras_type;
    if (!result[match_id]) {
      result[match_id] = {
        winner: "",
        superOver: "N",
        superOverScore: {},
      };
    }
    if (!result[match_id][batting_team]) {
      result[match_id][batting_team] = {
        Score: "",
        PlayedOvers: "",
        runs: 0,
        wickets: 0,
        total_balls: 0,
      };
    }
    if (inning === 1 || inning === 2) {
      result[match_id][batting_team].runs += total_runs;
      result[match_id][batting_team].wickets += wickets;
      if (extras_type !== "wides" && extras_type !== "noballs") {
        result[match_id][batting_team].total_balls++;
      }
    } else {
      result[match_id].superOver = "Y";
      if (!result[match_id].superOverScore[batting_team]) {
        result[match_id].superOverScore[batting_team] = 0;
      }
      result[match_id].superOverScore[batting_team] += total_runs;
    }
  }
  for (let match in result) {
    for (let team in result[match]) {
      if (
        team === "winner" ||
        team === "superOver" ||
        team === "superOverScore"
      )
        continue;
      let overs = Math.floor(result[match][team].total_balls / 6);
      let balls = result[match][team].total_balls % 6;
      result[match][team].PlayedOvers = `${overs}.${balls}`;
      result[match][team].Score =
        `${result[match][team].runs}/${result[match][team].wickets}`;
    }
  }
  for (let match in result) {
    let teams = [];
    for (let team in result[match]) {
      if (
        team === "winner" ||
        team === "superOver" ||
        team === "superOverScore"
      )
        continue;
      teams.push(team);
    }
    if (teams.length < 2) continue;
    let teamA = teams[0];
    let teamB = teams[1];
    let runsA = result[match][teamA].runs;
    let runsB = result[match][teamB].runs;
    if (runsA > runsB) {
      result[match].winner = teamA;
    } else if (runsB > runsA) {
      result[match].winner = teamB;
    } else if (runsA == runsB) {
      if (result[match].superOver === "Y") {
        let superA = result[match].superOverScore[teamA] || 0;
        let superB = result[match].superOverScore[teamB] || 0;
        if (superA > superB) {
          result[match].winner = teamA;
        } else if (superB > superA) {
          result[match].winner = teamB;
        }
      }
    } else {
      result[match].winner = "Tie";
    }
  }

  return result;
}

const scorecardOutput = scorecard();

const formattedData = JSON.stringify(scorecardOutput, null, 2);

fs.writeFileSync("scorecard.txt", formattedData);
