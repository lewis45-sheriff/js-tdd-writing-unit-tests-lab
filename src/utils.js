export function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error("Invalid input: input must be a string");
    }
  
    if (word === "") {
      return false;
    }
  
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Invalid input: only alphabetic characters are allowed");
    }
  
    // Convert the word to lowercase to handle case insensitivity
    const lowerCasedWord = word.toLowerCase();
    
    // Check if the word reads the same forwards and backwards
    const reversedWord = lowerCasedWord.split('').reverse().join('');
    
    return lowerCasedWord === reversedWord;
  }
  