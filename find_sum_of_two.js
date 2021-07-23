const find_sum_of_two = (a, val) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] === val) {
        return true;
      }
    }
  }
  return false;
};

console.log(find_sum_of_two([5, 7, 1, 2, 8, 4, 3], 19));
