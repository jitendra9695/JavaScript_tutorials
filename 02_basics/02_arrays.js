const marvel_heroes = ["thor", "IronMan", "SpiderMan"]
const dc_heroes = ["Black Adam", "Flash", "SuperMan"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); // not adding properly
// console.log(marvel_heroes[3][1]);

// 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Jitendra"));
console.log(Array.from("Jitendra"));
console.log(Array.from({name: "Jitendra"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));