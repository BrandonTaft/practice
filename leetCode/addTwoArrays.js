// const l1 = [9,9,9,9,9,9,9]
// const l2 = [9,9,9,9]
const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
var addTwoNumbers = function (l1, l2) {
    let x = +l1.reverse().join("") + +l2.reverse().join("");
    return Array.from(String(x), Number).reverse()
};

console.log(addTwoNumbers(l1, l2))