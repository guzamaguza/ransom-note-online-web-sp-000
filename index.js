//collects assigns each letter as a key and the number of occurrences as the value
function buildHistogram(input){
  let sortedInput = input.sort();
  let histGen;
  sortedInput.forEach(letter => {
    histGen[letter] = histGen[letter] + 1;
  })
  return histGen;
}


function binaryMatch(magazine){
  let sortedMagazine = magazine.sort();
  let hist = {};
  magazine.forEach(letter => {
    hist[letter] = hist[letter] + 1 ;
  })
  return hist;
}


function canBuildNote(magazine, note){
  let histMag = binaryMatch(magazine);
  let histNote = {};
  let splitNote = note.split();
  splitNote.forEach(letter => {
      histNote[letter] = histNote[letter] + 1 ;
  })

histNote.forEach(letter =>{
  if(histNote[letter] < histMag[letter]){
    return false;
  } else if(histNote[letter] > histMag[letter]){
    return true;
  }
})

}
