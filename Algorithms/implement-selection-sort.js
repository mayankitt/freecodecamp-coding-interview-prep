function selectionSort(a) {
  // Only change code below this line
  for(let i=0; i<a.length; i++) {
    let minIndex = i;
    for(let j=i; j<a.length; j++) {
      if(a[minIndex] > a[j]) {
        minIndex = j;
      }
    }
    if(i !== minIndex) {
      a[minIndex] = a[i] + a[minIndex];
      a[i] = a[minIndex] - a[i];
      a[minIndex] = a[minIndex] - a[i]; 
    }
  }
  return a;
  // Only change code above this line
}