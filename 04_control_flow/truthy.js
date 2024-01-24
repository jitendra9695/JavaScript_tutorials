const userEmail = []

if(userEmail){
    console.log("Got User Email");
}
else{
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN"

// truthy values

// "0", 'false', " ", [], {}, function(){} -> empty function comes under truthy values

if(userEmail.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {}
//Object.keys(emptyObj) --> convert int0 arrayform, return array
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

// false == 0 , false == '' , 0 == '' --> all return true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // it return 1st not null value
// val1 = null ?? 15
val1 = undefined ?? 10 ?? 15 // return 1st not null value

console.log(val1);

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("price is less than 80") : console.log("price is greater than 80");
