/** Adds two given numbers, returning the sum.
 * @param {number} a
 * @param {number} b
 * @returns {number} the sum of a and b
 */
function generateFizzBuzz(N) {
    let result = [];
    for (let i = 1; i <= N; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

console.log(generateFizzBuzz(3));

export { generateFizzBuzz };