function reverse(word){
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  reversedWord = reversedWordArray.join("")
  return reversedWord
}

function isPalindrome(word) {
  // Write your algorithm here
  //reverse the input String
  const reversedWord = reverse(word)
  if (word === reversedWord){
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  means that if the wors is the same as the word in reverse, I should return true
  reverse the string

  if the input is the same as the reversed input return true
  else return false
  
*/

/*
  Add written explanation of your solution here
  a function isPalindrome will receive an a single argument of string type
  the function should return true when executed if the string is a palindrome
  and return false if it is not a palindrome
  A palindrome is a word that reads the same forward and backwards

  mom === mom //true
  tot === tot //true
  risk === risk //false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
