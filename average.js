// Given an array of unique integers salary where salary[i] is the salary of the employee i.

// Return the average salary of employees excluding the minimum and maximum salary.

// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500

var average = function (salary) {
  let sum = 0;
  let min;
  let max = 0;

  for (let i = 0; i < salary.length; i++) {
    sum += salary[i];
    if (i === 0) {
      min = salary[i];
    } else {
      if (min > salary[i]) {
        min = salary[i];
      } else if (max < salary[i]) {
        max = salary[i];
      }
    }
  }
  sum -= min;
  sum -= max;
  return sum / (salary.length - 2);
};

console.log(average([8000, 9000, 2000, 3000, 6000, 1000]));
