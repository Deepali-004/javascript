//bowlers who dismissed most unique batters
const deliveries = require("./deliveries.json");
function bowlersWhoDismissedMostUniqueBatters() {
  const result = {};
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let bowler = delivery.bowler;
    let player_dismissed = delivery.player_dismissed;
    let dismissal_kind = delivery.dismissal_kind;
    let inning = Number(delivery.inning);
    if (!result[bowler]) {
      result[bowler] = [];
    }
    if (
      player_dismissed == "NA" ||
      dismissal_kind == "run out" ||
      dismissal_kind == "retired hurt" ||
      dismissal_kind == "obstructing the field" ||
      dismissal_kind == "retired out"
    )
      continue;
    if (!result[bowler].includes(player_dismissed)) {
      result[bowler].push(player_dismissed);
    }
  }
  let max = 0;
  for (let bowler in result) {
    if (result[bowler].length > max) {
      max = result[bowler].length;
    }
  }
  let final = [];
  for (let bowler in result) {
    if (result[bowler].length == max) {
      final.push({
        bowler: bowler,
        playersDismissedCOunt: max,
        playersDismissed: result[bowler],
      });
    }
  }
  // return result;
  return final;
}
const bowlersWhoDismissedMostUniqueBattersOuutput =
  bowlersWhoDismissedMostUniqueBatters();
let formattedData = JSON.stringify(
  bowlersWhoDismissedMostUniqueBattersOuutput,
  null,
  2,
);
let fs = require("fs");
fs.writeFileSync("bowlersWhoDismissedMostUniqueBatters.txt", formattedData);
