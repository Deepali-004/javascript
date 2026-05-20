//teams with better away perfomance than home perfomance
const matches = require("./matches.json");
function venueBasedPerfomance() {
  let result = {};
  for (let i = 0; i < matches.length; i++) {
    // Code Suggestions: Unfinished workflow draft detected. Local variables 'winner', 'venue', and 'city' are accessed but never captured into 'result', nor dispatched. This function needs an active storage step and eventual return.
    let match = matches[i];
    let winner = match.winner;
    let venue = match.venue;
    let city = match.city;
  }
}
