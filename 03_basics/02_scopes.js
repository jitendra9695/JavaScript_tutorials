// scope -> {}

// var c=600
let a =400 // global scope
if(true){
    let a=10 // local scope
    const b=50
    // var c=60
    // console.log(`Inner value ${a}`);
}

// console.log(a);
// console.log(b);
// console.log(c); // scope of var type variable is global that is not good for program
// that is why we not prefer var type variable

/*** nested Scope ***/

function one(){
    const username = "Jitendra"

    function two(){
        const website = "Youtube"
        // console.log(username); // {username} variable is global for function two
    }
    
    // console.log(website); // scope is not available
    
    two()
}
 one();
// same scope concept for if-else condition
if(true){
    const username = "Jitendra"
    if(username === "Jitendra"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website);
}

// console.log(username);
 
/*** Interesting ***/

console.log(addone(5)); // we can access before initialization
function addone(num){
    return num+1
}

// addTwo(4) // we cannot access before initialization
const addTwo = function(num){
    return num+2
}
console.log(addTwo(7))