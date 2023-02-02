const { expect } = require("chai");
const {polybius} = require("../src/polybius")

describe("polybius()", () =>{
    it("should encode a message by translating each letter to number pairs", () =>{
        const input = "message";
        const expected = "23513434112251";
        const actual = polybius(input)
        expect(actual).to.equal(expected)
    })
    
    it("should decode a message by translating each number pair into a letter",() =>{
        const expected = "message";
        const input = "23513434112251";
        const actual = polybius(input,false)
        expect(actual).to.equal(expected)
    })

    it("should encode 'i' and 'j' to 42", ()=>{
    const expected = "42 42";
    const input = "i j";
    const actual = polybius(input);
    expect(actual).to.equal(expected); 
})

    

    it("should decode 42 to (i/j)", () =>{
        const expected = "(i/j)"
        const input = "42"
        const actual = polybius(input, false)
        expect(actual).to.equal(expected)
    })

    

    it("should still work with capital letters", () =>{
        const expected = "23513434112251"
        const input = "MESSAGE"
        const actual = polybius(input)
        expect(actual).to.equal(expected)
    })

    

    it("should maintain spaces in the message", () => {
        const expected = "443251 23513434112251"
        const input = "the message"
        const actual = polybius(input)
        expect(actual).to.equal(expected)
    })

    

    it("returns false if the number of characters in the string are odd", () => {
        const input = "123"
        const actual = polybius(input,false)
        expect(actual).to.be.false
    })
    
    it("returns false if input is missing", () => {
        const input = null;
        const actual = polybius();
        expect(actual).to.be.false;
    })
})
