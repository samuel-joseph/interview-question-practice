var strStr = function (haystack, needle) {
  let arrHay = haystack.split("");
  let arrNeedle = needle.split("");

  if (needle === "") {
    return 0;
  }
  for (let i = 0; i < arrHay.length; i++) {
    if (arrHay[i] === arrNeedle[0]) {
      let temp = i;
      for (let j = 0; j < arrNeedle.length; j++) {
        if (arrHay[temp] != arrNeedle[j]) {
          break;
        } else if (j == arrNeedle.length - 1 && arrHay[temp] === arrNeedle[j]) {
          return i;
        } else {
          temp++;
        }
      }
    }
  }
  return -1;
};

console.log(strStr("hello", "ll"));
