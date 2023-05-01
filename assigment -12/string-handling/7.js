// . Write a js program to toggle case of each character of a string.

function toggleCase(str) {
    var toggledStr = "";
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      if (char === char.toUpperCase()) {
        toggledStr += char.toLowerCase();
      } else {
        toggledStr += char.toUpperCase();
      }
    }
    return toggledStr;
  }
  
  var str = "Hello, World!";
  var toggledStr = toggleCase(str);
  console.log(toggledStr);
  
