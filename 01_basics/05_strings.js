const name = "jitendra"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// string initialization method 2

const gameName = new String('jtitendrasingh') //using this initialization we can use string methods

console.log(gameName[0]);// key value, not an array
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) // 0, 1, 2, 3
console.log(newString);

const anotherString = gameName.slice(-14, 4) // strat from last then first 14, 1, 2
console.log(anotherString);

const newStringOne = "    jitendra     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://jitendra.com/jitu%20singh"

console.log(url.replace('%20', '@gmail.com'));
console.log(url.includes('ritu')); // boolean return

console.log(gameName.split('tendra')); // split in array form based on 'tendra' character