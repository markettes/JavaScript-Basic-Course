//Reverse a String

function reverseString(str){
  str = str.split('');
  str = str.reverse('');
  str = str.join('');
  
  return str;
}

console.log(reverseString("hello"));
console.log(reverseString("Good Morning"));
console.log(reverseString("Hi, my name is Marcos"));


//2nd Solution

function reverseString(str){
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--){
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString("hello"));
console.log(reverseString("Good Morning"));
console.log(reverseString("Hi, my name is Marcos"));


//3rd Solution

function reverseString(str){
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));
console.log(reverseString("Good Morning"));
console.log(reverseString("Hi, my name is Marcos"));


//My solution using 

function reverseString(str){
  if(str.length == 1) return str;
  return str[str.length - 1] + (reverseString(str.slice(0,str.length - 1)));
}

console.log(reverseString("Hola"));
