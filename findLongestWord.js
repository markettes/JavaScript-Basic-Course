//Basic Level

function findLongestWord(str){
  var words = str.split(' ');
  var maxLength = 0;
  for(var i = 0; i < words.length; i++){
    if(words[i].length > maxLength){
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

console.log(findLongestWord("Hola me llamo Marcos"));


//Intermediate Level

function findLongestWord(str){
  return str.split(' ').reduce(function(x, y) {
    return Math.max(x, y.length)
  }, 0);
}

console.log(findLongestWord("Hola me llamo Marcos"));
