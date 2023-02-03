// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "(i/j)",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const polybiusNums = [
    "11",
    "21",
    "31",
    "41",
    "51",
    "12",
    "22",
    "32",
    "42",
    "52",
    "13",
    "23",
    "33",
    "43",
    "53",
    "14",
    "24",
    "34",
    "44",
    "54",
    "15",
    "25",
    "35",
    "45",
    "55",
  ];

  function polybius(input, encode = true) {
    let result = "";
    if (!input) {
      return false;
    }

    input = input.toLowerCase(); //ignore capital letters

    // encode message
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        let index = alphabet.indexOf(input[i]); // set index of corresponding letter
        if (index === -1 && input[i] === " ") {
          result += " "; //keep spaces
        } else if ((index === -1 && input[i] === "i") || input[i] === "j") {
          result += polybiusNums[8]; // (i/j) are both 42
        } else {
          result += polybiusNums[index]; //add number to result string
        }
      }
    }
    // decode message
    else {
      let originalInput = input.replace(/ /g, "");
      if (originalInput.length % 2 !== 0) {
        // return false if # of characters in string are odd
        return false;
      } else {
        let decodeInput = input.replace(/ /g, "  "); //replace one space with two to keep order
        let numMessage = decodeInput.match(/.{1,2}/g); //find matched numbers in encoded message

        for (let i = 0; i < numMessage.length; i++) {
          let index = polybiusNums.indexOf(numMessage[i]); //set index of corresponding number
          if (index === -1) {
            result += " "; // maintain spaces in message
          } else {
            result += alphabet[index]; //add decoded letter to result string
          }
        }
      }
    }
    return result;
  }
  return {
    polybius,  
  };
})();

module.exports = { polybius: polybiusModule.polybius };
