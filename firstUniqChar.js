var firstUniqChar = function (s) {
  let arr = s.split("");
  let obj = new Object();

  for (let i = 0; i < arr.length; i++) {
    if (`${arr[i]}` in obj) {
      obj[`${arr[i]}`]++;
    } else {
      obj[`${arr[i]}`] = 0;
    }
    if (i == arr.length - 1) {
      let index = Object.keys(obj).find((key) => obj[key] === 0);
      if (index) {
        return arr.indexOf(index);
      } else {
        return -1;
      }
    }
  }
};

console.log(firstUniqChar("loveleetcode"));