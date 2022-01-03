// Write your code here:
const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

const justCoolStuff0 = function (arr1, arr2) {
  return arr1.filter(function(item){arr2.includes(item)})
}

const justCoolStuff1 = function (arr1, arr2) {
  let bothhave = [];
  for ( let x = 0; x < arr1.length; x++) {
    // console.log(arr1[x])
    for (let y = 0; y < arr2.length; y++){
      // console.log(arr2[y])
      if (arr1[x] === arr2[y]){
        bothhave.push(arr1[x])
      }
    }
  }
   return bothhave
}


const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item));






// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
console.log(justCoolStuff0(myStuff, coolStuff))
console.log(justCoolStuff1(myStuff, coolStuff)) //[ 'fruit-by-the-foot', 'skateboards', 'my room' ]
//undefined
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

