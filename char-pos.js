function letterPosition(str, char) {
  return str
    .split("")
    .map(function (c, i) { if (c == char) return i; })
    .filter (function (v) {return v >= 0; });
}
function countAllLetters(stringToCount){
  var characterArray = stringToCount.split("");
  var resultArray = {};
  for (var i = 0; i < characterArray.length; i++) {
    var currentLetter = characterArray[i];
    if (resultArray.hasOwnProperty(currentLetter)) {
      resultArray[currentLetter].push(i);
    }
    else {
      resultArray[currentLetter] = [i];

    }
  }
  console.log(resultArray);
}
countAllLetters("lighthouse in the house")



