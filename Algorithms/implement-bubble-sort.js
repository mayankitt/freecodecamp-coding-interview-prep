function bubbleSort(array) {
  // Only change code below this line
  for (let i=0; i<array.length; i++) {
    for(let j=0; j<(array.length-1); j++) {
      if(array[j+1] < array[j]) {
        array[j+1] = array[j+1] + array[j];
        array[j] = array[j+1] - array[j];
        array[j+1] = array[j+1] - array[j];
      }
    }
  }
  return array;
  // Only change code above this line
}

console.log(bubbleSort([5,4,3,2,1]))