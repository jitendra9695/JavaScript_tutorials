const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    // console.log(key);
    // console.log(myObject[key]);
}

const programming = ["js", "py", "java", "cpp", "rb"]

for(const key in programming){ //in array key start from 0 
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN', "India")

// for(const key in map){ // loop not possible
//     // console.log(key);// map are not iteratable , not reapeat it's value
// }

