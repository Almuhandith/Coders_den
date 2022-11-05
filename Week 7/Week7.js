// EXERCISE 1
// LEVEL 1
let name = 'Raji Abdulsamad'
function fullName(name) {
    return name
}
console.log(fullName(name))

// 2.
function fullName2(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullName2('Abdulsamad', 'Raji'))

// 3.
function addNumbers(x, y) {
    return x + y;
}

console.log(addNumbers(2, 3));

// 4.
function areaOfRectangle(length, width) {
    return length * width;
}

console.log(areaOfRectangle(5, 6))

// 5.
function perimeterOfRectangle (length, width) {
    return 2 * (length + width);
}

console.log(perimeterOfRectangle(2,3));

// 6.
function volumeOfRectPrism(length, width, height) {
    return length * width * height;
}

console.log(volumeOfRectPrism(2,3,5))

// 7.
function areaOfCircle(r){
    return Math.PI * r * r;
}

console.log(areaOfCircle(3))

// 8.
function circumOfCircle(r) {
    return 2 * Math.PI * r;
}

console.log(circumOfCircle(4))

// 9.
function density(mass, volume) {
    return mass / volume;
}
console.log(density(24, 8))

// 10.
function speed (distance, time) {
    return distance / time;
}

console.log(speed(2000, 50))

// 11.
const gravity = 9.81
function weight(mass) {
    return mass * gravity + ' N'
}

console.log(weight(34))

// 12.
function convertCelsiusToFahrenheit(oC) {
    return (oC * 9/5) + 32;
}

console.log(convertCelsiusToFahrenheit(35))

// 13.
function BMI(weight, height) {
    let bmi = weight / height ** 2;
    if (bmi < 18.5){
        return "Underweight: BMI is less than 18.5"
    } else if (bmi == 18.5 || bmi < 25){
        return "Normal weight: BMI is 18.5 to 24.9"
    } else if (bmi == 25 ||bmi < 30){
        return "Overweight: BMI is 25 to 29.9"
    } else {
        return "Obese: BMI is 30 or more"
    }
}

console.log(BMI(200,3))


// let BMI2 = (weight, height) => weight / height ** 2 

// 14.
function checkSeason(month) {
    switch(month.toLowerCase()) {
        case 'march':
        case 'april':
        case 'may':
            return "Spring";
            break;
        case 'june':
        case 'july':
        case 'august':
            return "Summer";
            break;
        case 'september':
        case 'october':
        case 'november':
            return "Autumn";
            break;
        case 'december':
        case 'january':
        case 'february':
            return "Winter";
            break;
        default:
            return "Month doesn't exist"
    }
}

console.log(checkSeason('August'))

// 15.
let findMax = (a,b,c) => a > b && a > c ? a : b > a && b > c ? b : c;

// function findMax (a,b,c) {
//     if (a > b && a > c)
//         return a;
//     else if (b > a && b > c)
//         return b;
//     else
//         return c;
// }

console.log(findMax(5, 22, 7))

// LEVEL 2
// 1.
function solveLinEquation() {
    return ;
}

// 2.
let solveQuadEquation = (a, b, c) => {
    let x1 = (-b + Math.sqrt(b**2 - 4*a*c)) / 2*a
    let x2 = (-b - Math.sqrt(b**2 - 4*a*c)) / 2*a
    
    let x = {x1, x2}
    return (`The value of x is ${x1} or ${x2}`)
}

console.log(solveQuadEquation(1, 4, 4))
console.log(solveQuadEquation(1, -1, -2)) 
console.log(solveQuadEquation(1, 7, 12)) 
console.log(solveQuadEquation(1, 0, -4))
console.log(solveQuadEquation(1, -1, 0))

// 3.
let printArray = (arr) => {
    for (let item of arr){
        console.log(item);
    }
}

let array = [1, 2, 3, "I am here"]
console.log(printArray(array))

// 4.
const showDateTime = () => {
    let today = new Date();
    return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`;
  }
  console.log(showDateTime());

  // 5.
  let swapValues = (x, y) => {
    return `x => ${y}, y => ${x}`;
  }

  console.log(swapValues(3,4))
  console.log(swapValues(4, 5))

  // 6.
  let reverseArray = (array) => {
    let newArr = [];
    for (let item of array){
        newArr.unshift(item)
    }
    return newArr;
  }

  console.log(reverseArray([1, 2, 3, 4, 5]))
  console.log(reverseArray(['A', 'B', 'C']))

  // 7.
  let capitalizeArray = (arr) => {
    return arr.map((item) => item.toUpperCase())
  }
  let array1 = ["rajah", "ebuka", "tamara", "pauline", "giyu"];
  console.log(capitalizeArray(array1));

// 8.
let arr2 = [];
let addItem = (item) => {
    arr2.push(item)
    return arr2;
}

console.log(addItem("food"))
console.log(addItem("Money"))
console.log(addItem("Cars"))

// 9.
const removeItem = (index) => {
    arr2.splice(index, 1);
    return arr2;
  }

console.log(removeItem(1))
console.log(removeItem(0))

// 10.
const sumOfNumbers = (number) => {
    let sum = 0;
    for(let i = 0; i <= number;  i++){
      sum += i;
    }
    return sum;
  }
  console.log(sumOfNumbers(10));

// 11.
const sumOfOdds = (number) => {
    let sum = 0;
    for(let i = 0; i <= number;  i++){
        if (i % 2 == 1){
            sum += i;
        }
    }
    return sum;
  }
  console.log(sumOfOdds(10));

// 12.
const sumOfEven = (number) => {
    let sum = 0;
    for(let i = 0; i <= number;  i++){
        if (i % 2 == 0){
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfEven(10));

// 13.
let odds = []
let even = []
const evensAndOdds = (number)=> {
  for(let i = 0; i <= number;  i++){
    if ( i % 2 === 0){
      even.push(number[i]);
    }
    else if( i % 2=== 1 ){
      odds.push(number[i]);
    }
  }
  return `The number of odds are ${odds.length}. The number of evens are ${even.length}`;
}
console.log(evensAndOdds(100));

// 14.
function sumOfArgs() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }

console.log(sumOfArgs())

const sumOfNumbers2 = (...args) => {
    let sum = 0
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }
    return sum
}

console.log(sumOfNumbers2(10,4,5))

// 15.
let randomUserIp = ()  =>{
    let userIp = (Math.floor(Math.random() * 256))+"."+(Math.floor(Math.random() * 256))+"."+(Math.floor(Math.random() * 256))+"."+(Math.floor(Math.random() * 256));
    return userIp;
}
console.log(randomUserIp());

// 16.
let address = [];
const randomMacAddress = () => { 
  for(let r = 0; r <= 5; r++){
    address.push((Math.floor(Math.random() * 10000).toString(16)).slice(-2).toUpperCase());
  }
  let [a,b,c,d,e,f] = address;
  return `${a}:${b}:${c}:${d}:${e}:${f}`;
}
console.log(randomMacAddress());

// 17.
const randomHexNumberGenerator = () => {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16)}`
}

console.log(randomHexNumberGenerator())

// 18.
const userIdGenerator = () => {
    let letter = [], num = [] , arr = [], result = ''
    for (let i = 65; i< 90; i++)
        letter.push(String.fromCharCode(i));
    for (let i = 0; i < 9; i++)
        num.push(i)
    arr.push(letter, num, letter.join('').toLowerCase())
    arr = arr.join().split(',').join('')
    for (let i = 0; i <= 6; i++)
        result += arr[(Math.floor(Math.random() * arr.length))]
    
    return result
}


console.log(userIdGenerator());

// EXERCISE 2
// 1.


// 2.
const rgbColorGenerator = () => {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

console.log(rgbColorGenerator())

// 3.
const arrayOfHexaColors = (n) => {
    let hexcolors = [];
    let i = 0
    while(i < n){
        hexcolors.push(`#${Math.floor(Math.random() * 0x1000000).toString(16)}`)
        i++;
      }
     return hexcolors;
}
console.log(arrayOfHexaColors(4));

// 4.
const arrayOfRgbColors = (n) => {
    let rgbcolors = [];
    let i = 0;
    while(i < n){
        rgbcolors.push(`rgb(${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)})`);
        i++;
    }
    return rgbcolors;
}
console.log(arrayOfRgbColors(2));

// 5.
