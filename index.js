//collects assigns each letter as a key and the number of occurrences as the value
function buildHistogram(input){
  let sortedInput = input.sort();
  let histGen;
  sortedInput.forEach(letter => {
    histGen[letter] = histGen[letter] + 1;
  })
  return histGen;
}


function canBuildNote(magazine, note){
  let histMag = binaryMatch(magazine);
  let histNote = {};
  let splitNote = note.split();
  histNote = buildHistogram(splitNote);
  //splitNote.forEach(letter => {
  //    histNote[letter] = histNote[letter] + 1 ;
  //})

histNote.forEach(letter =>{
  if(histNote[letter] < histMag[letter]){
    return false;
  } else if(histNote[letter] > histMag[letter]){
    return true;
  }
})

}
