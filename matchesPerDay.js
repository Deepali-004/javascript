<<<<<<< HEAD
//matches per day eg: sunday:50 monday:40
const matches = require("./matches.json");
function matchesPerDay() {
  let result = {};
  let sortedResult = {};
  const days = [
    "Sunday", //0
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //   console.log("Start", result);
  for (let i = 0; i < matches.length; i++) {
    let dayIndex = new Date(matches[i]["date"]).getDay();
    let day = days[dayIndex];
    // console.log(day);
    // console.log(dayIndex, day);
    // console.log(result[day]);
    if (!result[day]) {
      result[day] = 0;
      //   console.log(day, result[day]);
      //   console.log("Init");
    }
    result[day]++;
    //   console.log(day, result[day]);
    //   console.log("increment");
  }
  for (let i = 0; i < days.length; i++) {
    let eachDay = days[i];
    sortedResult[eachDay] = result[eachDay];
  }
  return sortedResult;
}
// console.log(matchesPerDay());
const matchesPerDayOutput = matchesPerDay();
fs = require("fs");
const formattedData = JSON.stringify(matchesPerDayOutput, null, 2);
fs.writeFileSync("matchesPerDay.txt", formattedData);
=======
//matches per day eg: sunday:50 monday:40
const matches = require("./matches.json");
function matchesPerDay() {
  let result = {};
  let sortedResult = {};
  const days = [
    "Sunday", //0
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //   console.log("Start", result);
  for (let i = 0; i < matches.length; i++) {
    let dayIndex = new Date(matches[i]["date"]).getDay();
    let day = days[dayIndex];
    // console.log(day);
    // console.log(dayIndex, day);
    // console.log(result[day]);
    if (!result[day]) {
      result[day] = 0;
      //   console.log(day, result[day]);
      //   console.log("Init");
    }
    result[day]++;
    //   console.log(day, result[day]);
    //   console.log("increment");
  }
  for (let i = 0; i < days.length; i++) {
    let eachDay = days[i];
    sortedResult[eachDay] = result[eachDay];
  }
  return sortedResult;
}
// console.log(matchesPerDay());
const matchesPerDayOutput = matchesPerDay();
fs = require("fs");
const formattedData = JSON.stringify(matchesPerDayOutput, null, 2);
fs.writeFileSync("matchesPerDay.txt", formattedData);
>>>>>>> b6ff4d5b4384bfa681b49ed343d15168e3b4323d
