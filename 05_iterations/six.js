const coding = ["js", "ruby", "java", "python", "cpp"]

const value = coding.forEach( (item) => {
    // console.log(item);
    return item
})

// console.log(value)

// .filter same as .forEach but .filter return values
const myNums = [ 2, 3, 4, 5, 6, 7, 8, 9 ,10]

//.filter return values-> explicitly and implicitly
const newNums = myNums.filter( (num) => {
    return num>4 // explicity return
})

const newNums2 =  myNums.filter( (num)=> num>4 )
// console.log(newNums2)

// console.log(newNums);

const newNums3 =[]

myNums.forEach( (num) => {
    if(num>4){
        newNums3.push(num)
    }
})

// console.log(newNums3);

const book = [
    {
        title: "Book One",
        price: 200,
        genre: "Fiction"
    },
    {
        title: "Book Two",
        price: 400,
        genre: "History"
    },
    {
        title: "Book Three",
        price: 1200,
        genre: "History"
    },
    {
        title: "Book Four",
        price: 1400,
        genre: "Fiction"
    }
]

let bookStore = book.filter( (Kitaab) => Kitaab.price >=1000)
console.log(bookStore);

bookStore = book.filter( (k)=>{
    return k.price>=1000 && k.genre == "History"
})

console.log(bookStore);