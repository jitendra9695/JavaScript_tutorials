console.log(2 > 3);
console.log(2 < 3);
console.log(2 >= 2);
console.log(2 == 1);
console.log(2 != 2);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null <= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined <= 0);

// javascript is a dynamily typed language ?

const score = 100 
const scoreValue = 100.03 

// both are same datatype Number 
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // both are not equal

// Array, Objects, Functions

const heroes = ["IronMan", "Captain America", "Hulk", "Thor"]
let myObj = {
    name: "Jitendra",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof id);

// ****************** Memory *****************//

// Stack(Primitive DataTypes), Heap(Non-Primitive Data Types)

let myName = "Jitendra"
let anotherName = myName
anotherName = "Aman"

console.log(myName);  // "Jitendra"
console.log(anotherName); // "Aman"  copy the value cannot affect original value

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "jitu@google.com" // change commit in userTwo.email change the original value userOne.email ,heap

console.log(userOne.email);
console.log(userTwo.email);
