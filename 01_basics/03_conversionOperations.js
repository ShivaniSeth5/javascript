// Case 1: score = "33"

let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// Print the value in valueInNumber
console.log(valueInNumber)

// Case 2: score = "33abc"

let score1 = "33abc"

console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);

// Print the value in valueInNumber1
console.log(valueInNumber1)

// Case 3: score = Null

let score3 = null

console.log(typeof score3);
console.log(typeof(score3));

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);

// Print the value in valueInNumber3
console.log(valueInNumber3)

// Case 4: score = undefined

let score4 = undefined

console.log(typeof score4);
console.log(typeof(score4));

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);

// Print the value in valueInNumber4


// Case 4: score = undefined

let score5 = true

console.log(typeof score5);
console.log(typeof(score5));

let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5);

// Print the value in valueInNumber5
console.log(valueInNumber5)

// "33" => 33
// "33abc" => NaN 
// true => 1; false => 0

// Convert into boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let isLoggedIn1 = ""
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);

// 1 => true; 0 => false
// "" => false
// "shivani" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);