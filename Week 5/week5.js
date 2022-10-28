// import {countries} from "./countries.js"
// import {webTechs} from "./web_techs.js"
// Level 1
// 1
let emptyArr = [];

// 2
let food = ["Rice", "Beans", "Yam", "Garri", "Bread"];

// 3
console.log(food.length);

// 4
console.log(food[0]);
let midElement = Math.floor(food.length/2)
console.log(food[midElement]);
let lastElement = food.length - 1
console.log(food[lastElement])

// 5.
let mixedDataTypes = ['Rain', 56, false, 'Pineapple', 'Apple', 12]

// 6.
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7.
console.log(itCompanies);

// 8.
console.log(itCompanies.length)

// 9.
console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length/2)])
console.log(itCompanies[itCompanies.length - 1])

// 10.
for(i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

// 11.
for(i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase())
}

// 12.
let firstSix = itCompanies.slice(0,6).join(', ');
let lastCompany = itCompanies.slice(6,7);
lastCompany.toString();
console.log(`${firstSix} and ${lastCompany} are big IT companies.`);

// 13.
if (itCompanies.includes('Athena')){
    console.log('Athena');
  } else {
    console.log('company is not found');
  }

// 14.
let filteredCompanies = []
 for (let com of itCompanies){
    let company = com.match(/o/gi)
    console.log(company)
    if (company == null){
      filteredCompanies.push(com);
    } else if (company.length == 1 ){
      filteredCompanies.push(com);
    }
 }
 console.log(filteredCompanies);

// 15.
console.log(itCompanies.sort());

// 16.
console.log(itCompanies.reverse());

// 17.
console.log(itCompanies.slice(0, 3));

// 18.
console.log(itCompanies.slice(-3));

// 19.
let mid = itCompanies.length % 2;
let index = Math.floor(itCompanies.length/2);
if (mid == 1) {
  console.log(itCompanies.slice(index, index + 1));
} else if (mid == 0) {
  console.log(itCompanies.slice(index - 1, index + 1));
}

// 20.
console.log(itCompanies.shift());
console.log(itCompanies)

// 21.
mid = itCompanies.length % 2;
if(mid == 1){
  console.log(itCompanies.splice(index, 1));
}else if (mid == 0){
  console.log(itCompanies.splice(index - 1, 2)); 
}

// 22.
console.log(itCompanies.pop());

// 23.
console.log(itCompanies.splice());

// Level 2
// 2.
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[.,]/gi, "").split(' ')
console.log(words)
console.log(words.length)

// 3.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.includes('Meat') ? console.log('Meat already exists') : shoppingCart.unshift('Meat');
console.log(shoppingCart);
shoppingCart.includes('Sugar') ? console.log('Sugar already exists') : shoppingCart.push('Sugar')
console.log(shoppingCart)

let isAllergicToHoney = false;
isAllergicToHoney ? console.log(shoppingCart.splice(4,1)) : console.log('Not Allergic to honey');

let teaIndex = shoppingCart.indexOf('Tea');
shoppingCart[teaIndex] = 'Greeen Tea';
console.log(shoppingCart);

// 4.
countries.includes('Ethopia') ? console.log(countries[countries.indexOf('Ethopia')].toUpperCase()) : countries.push('Ethopia')

// // 5.
webTechs.includes('Sass') ? console.log(`${webTechs[webTechs.indexOf('Sass')]} is a css preprocess`) : webTechs.push('Sass')
console.log(webTechs)

// 6.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack);

// Level 3
// 1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort());

let median;
let medianIndex = Math.floor((ages.length) / 2)
console.log(medianIndex)
if (ages.length % 2 == 1){
    median = ages[medianIndex]
} else if (ages.length % 2 == 0){
    median = (ages[(medianIndex) - 1] + ages[(medianIndex) + 1]) / 2
}
console.log(median);

let sum = 0;
for (i = 0; i < ages.length; i++){
    sum += ages[i];
}

let average = sum / ages.length;
console.log(average);

let range = ages[ages.length] - ages[0]
console.log(range)

