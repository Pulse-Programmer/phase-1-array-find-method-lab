// code your solution here
function superbowlWin(arr) {
  let found = arr.find((item) => item.result === "W");
  if (found) {
    return found.year;
  }
}

// const record = [
//   { year: "2015", result: "W" },
//   { year: "2014", result: "N/A" },
//   { year: "2013", result: "L" },
//   //...
// ];
