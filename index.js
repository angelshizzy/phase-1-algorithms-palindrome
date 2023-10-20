function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord= word.split("").reverse().join("");
  if(word === reverseWord){
    return true;
  }else{
    return false;
  }
}

/* 
  Add your pseudocode here
  function = isPalindrome
  use the if else statement to check if a word is a palindrome
  return the function
*/

/*
  Add written explanation of your solution here
  A palindrome being a word/phrase that when reversed gives the same structure of word/phrase
  the function above checks to see if it is true for a given variable
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
