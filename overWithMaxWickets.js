const deliveries = require("./deliveries.json");

function overWithMaxWickets() {
  const result = {};
  let finalResult = [];

  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];

    let matchId = delivery.match_id;
    let inning = delivery.inning;
    let over = delivery.over;
    let bowler = delivery.bowler;

    let dismissalKind = delivery.dismissal_kind;

    let key = `${matchId}-${inning}-${over}-${bowler}`;

    if (!result[key]) {
      result[key] = {
        match_id: matchId,
        inning: inning,
        over: over,
        bowler: bowler,
        wickets: 0,
      };
    }

    // bowler wicket types only
    if (
      dismissalKind != "NA" &&
      dismissalKind !== "run out" &&
      dismissalKind !== "retired hurt" &&
      dismissalKind !== "obstructing the field"
    ) {
      result[key].wickets++;
    }
  }

  let max = 0;

  for (let key in result) {
    if (result[key].wickets > max) {
      max = result[key].wickets;
    }
  }
  for (let key in result) {
    if (result[key].wickets == max) {
      let obj = result[key];
      finalResult.push(obj);
    }
  }

  return finalResult;
}

const overWithMaxWicketsOutput = overWithMaxWickets();
const formattedData = JSON.stringify(overWithMaxWicketsOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("overWithMaxWickets.txt", formattedData);
