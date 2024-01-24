//global scope ke pollution se bachne ke liye we use iife
// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB Connected`)
})(); // immediate execute, compulsory to add semi colon to terminate
// ()() -> iife nammed, unnamed iife 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('Jitendra')