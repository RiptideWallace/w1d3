function letterCount(str) {
  var letters = {};
  str.replace(/\S/g,
function(count) {
  letters[count] = letters[count] + 1 || 1;
  })
  return letters;
}

console.log(letterCount('lighthouse in the house'));

