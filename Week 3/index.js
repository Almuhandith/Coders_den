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

// Level 2
// 1.
// let base =  prompt('Enter base', '');
// let height = prompt('Enter height', '');
// let areaOfTriangle = 0.5 * base * height;
// console.log(areaOfTriangle);
// alert(`The area of your triangle is ${areaOfTriangle}`);

// // 2.
// let a = prompt('Enter side a', '');
// let b = prompt('Enter side b', '');
// let c = prompt('Enter side c', '');
// let perimeterOfTriangle = a + b + c;
// console.log(perimeterOfTriangle);
// alert(`The perimeter of your triangle is ${perimeterOfTriangle}`);

// // 3.
// let length = prompt('What is the length of your rectangle?', '');
// let width =  prompt('What is the width of your rectangle?', '');
// let areaOfRectangle = length * width;
// let perimeterOfRectangle = 2 * (length + width);
// console.log(areaOfRectangle);
// console.log(perimeterOfRectangle);
// alert(`The area of your rectangle is ${areaOfRectangle} and its perimeter is ${perimeterOfRectangle}`);

// // 4.
// const pi = 3.14;
// let radius = prompt('What is the radius of your circle?', '');
// let areaOfCircle = pi * radius * radius
// let circumferenceOfCircle  = 2 * pi * radius
// console.log(areaOfCircle);
// console.log(circumferenceOfCircle);
// alert(`The area of your circle is ${areaOfCircle} and its circumference is ${circumferenceOfCircle}`);

// 5.

let linearSlopeCalc = (y, m, c) => {
    let slope = m/y;
    let yIntercept = c/y;
    let xIntercept = -c/m;

    return {
        'slope': slope,
        'yIntercept': yIntercept,
        'xIntercept': xIntercept,
        'statement': `The slope of the line is ${slope}, its y-intercept is ${yIntercept} and its x-intercept is ${xIntercept}.`
    }
}
const slope1 = linearSlopeCalc(1, 2, -2).slope;
console.log(slope1);

// 6.
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
const slope2 = (y2 - y1) / (x2 - x1);
console.log(slope2);

// 7.
let compareSlopes = (a, b) => {
    if (Math.abs(a) < Math.abs(b)) {
        return "Line 1 is steeper than line 2";
    } else if (Math.abs(a) > Math.abs(b)) {
        return "Line 2 is steeper than line 1";
    } else {
        return "Both lines have the same slope";
    }
}

const slopesComparison = compareSlopes(slope1, slope2);
console.log(slopesComparison);

// 8.
function quad(x) {
    return x**2 + (6 * x) + 9;
}

console.log(quad(0));
console.log(quad(9));
console.log(quad(-3));

// 9.
