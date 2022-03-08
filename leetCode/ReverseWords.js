let s = "God Ding";

var reverseWords = function(s) {

let x = Array.from(s).reverse().join("").split(" ").reverse().join(" ")
//console.log(x)

return x

};


//var reverseWords = function(s) {
//let x = s.split(" ")
//for(let i = 0; i < x.length; i++){
//console.log(Array.from(x[i]).reverse().toString())
//}
//};
reverseWords(s)