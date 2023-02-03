// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false; //returns false if sub aplhabet isn't present or exactly 26 char

    const trueAlpha = "abcdefghijklmnopqrstuvwxyz".split(""); //move letters into an array for array methods
    const inputArray = input.toLowerCase().split(""); //ignore capital letters in given message
    const subAlphabet = alphabet.toLowerCase().split(""); //ignore capital letters in given alphabet

    const uniqueAlpha = subAlphabet.filter(
      //no repeated letters/characters in given alphabet
      (uni, index, alph) => alph.indexOf(uni) === index
    );
    if (uniqueAlpha.length !== alphabet.length) return false;
    const newEncoded = () => {
      let message = [];
      const encode = (lett) => {
        const letterIdx = trueAlpha.indexOf(lett); //find the letter index
        const encodedLett = subAlphabet[letterIdx]; //ABC letter index is set to sub letter index/char
        message.push(encodedLett); //push new character/letter into message array
      };
      inputArray.forEach((lett) => {
        if (lett === " ") {
          message.push(" "); // keeps space or encodes letter/character
        } else {
          encode(lett);
        }
      });
      return message.join(""); //join array into a string
    };
   
    const decodedMess = () => { 
      let message = [];
      const decode = (lett) => {
        const letterIdx = subAlphabet.indexOf(lett); // find sub letter index
        const decodedLett = trueAlpha[letterIdx]; // sub letter index will be set to ABC index/char
        message.push(decodedLett); //push new char/letter into message array
      };
      inputArray.forEach((lett) => {
        if (lett === " ") {
          message.push(" "); // keeps space or encodes letter/character
        } else {
          decode(lett);
        }
      });
      return message.join(""); //join array into a string
    };
    if (encode) {
      return newEncoded(input, alphabet); // return new encoded message when encode is true
    } else {
      return decodedMess(input, alphabet, false); // return decoded message when encode is false
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
