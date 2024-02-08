const user = {
    username: "Jitendra",
    lognCount: 6,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(this.username);
        console.log(this);
    }
}

// console.log(user.lognCount);
// user.getUserDetails()
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = User("jitendra", 12, true)
const usertwo = User("Javascript") // overwrite the value over userone
// console.log(userOne);


const userOne1 = new User("jitendra", 12, true)
const usertwo2 = new User("Javascript") 

// console.log(userOne1); // new keyword create new instance of object everytime
// console.log(usertwo2);

// create new object
// calling constructor return arguements
// this keyword inject
// return 

console.log(userOne1.constructor);