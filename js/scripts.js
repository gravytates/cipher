$(document).ready(function() {

  var inputSentence = prompt("Enter a sentence.");


  var newString = function(inputSentence) {
    return inputSentence.charAt(0).toUpperCase() + inputSentence.slice(-1).toUpperCase();
  };

  var reverseString = function(newString) {
    return newString.split("").reverse().join("");
  };

  var concatString = function(inputSentence, reverseString) {
    return inputSentence + reverseString(newString(inputSentence));
  };

  console.log(concatString(inputSentence, reverseString));

  // var concatString = function(inputSentence, reverseString, newString) {
  //   return inputSentence + reverseString(newString(inputSentence));
  // };
  //
  // console.log(concatString(inputSentence, reverseString(newString())));
















});
