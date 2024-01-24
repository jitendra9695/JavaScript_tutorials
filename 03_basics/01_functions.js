
function sayMyName(){
    console.log("J")
console.log("I")
console.log("T")
console.log("E")
console.log("N")
console.log("D")
console.log("R")
console.log("A")

}
//  sayMyName();
 function addTwoNumbers (number1, number2){
    // console.log(number1 + number2);
 }

 const result = addTwoNumbers(2, 3);// this function doesn't return result 
//  console.log("Result", result); // so it can't work anymore

 function addTwoNumbers2 (number1, number2){
    // let result = number1+number2
    // return result;
    return number1+number2;
 }

 const result2 = addTwoNumbers2(2,6)
//  console.log(result2);

function loginUserMessage(username){
    if(username == undefined){
        // console.log("Please enter a username");
         return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

// spread operator
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 300, 400, 3000));

const user = {
    username: "jitendra",
    price: 899
}

const user2 = {
    username: "z",
    price: 89
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject(user2)
handleObject({
    username: "ddd",
    price: 90
})

const myNewArray = [200, 300, 500, 6000]
const myNewArray2 = [100, 150, 250, 5500]
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue(myNewArray2));
console.log(returnSecondValue([444, 555, 666, 111]));