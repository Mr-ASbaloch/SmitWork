// 11. Write a js program to find reverse of a string.

// function reverseString(str) {

//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// // take input from the user
// const string = 'helloo world';

// const result = reverseString(string);
// console.log(result);



// 12. Write a js program to check whether a string is palindrome or not.

// function isPalindrome(str) {
   
//     const cleanedStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
   
//     return cleanedStr === cleanedStr.split('').reverse().join('');
//   }
  
 
//   const testStr = 'A man, a plan, a canal, Panama!';
//   if (isPalindrome(testStr)) {
//     console.log(`"${testStr}" is a palindrome.`);
//   } else {
//     console.log(`"${testStr}" is not a palindrome.`);
//   }
  


// function reverseWords(str) {

//     const wordsArr = str.split(' ');
  
  
//     const reversedArr = wordsArr.reverse();
  

//     const reversedStr = reversedArr.join(' ');
  
//     return reversedStr;
//   }
  
//   const testStr = 'Hello world, how are you?';
//   const reversedStr = reverseWords(testStr);
//   console.log(reversedStr);
  

// 14. Write a js program to find first occurrence of a character in a given string.

// function findFirstOccurrence(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//         return i;
//       }
//     }
   
//     return -1;
//   }
  
//   const testStr = 'hello world';
//   const targetChar = 'l';
//   const firstOccurrence = findFirstOccurrence(testStr, targetChar);
//   console.log(`The first occurrence of "${targetChar}" in "${testStr}" is at index ${firstOccurrence}.`);
  
// 15. Write a js program to find last occurrence of a character in a given string

// function findLastOccurrence(str, char) {
   
//     for (let i = str.length - 1; i >= 0; i--) {
     
//       if (str[i] === char) {
//         return i;
//       }
//     }
  
//     return -1;
//   }
  
//   const testStr = 'hello world';
//   const targetChar = 'l';
//   const lastOccurrence = findLastOccurrence(testStr, targetChar);
//   console.log(`The last occurrence of "${targetChar}" in "${testStr}" is at index ${lastOccurrence}.`);
  

// 16. Write a js program to search all occurrences of a character in given string.

// program to check the number of occurrence of a character

// function countOccurrences(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//         count++;
//       }
//     }
//     return count;
//   }
  

//   const testStr = 'hello world';
//   const targetChar = 'l';
//   const occurrenceCount = countOccurrences(testStr, targetChar);
//   console.log(`The character "${targetChar}" occurs ${occurrenceCount} times in "${testStr}".`);
  
// 17. Write a js program to count occurrences of a character in given string.

// function countOccurrences(str, char) {
//     let count = 0;
  
//     for (let i = 0; i < str.length; i++) {
//        if (str[i] === char) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   const testStr = 'hello world';
//   const targetChar = 'l';
//   const occurrenceCount = countOccurrences(testStr, targetChar);
//   console.log(`The character "${targetChar}" occurs ${occurrenceCount} times in "${testStr}".`);
  

// 18. Write a js program to find highest frequency character in a string.

// function findHighestFrequency(str) {
//     const charMap = {};
//     let maxFrequency = 0;
//     let maxChar = '';

//     for (let char of str) {
//       if (charMap[char]) {
//         charMap[char]++;
//       } else {
//         charMap[char] = 1;
//       }
//     }
  
   
//     for (let char in charMap) {
//       if (charMap[char] > maxFrequency) {
//         maxFrequency = charMap[char];
//         maxChar = char;
//       }
//     }
  
//     return maxChar;
//   }
  
  
//   const testStr = 'hello world';
//   const highestFrequencyChar = findHighestFrequency(testStr);
//   console.log(`The character "${highestFrequencyChar}" has the highest frequency in "${testStr}".`);
  
// 19. Write a js program to find lowest frequency character in a string.

// function findLastOccurrence(str, char) {
//      for (let i = str.length - 1; i >= 0; i--) {
   
//       if (str[i] === char) {
//         return i;
//       }
//     }
  
//     return -1;
//   }
  
//   const testStr = 'hello world';
//   const targetChar = 'l';
//   const lastOccurrence = findLastOccurrence(testStr, targetChar);
//   console.log(`The last occurrence of "${targetChar}" in "${testStr}" is at index ${lastOccurrence}.`);
  


