//collects assigns each letter as a key and the number of occurrences as the value
function binaryMatch(input){
  let sortedInput = input.sort();
  let histGen;
  sortedInput.forEach(letter => {
    histGen[letter] = histGen[letter] + 1 || 1;
  })
  return histGen;
}


function canBuildNote(magazine, note){
  let hist = binaryMatch(magazine);
  for(let i=0;i<note.length;i++){
    if (hist[note[i]] > 0){hist[note[i]]--}
    else {return false}
  }
  return true;
}
