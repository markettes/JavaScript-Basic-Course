//Factorialize a Number

//1st 

function factorialize(num){
  var res = 1;
  for(var i = 1; i <= num; i++){
    res *= i;
  }
  return res;
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(15));


//2nd 

function factorialize(num){
  if(num === 0) return 1;
  return num * factorialize(num - 1);
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(15));
