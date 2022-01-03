// Write your code here:
const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');
const shoutGreetings1 = function(arr) {
  arr.map (function(element){
    return element.toUpperCase() + '!' 
  });
}

const shoutGreetings2 = function(arr) {
  const newarr = [];
  arr.forEach(function(element){
    newarr.push(element.toUpperCase() + '!')
  });
}





// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings));
console.log(shoutGreetings1(greetings));
console.log(shoutGreetings2(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

