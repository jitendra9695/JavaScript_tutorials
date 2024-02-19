class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        return `${this._password}@Jitendra`
    }

    set password(value){
        this._password = value
    }

    get email(){
        return `${this._email.toUpperCase()}`
    }
    set email(value){
        this._email = value
    }
}

const jitendra = new User("j@jitendra.ai", "abc")
console.log(jitendra.password);
console.log(jitendra.email);