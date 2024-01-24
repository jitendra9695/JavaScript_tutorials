//singleton -> constructor through making object, through litrals singleton not form
//Object.create -> through constructors

//** object literals **//

const mySym = Symbol("Key1")

const JsUser = {
    name: "Jitendra",
    "full name": "jitendra kumar singh",
    [mySym]: "mykey1",
    age: 18,
    location: "Prayagraj",
    email: "jitendra@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]); // always prefer this way
console.log(JsUser["full name"]);
console.log(JsUser[mySym])

// JsUser.email= "jitendra@gmail.com"
// Object.freeze(JsUser)
// JsUser.email= "jitu@email.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello Js User`)
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js Users ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())