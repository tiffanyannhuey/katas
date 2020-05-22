let test  = [10,20,20,10,10,30,50,10,20];

const matchSocks = (n,ar) => {
  let matchingPairs = 0;
  ar.sort();
  for (let i=0; i<ar.length;) {
    if (ar[i] === ar[i+1]) {
      matchingPairs++
      ar.splice(i, 2);
    } else {
      i++;
    }
  }
  return matchingPairs
}

matchSocks(9,test);