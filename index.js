function isPalindrome(word) {
  // Write your algorithm here
  let reverse = "";
  for(let i = word.length-1; i >= 0; i-- ){
    reverse += word[i];
  }
  if (reverse === word){
    return true;
  } else {
    return false;
  }
}

let word = 'robot';
console.log(isPalindrome(word));

/* 
  Add your pseudocode here
  store the result of the reverse of the word in a pre initialized empty variable using a for loop.
  compare the original value with the reversed value.
  if both values are equal, return true, else return false.
*/

/*
  Add written explanation of your solution here
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
