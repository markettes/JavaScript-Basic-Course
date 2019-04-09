//Check for Palindromes

function palindrome(str){
  let front = 0;
  let back  = str.length - 1;
  
  while(front < back){
    if(str[front] != str[back]) return false
    front++; back--;
  }
  
  return true;
  
}

console.log(palindrome("casa"));
console.log(palindrome("mom"));
console.log(palindrome("aaaaapppaaaaa"));
