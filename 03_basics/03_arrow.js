const user = {
    username : "Jitendra",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`)
        // console.log(this) // return current context
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()
// console.log(this) // global object window object , here value is  empty

/**1st way to declare function ***/
// function chai() {
//     let username = "Jitendra"
//     console.log(this.username) // undefined, we can't access this.username in function
//     console.log(this)// reference global object
// }

/**2nd way to declare function ***/

// let chai = function() {
//     let username = "Jitendra"
//     console.log(this.username);
//     console.log(this)// reference global object
// }

/**3rd way to declare function ***/
// Arrow function
const chai = () =>{
    let username = "Jitendra"
    console.log(this.username)
    console.log(this) // empty object
}
// chai()

/*** implicit, explicit ***/

const addTwo = (num1, num2) => {
    return num1+num2 // explicit(return used {curly braces})
}
console.log(addTwo(2,4));

const addingTwo = (num1, num2) =>  num1+num2 // without parenthesis
console.log(addingTwo(5,2));

const additionTwo = (num1, num2) => ( num1 + num2) // implicit with (parenthesis)
console.log(additionTwo(3,5))

const myName = () => ({username: "Jitendra"})// to return object we use implicit function,without parenthesis it gives error
console.log(myName()); 