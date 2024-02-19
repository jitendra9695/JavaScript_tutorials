const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const chai = {
    name: "ginger chai",
    price: 400,
    isAvailable: true,

    orderChai: function(){
        console.log("chai fat gyi");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(Math, 'PI', {
    writable: true,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// for (let [key, value] of Object.entries(chai)){
//     if(typeof value !== 'function')
//     {console.log(`${key} : ${value}`);}
// }