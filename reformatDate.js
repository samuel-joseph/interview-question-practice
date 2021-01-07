// Given a date string in the form Day Month Year, where:

// Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
// Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
// Year is in the range [1900, 2100].

// Input: date = "20th Oct 2052"
// Output: "2052-10-20"

var reformatDate = function (date) {
  var arr = date.split(" ");

  var monthOptions = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };

  var day = arr[0].substring(0, arr[0].length - 2);
  var month = monthOptions[arr[1]];
  var year = arr[2];

  return year + "-" + month + "-" + day;
};

console.log(reformatDate("20th Oct 2052"));
