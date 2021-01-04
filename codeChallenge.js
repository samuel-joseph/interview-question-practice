// The challenge is at the URL ******************************* where N is the minimum number of comparisons required to determine if any given value is present in a sorted array of length 1,000,000

function numComparison(searchValue, arrayOfMillion) {

  for (let i = 0; i < arrayOfMillion.length; i++){
    if (searchValue === arrayOfMillion[i]) {
      return `${searchValue} is present and is compared ${i} times before it was searched!`
    }
  }
}