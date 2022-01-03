// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

const validateCred0 = function(arr) {
  if (arr.every(function(element) {return typeof element === 'number';})){
    return true;
  } return false;
} 

const validateCred = function(arr) {
  let lastdig = arr.length-1;
  let getlastdig = arr[lastdig];
  let totaleven = 0;
  let totalodd = 0;
  let totalsum = 0;
  for (let even = arr.length-2; even >= 0; even -= 2){
    // console.log(`1357 ${even}`);
    // console.log(arr[even]);
    let oddmultli2 = arr[even] * 2;
    if (oddmultli2 > 9) {
      oddmultli2 = oddmultli2 - 9;
    }
    totaleven = totaleven + oddmultli2;
  }
  for (let odd = arr.length-3; odd >= 0; odd -=2){
    // console.log(`2468 ${odd}`);
    // console.log(arr[odd]);
    totalodd = totalodd + arr[odd];
  }
  totalsum = getlastdig + totaleven + totalodd;
  // console.log(`total digit ${arr.length}`);
  // console.log(`total sum ${totalsum}`);
  // console.log(`last digit ${getlastdig}`);
  // console.log(`total 1357 ${totaleven}`);
  // console.log(`total 2468 ${totalodd}`);
  if (totalsum%10 === 0) {
    return true;
  } return false;
};


const findInvalidCards = function(arr){
  const invalidcard = [];
  for (let i = 0; i < arr.length; i++) {
    let cardnumber = arr[i];
    if (validateCred(cardnumber) === false){
      invalidcard.push(arr[i])
    }
  }
  return invalidcard;
};

// console.log(findInvalidCards(batch));

const idInvalidCardCompanies = function(arr) {
  const companiesWithmistake = [];
  for (let x = 0; x < arr.length; x ++) {
    switch (arr[x][0]){
      case 3:
        companiesWithmistake.push('American Express');
        break;
      case 4:
        companiesWithmistake.push('Visa');
        break;
      case 5:
        companiesWithmistake.push('Mastercard');
        break;
      case 6:
        companiesWithmistake.push('Discover');
        break;
      default:
        console.log('Company not found');
    }
  }
  return companiesWithmistake;
};

console.log(idInvalidCardCompanies(batch));






