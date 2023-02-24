function sym(...args) {
  let difference = getDiff(args[0], args[1]);
  for(let i=2; i<args.length; i++) {
    difference = getDiff(difference, args[i])
  }
  console.log('Difference: ', difference);
  return difference;
}

function getDiff(arr1, arr2) {
  let diff = [];
  for(let item of arr1) {
    if(!(diff.includes(item) || arr2.includes(item))) {
      diff.push(item);
    }
  }
  for(let item of arr2) {
    if(!(diff.includes(item) || arr1.includes(item))) {
      diff.push(item);
    }
  }
  return diff;
}

sym([1, 2, 3], [5, 2, 1, 4]);