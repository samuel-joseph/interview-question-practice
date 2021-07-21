const findMissing = (a) => {
  const len = a.length;
  let n = 0;
  let total = 0;

  for (let i = 0; i < len; i++) {
    if (n < a[i]) {
      n = a[i];
    }
    total += a[i];
  }
  const expected_sum = (n * (n + 1)) / 2;
  console.log(expected_sum + " " + total);
  return expected_sum - total;
};

console.log(findMissing([5, 4, 1, 2, 3]));
