// for of

// ["", "", ""]  array of strings
// [{}, {}, {}] array os objects

const arr = [1, 5, 4, 3, 7, 8, 9]
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!"
for(const greet of greeting){
    // console.log(greet);
}

// Map
//the map ob/ject holds the value pairs and remembers the original insertion order of the keys.
// doesn't repeat values

 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States Of America")
 map.set('Fr', "France")
 map.set('IN', "India")

//  console.log(map)

 for(const [key, values] of map){
    console.log(key, ":-", values);

 }

 const myObject = {
    game1: "NEED FOR SPEED",
    game2: "GTA Vice City"
 }

//  for(const [key, values] of myObject){ // object is not iterable
//     console.log(key, ":-", values);
//  }