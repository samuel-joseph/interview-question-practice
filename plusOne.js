var plusOne = function (digits) {
  let arr = digits;
  let lastDigit = arr.pop();
  lastDigit++;

  if (lastDigit == 10) {
    arr.push(1);
    arr.push(0);
  } else {
    arr.push(lastDigit);
  }

  return arr;
};

console.log(plusOne([1,2,3,9]));
