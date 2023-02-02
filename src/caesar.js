// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
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
    "i",
    "j",
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
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
   
    //Set a variable to an empty array to hold the final results
    let result = [];
    input = input.toLowerCase().split("");//ignore capital letters and place given message into an array
    if (encode) { //encode message when encode is set to true
      input.forEach((newLetter) => {//loop through message and find if it is in the alphabet
        if (alphabet.includes(newLetter)) {//check if letter/character/space is in alphabet
          alphabet.find((letter, index) => {
            if (letter === newLetter) {//index of ABC letter is same as index of message letter
              let encoIdx = index + shift; //shift to a different index/letter depending on the shift number
              if (encoIdx < 0) encoIdx += 26;//loop around length of alphabet
              if (encoIdx > 25) encoIdx -= 26;
              let changingLett = alphabet[encoIdx];//assign encoded letter to corresponding letter in message
              result.push(changingLett); //push encoded letter to result array
            }
          });
        } else {
          result.push(newLetter);// if not in alphabet, maintain spaces and symbols
        }
      });
    } else {
      input.forEach((newLetter) => {
        if (alphabet.includes(newLetter)) {//check if letter/character is in the alphabet array
          alphabet.find((letter, index) => {
            if (letter === newLetter) {
              let decoIdx = index - shift;
              if (decoIdx < 0) decoIdx += 26;// loop around length of alphabets
              if (decoIdx > 25) decoIdx -= 26;
              let changingLett = alphabet[decoIdx];// shift encoded letter back to proper letter
              result.push(changingLett); // push changed letter into results array
            }
          });
        } else {
          result.push(newLetter); //maintain spaces and symbols
        }
      });
    }
    return result.join(""); // join elements in an array to a string and return
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
