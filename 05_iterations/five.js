const coding = ["js", "ruby", "java", "python", "cpp"]
// .forEach(callbackfunction)
// callbackfn doesn't have name
// coding.forEach(function (val) {
//     // console.log(val);
// })

// coding.forEach( (i) => {
//     // console.log(i);
// })

// // pass function reference in forEach Loop

// function printMe(item){
//     console.log(item);
// }

// // coding.forEach(printMe) // only pass the reference not execute

// const p = (i) => {
//     console.log(i);
// }
// coding.forEach(p) // only pass the reference not execute

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr);
})

// [{}, {}, {}]

const myCoding = [
    {
        languageName: "javascript",
        extension: ".js"
    },
    {
        languageName: "Python",
        extension: ".py"
    },
    {
        languageName: "C++",
        extension: ".cpp"
    }
]

myCoding.forEach( (i) => {
    console.log(i.languageName, i.extension);
})