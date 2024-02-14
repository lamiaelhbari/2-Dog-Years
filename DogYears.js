// Challenge 2- Dog Years :

const myAge = 38;

// 1-calculating EarlyYears :

let earlyYears = 2;
//  earlyYears = earlyYears * 10.5 ;
earlyYears *= 10.5;

// 2- calculating LaterYears :
let laterYears = myAge - 2;

// 3- Calculating dog years:

laterYears *= 4;
console.log(laterYears);

// 4- Calculating myAgeInDogYears :
let myAgeInDogYears = earlyYears + laterYears;

// 5- Convert the string to lowercase :
let myName = "LAMIA";
myName = myName.toLowerCase();

// 6- Use string interpolation to display name and age in dog years :
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
