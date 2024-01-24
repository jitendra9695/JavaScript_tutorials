//if statement
const isUserLoggedIn = true
const temperature = 41

if(temperature === 40){
    console.log("less than 50 degree")
}else {
    console.log(`temperature is greater than 50 degree`);
}

console.log("Executed");

// <,>,<=,>=, ==, ===, !=,!==
// === to check datatype also same , 2==="2"

const score = 200

if(score > 100){
    // var power ="fly" // never use var type variable it break the scope restrictions 
    let power = "fly" 
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`)

// if(balance > 500) console.log("test"), console.log("test2");

const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}
else if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In")
}
else{
    console.log(Logging);
}