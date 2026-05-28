const PI = 3.14159; // This is a constant representing the value of pi
let radius = 5; // This is a variable representing the radius of a circle

let area = radius * radius * PI;
console.log("The area of the circle is: " + area);

radius = 20; // Updating the radius variable
area = radius * radius * PI;

console.log("The area of the circle is: " + area);

const one = 1; // This is a constant representing the number one
const two = '2';
let result = one * two;// This is type coercion, JavaScript will convert the string '2' to a number before multiplication
console.log(result); 

result = one * Number(two); // Converting the string '2' to a number before multiplication to avoid concatenation
console.log(result); 


let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    