class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        // static make prohibiton in access
        return `123`
    }
}

const jitendra = new User("jitendra")
// console.log(jitendra.createId()) // not accessesible

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
 const jitu = new Teacher("jiten", "jiten@phone.com")
jitu.logMe();
// console.log(jitu.createId()) // not accessesible