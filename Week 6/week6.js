// LEVEL 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1.
for (let i = 0; i <= 10; i++){
    console.log(i)
}

let i = 0;
while (i <= 10) {
    console.log(i)
    i++
}

let j = 0;
do {
    console.log(j)
    j++;
} while(j <= 10)

// 2.
for (let i = 10; i >= 0; i--) {
    console.log(i)
}

let x = 10;
while (x >= 0) {
    console.log(x)
    x--
}

let y = 10
do {
    console.log(y);
    y--
} while (y >= 0)

// 3.
let n = 5
for (let i = 0; i < n; i++) {
    console.log(i)
}

// 4.
for (let i = 0; i < 8; i++) {
    console.log('#'.repeat(i))
}

// 5.
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}

// 6.
for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`)
}

// 7.
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0)
        console.log(i)
}

// 8.
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1)
        console.log(i)
}

// 9.
for (let j = 2; j <= 100; j++) {
    for (let i = 2; i <= j; i++) {
        if (j % i == 0 && i != j) {
            break;
        } else if (j % i == 0) {
            console.log(j);
        }
    }
}

// 10.
let sum = 0
for (let i = 0; i <= 100; i++) {
    sum = sum + i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

// 11.
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
   if (i % 2 == 0){
    evenSum += i
   } else if (i % 2 == 1) {
    oddSum += i
   }
}
console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`)

// 12.
console.log([evenSum, oddSum])

// 13.
