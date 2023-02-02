// Write your tests here
const {substitution} = require("../src/substitution")
const {expect} = require("chai");

describe("substitution()", () => {
    it("should return false if the substitution alphabet is missing", ()=>{
        const input = "message";
        const alphabet = null;
        const actual = substitution(input,alphabet);
        expect(actual).to.be.false;
    })

    it("should return false if the substitution alphabet is not exactly 26 characters long", ()=>{
        const input = "message";
        const alphabet = "jgasdkh";
        const actual = substitution(input,alphabet);
        expect(actual).to.be.false
    })

    it("returns false if substitution alphabet has duplicate characters",()=>{
        const input = "message";
        const alphabet = "zcxvbnmmdgtherysiolawpqohf";
        const actual = substitution(input,alphabet);
        expect(actual).to.be.false
    })

    it("should work with any kind of key with unique characters",()=>{
        const input = "message"
        const alphabet = "%nvcxzl@kjhgfd+sapoi*yt$bw"
        const actual = substitution(input,alphabet)
        const expected = "fxoo%lx"
        expect(actual).to.equal(expected)
    })

    it("should encode a message using the given substitution alphabet",()=>{
        const input = "message";
        const alphabet ="%nvcxzl@kjhgfd+sapoi*yt$bw";
        const actual= substitution(input,alphabet);
        const expected = "fxoo%lx";
        expect(actual).to.equal(expected);
    })

    it("should decode a message using the given substitution alphabet",()=>{
        const input = "fxoo%lx";
        const alphabet = "%nvcxzl@kjhgfd+sapoi*yt$ew";
        const actual = substitution(input,alphabet,false)
        const expected = "message";
        expect(actual).to.equal(expected);
    })

    it("should preserve any spaces within a message", ()=>{
        const input = "new message";
        const aplhabet = "%nvcxzl@kjhgfd+sapoi*yt$ew";
        const actual = substitution(input,aplhabet)
        const expected = "dxt fxoo%lx";
        expect(actual).to.equal(expected)
    })
})
