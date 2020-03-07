// function double(num) {
//     return num * 3;
// }

// function Name = parameter = what to return
const double = num => num * 2;

// function Name = (multiple parameter) = what to return
const add = (x, y, z) => x + y + z;

const result = add(5, 10, 15);
console.log(result);

const doMath = (a, b) => {
    const sum = a + b;
    const minus = a - b;
    const answer = sum * minus;
    return answer;
}

const resultOfDoMath = doMath(6, 2);
console.log(resultOfDoMath);

// function inside a variable

const multiply = function (number) {
    return number * 5;
}
console.log(multiply(3));


