function isPalindrome(word) {
  for(let i = 0; i < word.length / 2; i++){
    const j = word.length - 1 - i;
    const startChar = word[i];
    const endChar = word[j];
    if(startChar !== endChar) return false;
  }
  return true;
}

/* 
  racecar   robot
  ^     ^   ^   -
   ^   ^    False
    ^ ^
     ^
    True 
*/

/*
  i is ir=terating through the word by each letter starting with the first letter 
  whereas j is iterating through the word starting with the last letter
  if the starting character does not equal the last character and so on then the word is no a palindrom
  if they do match all the way through till the middle then the word is a palindrom
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
