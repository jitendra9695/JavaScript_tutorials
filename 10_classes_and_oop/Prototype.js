// let myName = "Jitendra     "
// let myChannel ="Chai    "

// console.log(myName.trim().length);
// console.log(myName.trueLength);

let myHeroes = ['Thor', 'spiderMan']

let heroPower = {
    thor : "hammer",
    spiderMan : "sling",
    IronMan : "Jarvis",
    Capt_America: "Dhaal",

    getSpiderPower : function(){
        console.log(`Spidy Power is ${this.spiderMan}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyhitesh = function(){
    console.log(`Hitesh says hello`);
}

// myHeroes.hitesh()
// heroPower.hitesh()

// myHeroes.heyhitesh()
// heroPower.heyhitesh()

//Inheritance
//prototypal inheritance 

const User = {
    name : "chai",
    email : "chai@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false,
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Jitendra  ".trueLength()
"Chai".trueLength()