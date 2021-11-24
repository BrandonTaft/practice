const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found)
// expected output: Array ["T", "I"]

const str = 'For more information, see Chapter 3.4.5.1';
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.

//************global*************

const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp = /[A-E]/gi;
const matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

//*********SPECIAL*************
var re = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}$/;
function testInfo(phoneInput) {
  var OK = re.exec(phoneInput.value);
  var out = document.querySelector('#out');
  if (!OK) {
    out.textContent = `${phoneInput.value} isn't a phone number with area code!`;
  } else {
    out.textContent = `Thanks, your phone number is ${OK[0]}`;
  }
} 