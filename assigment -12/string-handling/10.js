// 10. Write a js program to count total number of words in a string.
function countWords(str) {
    var wordCount = 0;
    var inWord = false;
    
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      
      if (/\w/.test(char)) {
        if (!inWord) {
          inWord = true;
          wordCount++;
        }
      } else {
        inWord = false;
      }
    }
    
    return wordCount;
  }
  

  var str = "Hello, World!";
  var numWords = countWords(str);
  console.log("Number of words: " + numWords);

  
