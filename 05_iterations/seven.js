const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumbers.map( (num) => {
//     return num+10
// })

// chaining
const newNums = myNumbers
                   .map( (num) => num*10) //[1*10, ------, 10*10]
                   .map((num) => num +1) // [10+1, -----, 100+1]
                   .filter((num) => num >=40 ) //[ 41, 51, ----, 101 ]

        console.log(newNums);