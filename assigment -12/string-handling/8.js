// . Write a js program to find total number of alphabets, digits or special character in a string.
function countChars(str) {
    var alphabetCount = 0;
    var digitCount = 0;
    var specialCount = 0;
    
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      
      if (/[a-zA-Z]/.test(char)) {
        alphabetCount++;
      } else if (/\d/.test(char)) {
        digitCount++;
      } else {
        specialCount++;
      }
    }
    
    console.log("Alphabets: " + alphabetCount);
    console.log("Digits: " + digitCount);
    console.log("Special characters: " + specialCount);
  }
  

  var str = "Hello, World! 123";
  countChars(str);

