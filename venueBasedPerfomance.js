//teams with better away perfomance than home perfomance
const matches = require("./matches.json");
function venueBasedPerfomance() {
  let result = {};
  for (let i = 0; i < matches.length; i++) {
    let match = matches[i];
    let winner = match.winner;
    let venue = match.venue;
    let city = match.city;
  }
}
