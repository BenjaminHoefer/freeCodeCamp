function smallestCommons(arr) {

const rangeArr = [];
let dividend  = 0;
let counter;

// Create array of range between param 1 and param 2
  if (arr[1] - arr[0] >= 0) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      rangeArr.push(i); 
    }
  } else if (arr[1] - arr[0] < 0) {
      for (let i = arr[1]; i <= arr[0]; i++) {
        rangeArr.push(i);
      }
  }  
// Check the numbers for divisbility
  do {
    counter = 0;
    dividend++;
    for (let num of rangeArr) {
      if (dividend % num === 0) {
        counter += 1;
      }
    }
  } while (counter < rangeArr.length);

  return dividend;
}
  
smallestCommons([1,5]);