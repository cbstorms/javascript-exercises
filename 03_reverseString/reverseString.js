const reverseString = function(phrase) {
  let letter = "";
  let string = "";
  for (let i = phrase.length; i > 0; i--) {
    letter = phrase[i-1];
    string += letter;
  }
return string;

};

// Do not edit below this line
module.exports = reverseString;
