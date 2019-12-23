//collects assigns each letter as a key and the number of occurrences as the value
function binaryMatch(magazine){
  let sortedMagazine = magazine.sort();
  let hist = {};
  magazine.forEach(letter => {
    hist[letter] = histogram[letter] + 1 ;
  })
  return hist;
}

function canBuildNote(magazine, note){
  
}

function 