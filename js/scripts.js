$(document).ready(function() {

  var inputSentence = prompt("Enter a sentence.");


  var newString = function(inputSentence) {
    return inputSentence.charAt(0).toUpperCase() + inputSentence.slice(-1).toUpperCase();
  };


  console.log(newString(inputSentence));
















});
