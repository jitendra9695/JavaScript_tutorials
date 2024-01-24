// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = `123abc`
tinderUser.name = `Pushpa`
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: `someOne@gmail.com`,
    fullName : {
        userfullname:{
            firstname: `Jitendra`,
            lastname: `Singh` 
        }
    }
}

//     console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

/*** ways ***/
// const obj4 = {obj1, obj2}
// const obj4 = Object.assign(obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}  // always prefer this way
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "j@gmail.com"
    },
    {
        id: 3,
        email: "p@gmail.com"
    }
]

// console.log(users[0].email); // array always start from 0
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "javascript",
    price: "999",
    courseinstructor: "Mr. Anand"
}

// course.price

const {price} = course
console.log(price);

const {price: paisa} = course // object restructured
console.log(paisa);


// API
/** JSON -> javascript object notation **/