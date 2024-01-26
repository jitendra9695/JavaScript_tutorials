// in most of the cases promises are only consume
// we create also but most of the cases we consume promise 
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
// after calling resolve() resolve in .then() executed
    }, 1000) 
})

// .then() connected to resolve directly
// .then() give return a callback func
promiseOne.then(function(){
    console.log('Promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Jitendra", email: "jitendra@gmail.com", })
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username:"jitendra", password:"1234"
            })
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally( ()=>{ 
    console.log("The promise is either resolved or rejected");
})

// .finally work as default action