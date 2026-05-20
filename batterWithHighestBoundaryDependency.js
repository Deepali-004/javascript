//batters with highest boundary dependency
const deliveries = require("./deliveries.json");
function batterWithHighestBoundaryDependency() {
  const result = {};
  const finalResult = [];
  for (let i = 0; i < deliveries.length; i++) {
    let delivery = deliveries[i];
    let batter = delivery.batter;
    let batsman_runs = Number(delivery.batsman_runs);
    if (!result[batter]) {
      result[batter] = {
        batter: batter,
        total_runs: 0,
        boundaries: 0,
        boundary_runs: 0,
        non_boundary_runs: 0,
      };
    }
    result[batter].total_runs = result[batter].total_runs + batsman_runs;
    if (batsman_runs == 4 || batsman_runs == 6) {
      result[batter].boundaries++;
      result[batter].boundary_runs =
        result[batter].boundary_runs + batsman_runs;
    } else {
      result[batter].non_boundary_runs =
        result[batter].non_boundary_runs + batsman_runs;
    }
  }
  let sortedArray = Object.values(result);
  sortedArray.sort((a, b) => b.boundary_runs - a.boundary_runs);
  for (let i = 0; i < sortedArray.length; i++) {
    // console.log(sortedArray[i]);
    if (sortedArray[i].boundary_runs / sortedArray[i].total_runs > 0.5) {
      finalResult.push(sortedArray[i]);
    }
  }
  return finalResult[0];
}
const batterWithHighestBoundaryDependencyOutput =
  batterWithHighestBoundaryDependency();
const formattedData = JSON.stringify(
  batterWithHighestBoundaryDependencyOutput,
  null,
  2,
);
const fs = require("fs");
fs.writeFileSync("batterWithHighestBoundaryDependency.txt", formattedData);
