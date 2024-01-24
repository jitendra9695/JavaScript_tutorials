const myNums = [1, 2, 3, 4, 5, 6]

// const total = myNums.reduce( function (acc, currvalue) {
//     console.log(`accumulator ${acc} and current value ${currvalue}`);
//     return acc + currvalue
// }, 0)

// in arrow function
// const total = myNums.reduce( (acc, currvalue) => acc + currvalue, 0)

// console.log(total);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "PY Course",
        price: 999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price , 0)

console.log(priceToPay);