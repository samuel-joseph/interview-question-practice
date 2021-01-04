// Given two integer arrays startTime and endTime and given an integer queryTime.

// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

// Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;
  for (let i = 0; i < endTime.length; i++) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      count++;
    }
  }
  return count;
};

console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
