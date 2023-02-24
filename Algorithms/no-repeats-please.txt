function permAlone(str) {
  console.log('Original String: ', str)
  let perms = getPermutations('', str, [])
  console.log('Permutations: ', perms);
  let nonRepeats = 0;
  perms.forEach((perm) => {
    let repeat = false;
    for(let i=1; i< perm.length; i++) {
      if(perm[i] == perm[i-1]) {
        repeat = true;
      }
    }
    if(!repeat) {
      nonRepeats++;
    }
  });
  console.log("Number of non-repeats: ", nonRepeats);
  return nonRepeats;
}

function getPermutations(partialPermutation, remainingCharacters, list) {
  if(remainingCharacters === '') {
    list.push(partialPermutation);
  }
  for(let i=0; i<remainingCharacters.length; i++) {
    let newRemainingCharacters = remainingCharacters.slice(0,i) + remainingCharacters.slice(i+1);
    getPermutations(partialPermutation+remainingCharacters[i], newRemainingCharacters, list);
  }
  return list;
}

permAlone('aab');