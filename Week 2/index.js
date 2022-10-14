// Exercise: Level 1
// 1.
let challenge = '30 Days Of JavaScript'

// 2.
console.log(challenge);

// 3.
console.log(challenge.length);

// 4.
console.log(challenge.toUpperCase());

// 5.
console.log(challenge.toLowerCase());

// 6.
console.log(challenge.substring(0, 2));

// 7.
console.log(challenge.slice(3));

// 8.
console.log(challenge.includes('Script'));

// 9.
console.log(challenge.split());

// 10.
console.log(challenge.split(' '));

// 11.
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));

// 12.
console.log(challenge.replace('JavaScript', 'Python'));

// 13.
console.log(challenge.charAt(15));

// 14.
console.log(challenge.charCodeAt(11));

// 15.
console.log(challenge.indexOf('a'));

// 16.
console.log(challenge.lastIndexOf('a'));

// 17.
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'));

// 18.
console.log(sentence.lastIndexOf('because'));

// 19.
console.log(sentence.search('because'));

// 20.
console.log(challenge.trim());

// 21.
console.log(challenge.startsWith(3));

// 22.
console.log(challenge.endsWith('t'));

// 23.
console.log(challenge.match(/a/g));

// 24.
console.log('30 Days of'.concat(' JavaScript'));

// 25.
console.log(challenge.repeat(2));

// Exercise: Level 2
// 1.
let quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."

console.log(quote);

// 2.
let Teresa = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`

console.log(Teresa);

// 3.
console.log(typeof('10') === typeof(10));
console.log(typeof('10') === typeof(toString(10)));

// 4.
console.log(parseFloat(9.8) == 10)
console.log(Math.ceil(9.8) == 10);

// 5.
console.log('python'.includes('on') && 'jargon'.includes('on'));

// 6.
console.log('I hope this course is not full of jargon'.includes('jargon'));

// 7.
console.log(Math.floor(Math.random() * 101));

// 8.
console.log(50 + Math.floor(Math.random() * 51));

// 9.
console.log(Math.floor(Math.random() * 256));

// 10.
let javascript = 'JavaScript';
console.log(javascript.charAt(Math.floor(Math.random() * (javascript.length + 1))));

// 11.
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");

// 12.
let because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.substring(31, 54));

// Exercise: level 3
// 1.
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(love.match(/love/gi).length);

// 2.
console.log(because.match(/because/gi).length);

// 3.
const sentence1 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const cleanedSentence = sentence1.replace(/[@#%&;!$]/g, "");
console.log(cleanedSentence)

// 4.
const income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let [monthlySalary, annualBonus, monthlyCourse] = income.match(/\d+/g);
[monthlySalary, annualBonus, monthlyCourse] = [parseInt(monthlySalary), parseInt(annualBonus), parseInt(monthlyCourse)];
console.log([monthlySalary, annualBonus, monthlyCourse]);
const annualIncome = (monthlySalary * 12) + annualBonus + (monthlyCourse * 12);
console.log(annualIncome);