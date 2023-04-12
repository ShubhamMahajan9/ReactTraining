
console.log(typeof ['This', 'is', 103]); //object
console.log(typeof Array(2));  //object

let a;
console.log(typeof a);  //undefined
console.log(typeof b);  //undefined

console.log(typeof NaN);  //number, even though it is not a number
console.log(typeof null);  //object


console.log(typeof true);  //boolean
console.log(typeof false);  //boolean


//check whether variable is array or not

let arr = [1, 2, 3];
console.log(Array.isArray(arr)); //true
console.log(arr instanceof Array);  //true
console.log(arr.constructor === Array); //true


//check whether variable is NaN or not

let var1 = 3;
let var2 = 'Text';
console.log(isNaN(var1)); //false
console.log(isNaN(var2)); //true