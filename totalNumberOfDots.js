//number of dot balls
const deliveries = require("./deliveries.json");
function totalNumberOfDots() {
  let result = 0;
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let batsmanRuns = Number(delivery.batsman_runs);
    let extraRuns = Number(delivery.extra_runs);
    let inning = Number(delivery.inning);
    if (batsmanRuns == 0 && extraRuns == 0 && (inning == 1 || inning == 2)) {
      result++;
    }
  }
  return "total number of dot balls are " + result;
}
console.log(totalNumberOfDots());
const totalNumberOfDotsOutput = totalNumberOfDots();
const formattedData = JSON.stringify(totalNumberOfDotsOutput, null, 2);
const fs = require("fs");
fs.writeFileSync("totalNumerOfDots.txt", formattedData);
