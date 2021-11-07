var groupAnagrams = function (strs) {
  let arr = strs.split(",");
  let subArr = [];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      subArr.push(arr[i]);
      newArr.push(subArr);
      subArr = [];
    }
  }
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
