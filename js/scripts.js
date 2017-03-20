$(document).ready(function() {

  var inputSentence = prompt("Enter a sentence.");


  var newString = function(inputSentence) {
    return inputSentence.charAt(0).toUpperCase() + inputSentence.slice(-1).toUpperCase();
  };

  var reverseString = function(newString) {
    return newString.split("").reverse().join("");
  }
  console.log(reverseString(newString(inputSentence)));
















});
