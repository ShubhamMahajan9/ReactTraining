
let a;
console.log('Before assignment : a = ' + a); // Before assignment : a = undefined

a=10;
console.log('After assignment : a = ' + a); // After assignment : a = 10

a=17;
console.log('After re-assignment : a = ' + a); // After re-assignment : a = 17

const b = 7;
console.log('Before re-assignment : b = ' + b); // Before re-assignment : b = 7

b=6;
console.log('After assignment : b = ' + b); //TypeError: Assignment to constant variable.