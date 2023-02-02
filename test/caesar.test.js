// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("ceasar()",()=>{
it("should return false if shift amount is 0", () =>{
    const shift = 0;
    const input = "zebra magazine";
    const actual = caesar(input,shift);
    expect(actual).to.be.false;
})
it("should return false if shift amount is greater than 25", () =>{
    const shift = 26;
    const input = "zebra magazine";
    const actual = caesar(input,shift);
    expect(actual).to.be.false;
})

it("should return false if shift amount is less than -25", () =>{
    const shift = -26;
    const input = "zebra magazine";
    const actual = caesar(input,shift);
    expect(actual).to.be.false
})

it("should encode a input by switching the letters", () =>{
    const input = "message";
    const shift = 3;
    const actual = caesar(input,shift);
    const expected = "phvvdjh";
    expect(actual).to.equal(expected)
})

it("should ignore capital letters", ()=>{
    const input = "MessaGe";
    const shift = 3;
    const expected = "phvvdjh";
    const actual = caesar(input,shift);
    expect(actual).to.equal(expected)
})

it("should maintain spaces and other symbols as they are in the message", () =>{
    const input = "a message.";
    const shift = 3;
    const expected = "d phvvdjh.";
    const actual = caesar(input,shift);
    expect(actual).to.equal(expected)
})
 
it("should handle shifts that go past the end of the alphabet", () => {
    const input = "xyz";
    const shift = 3;
    const expected = "abc";
    const actual = caesar(input,shift)
    expect(actual).to.equal(expected)
})

it("should decode a given encoded message", ()=>{
    const input = "cheud pdjdclqh";
    const shift = 3;
    const expected = "zebra magazine";
    const actual = caesar(input,shift, false)
    expect(actual).to.equal(expected)
})
})
