const arr = [0, 1, 2, 3, 4, 5]
const Heroes = ["Shaktiman", "naagraj"]

const arr2 = new Array(1, 2, 3, 4)
// console.log(arr);
// console.log(arr[1]);

// console.log(arr2);
// console.log(arr2[1]);

// Array Mathods //

// arr.push(6)
// arr.push(7)
// arr.pop()

// arr.unshift(9)
// arr.shift()

// console.log(arr);

// console.log(arr.includes(9));
// console.log(arr.indexOf(3));
// console.log(arr.indexOf(9)); // -1 i.e element not in an array

// const newarr = arr.join()

// console.log(arr);
// console.log(newarr);

// slice v/s splice

console.log("original array ", arr);
const arrn1 = arr.slice(1,3) // include 1,2 (3 not include) and it can't maipulate original array

console.log("after slice operation ",arr);
console.log("slice ",arrn1)


const arrn2 = arr.splice(1,3) // inlude 1,,2,3 and manipulate the original array element 1,2,3 pop out from original array
console.log("after splice operation", arr);
console.log("splice ", arrn2);