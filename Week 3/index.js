// 1.
let firstName = "John";
let lastName = "Ray";
let country = "Nigeria";
let city = "Ilorin";
let age = 30;
let isMarried = false;
let year = 2022;

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

// 2.
console.log(typeof('10') == typeof(10));

// 3.
console.log(parseInt('9.8') == 10);

// 4.
// i.
console.log(Boolean(firstName));
console.log(Boolean(lastName));
console.log(Boolean(age));

// ii.
let name = null
console.log(Boolean(name));
let time = ""
console.log(Boolean(time));
let place;
console.log(Boolean(place));

// 5.
4 > 3;  // true
4 >= 3; // true
4 < 3; // false
4 <= 3;  // false 
4 == 4;  // true
4 === 4;  // true
4 != 4;   // false
4 !== 4   // false
4 != '4'  // false
4 == '4'  // true
4 === '4' // false

let python = "Python";
let jargon = "Jargon";

console.log(python.length != jargon.length);

// 6.
4 > 3 && 10 < 12    // true
4 > 3 && 10 > 12    // false
4 > 3 || 10 < 12    // true
4 > 3 || 10 > 12    // true
!(4 > 3)            // false
!(4 < 3)            // true
!(false)            // true
!(4 > 3 && 10 < 12) // false
!(4 > 3 && 10 > 12) // true
!(4 === '4')        // true

// There is no 'on' in both dragon and python
let dragon = "dragon";
python = "Python";

console.log(!(python.includes('on') && dragon.includes('on')));

// 7.
const now = new Date
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime() / 1000);

let b = prompt('Enter Base: ');
let h = prompt('Enter Height: ');