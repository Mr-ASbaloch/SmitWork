function countVowelsConsonants(str) {
    var vowels = "aeiouAEIOU";
    var vowelCount = 0;
    var consonantCount = 0;
    
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      
      if (vowels.indexOf(char) !== -1) {
        vowelCount++;
      } else if (char.match(/[a-zA-Z]/)) {
        consonantCount++;
      }
    }
    
    console.log("Vowels: " + vowelCount);
    console.log("Consonants: " + consonantCount);
  }
  

  var str = "Hello, World!";
  countVowelsConsonants(str);

  