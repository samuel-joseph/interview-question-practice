function removeElement(num, val) {
  for (let i = 0; i <= num.length; i++) {
    if (num[i] === val) {
      num.splice(i, 1);
      i--;
    }
  }
  return "Length is " + num.length + " num is " + num;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
