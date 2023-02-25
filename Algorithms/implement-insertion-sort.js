function insertionSort(array) {
  // Only change code below this line
  for (let i=0; i<array.length; i++) {
    for(let j=i; j<array.length; j++) {
      if(array[i] > array[j]) {
        array[i] = array[i] + array[j];
        array[j] = array[i] - array[j];
        array[i] = array[i] - array[j]
      }
    }
  }
  return array;
  // Only change code above this line
}