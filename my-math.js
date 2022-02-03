
const math = require('mathjs');

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
console.log(newArr);
const x = Math.log2(8)
const y = math.evaluate('sqrt(3^2 + 4^2)')
console.log(y)

const a = numbers.map(timesten)

function timesten(num){
    return num * 10
}

console.log(a)

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  const peeps = persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join("");
  }

  console.log(peeps)