/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    
    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();

   
    let sortedArray1 = Array.from(lowerStr1).sort();
    let sortedArray2 = Array.from(lowerStr2).sort();

   
    let ans1 = sortedArray1.join('');
    let ans2 = sortedArray2.join('');

  
    if (ans1 === ans2) {
        return true;
    } else {
        return false;
    }
  }

module.exports = isAnagram;
