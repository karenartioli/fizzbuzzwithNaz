import { generateFizzBuzz } from "./FizzBuzz.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("Three numbers", () => {
    expect(generateFizzBuzz(3)).toEqual([1,2,"Fizz"]);
});

test("Ten numbers", () => {
    expect(generateFizzBuzz(10)).toEqual([1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz"]);
});

test("Empty", () => {
    expect(generateFizzBuzz(0)).toEqual([]);
});
