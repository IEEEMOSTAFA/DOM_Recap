const number = 23;
// string,number,boolean;
if(typeof number === 'number'){
    console.log('Value  is a Number');

}
else{
    console.log("Value is not a Number");
}

const numbers = [1,2,3];
const students = {name: 'Rongila Rafsan',job:'teacher'}
console.log(typeof numbers);
console.log(typeof students);
console.log(Array.isArray(students));
console.log(Array.isArray(numbers));