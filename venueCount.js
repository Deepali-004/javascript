//no of matches played in venue count
const matches = require("./matches.json");
function VenueCount() {
  const venueArray = {};
  for (let i = 0; i < matches.length; i++) {
    if (!venueArray[matches[i]["venue"]]) {
      venueArray[matches[i]["venue"]] = 1;
    } else {
      venueArray[matches[i]["venue"]]++;
    }
  }
  return venueArray;
}

console.log(VenueCount());
const VenueCountOutput = VenueCount();
const fs = require("fs");
let formattedData = JSON.stringify(VenueCountOutput, null, 2);
fs.writeFileSync("venueCount.txt", formattedData);
