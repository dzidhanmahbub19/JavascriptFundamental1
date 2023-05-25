////////////////////////////////////////
/*
let js = "amazing" ; 
onsole.log (40+9+23-10);

console.log('jonas');
console.log(23);

let firstName = 'Matilda';
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'jm';
let $function = '27';

let person = 'jonas';
let PI = 3.1415;

let  myFristJob = 'programmer';
let myCurrentJob = 'teacher';

console.log(myFristJob);
*/
/////////////////////////////////////////

////////////////////////////////////////
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log('jonas');

javascriptIsFun = 'jonas';
console.log(javascriptIsFun);

let year;
console.log(typeof year);

year = 1993
console.log(typeof year);

console.log(typeof null);
*/
////////////////////////////////////////

////////////////////////////////////////
/*
let age =  30;
age =  31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'schmedtmann';
console.log(lastName);
*/
////////////////////////////////////////

////////////////////////////////////////
/*
//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'schmedtmann';
console.log(firstName + '' + lastName);

//Assigment Operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x ++; // x + 1 = 101
x --; // x - 1 = 100
x --; // x - 1 = 99
console.log(x);

//comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah) >= 18;

const isFullAge = ageSarah >= 18;

console.log (now - 1991 > now - 2018);
*/
////////////////////////////////////////

////////////////////////////////////////
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log (now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5 // x = y = 10, x = 10 <-this command is precedence from right to left
console.log(x, y);

const average = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, average);
*/
////////////////////////////////////////

////////////////////////////////////////
// #CODINGCHALLENGE1 !!! //

/*
const measureWeight = 'kg';
const measureHeight = 'm';
// DATA 1 //

const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;

// DATA 2 //

const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

// BMI DATA 1 //

const johnBMI1 = johnWeight1 / johnHeight1 ** 2;
const markBMI1 = markWeight1 / markHeight1 ** 2;

// BMI DATA 2 //

const johnBMI2 = johnWeight2 / johnHeight2 ** 2;
const markBMI2 = markWeight2 / markHeight2 ** 2;

// COMPARE'S BMI //

const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;

// TES DATA 1 //

console.log("Data 1");
console.log("Mark's BMI",Math.floor(markBMI1));
console.log("John's BMI",Math.floor(johnBMI1));
if (markHigherBMI1) {
    console.log("Mark's BMI is higher than John's BMI");
} else {
    console.log("John's BMI is higher than Mark's BMI");
}

// TES DATA 2 //

console.log("Data 2");
console.log("Mark's BMI",Math.floor(markBMI2));
console.log("John's BMI",Math.floor(johnBMI2));
if (markHigherBMI2) {
    console.log("Mark's BMI is higher than John's BMI");
} else {
    console.log("John's BMI is higher than Mark's BMI");
}*/
/////////////////////////////////////////////

/////////////////////////////////////////////
/*
const firstName = 'jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a" + (year - birthYear) + "year's old " + job + "!"
console.log(jonas);

const jonasnew = `I'm ${firstName} , a ${year - birthYear} year's old ${job} !`;
console.log(jonasnew); 

console.log(`just a regular string`);
console.log(`string with \n\ multiple \n\ lines`);
console.log(`string with
multiple
lines`);
*/
/////////////////////////////////////////////

/////////////////////////////////////////////
/*
const age = 15
const yearsLeft = 18 - age
const isOldEnough = age >= 18
const birthYear = 2012  ;
let century;

if (isOldEnough) {
    console.log("Sarah can start driving license 🚗")
} else {
    console.log(`Sarah is too young, wait until ${yearsLeft} years :)`)
};

if (birthYear <= 2000) {
    century = 20
}
else {
    century = 21
}

console.log(century);
*/
/////////////////////////////////////////////

/////////////////////////////////////////////
/*
// CODE CHALLENGE 2 !! //

const measureWeight = 'kg';
const measureHeight = 'm';

// DATA 1 //

const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;

// DATA 2 //

const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

// BMI DATA 1 //

const johnBMI1 = johnWeight1 / johnHeight1 ** 2;
const markBMI1 = markWeight1 / markHeight1 ** 2;

// BMI DATA 2 //

const johnBMI2 = johnWeight2 / johnHeight2 ** 2;
const markBMI2 = markWeight2 / markHeight2 ** 2;

// COMPARE'S BMI //

const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;

// TES DATA 1 //

console.log("Data 1");
if (markHigherBMI1) {
    console.log(`Mark's BMI ${Math.floor(markBMI1)} is higher than John's ${Math.floor(johnBMI1)}`);
} else {
    console.log(`John's BMI ${Math.floor(johnBMI1)} is higher than Mark's BMI ${Math.floor(markBMI1)}`);
}

// TES DATA 2 //

console.log("Data 2");
if (markHigherBMI2) {
    console.log(`Mark's BMI ${Math.floor(markBMI2)} is higher than John's ${Math.floor(johnBMI2)}`);
} else {
    console.log(`John's BMI ${Math.floor(johnBMI2)} is higher than Mark's BMI ${Math.floor(markBMI2)}`);
}
*/
/////////////////////////////////////////////

/////////////////////////////////////////////
// Type convertion //
/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coertion //
console.log(`I'm a  `+ 23 +` years old`)
console.log(`23` - `10` - 3);
console.log(`23` / `2`);

let n =  `1` + 1;
n = n - 1;
console.log(n);

console.log(2+3+4+`5`);
console.log(`10`-`4`-`3`- 2 +`5`);
*/
/////////////////////////////////////////////

/////////////////////////////////////////////
// 5 Falsy value in javascript : `0`, `""` (empty string), undefined, null, NaN
/*
console.log(Boolean (0));
console.log(Boolean (undefined));
console.log(Boolean(`jonas`));
console.log(Boolean({}));
console.log(Boolean (''));

const money = 100;

if (money) {
    console.log("Don't spend it at all :)")
}
else {
    console.log("You should get a job!")
};

let height = 0;
if (height) {
    console.log(`YAY height is DEFINED`);
}
else {
    console.log(`Height is UNDEFINED`)
};
*/
/////////////////////////////////////////////

/////////////////////////////////////////////
/*
const age = 18

if (age === 18) {
    console.log(`You just became an Adult :D (strict)`)
};

if (age == 18) {
    console.log(`You just became an Adult :D (loose)`)
};

const favourite = Number(prompt(`What's your favourite number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite  === 23) // `23`(String) == 23(interger) // 22  === 23 -> fakse
{
    console.log(`Cool, 23 is amazing number :D`)
}
else if (favourite === 7) {
    console.log(`7 is also cool number :D`)
}
else if (favourite === 9) {
    console.log(`9 is also cool number :D`)
}
else {
    console.log(`Number is not 23 and 7 and 9`)
};

if(favourite !== 23) {
    console.log(`Why not 23?`)
};
*/
/////////////////////////////////////////////

/////////////////////////////////////////////
/*
const hasDriversLicense = true // A
const hasGoodVision = true // B
const hasDriversLicense2 = true // A
const hasGoodVision2 = false // B

console.log(hasDriversLicense && hasGoodVision); // && is "AND" OPERATORS
console.log(hasDriversLicense2 || hasGoodVision2); // || is "OR" OPERATORS
console.log(!hasDriversLicense); // ! is NEGATION "NOT" OPERATORS

const shouldDRive = hasDriversLicense && hasGoodVision;

if (shouldDRive)  {
    console.log(`Sarah is able to drive`)
} else {
    console.log(`Someone else should drive`)
};

const isTired = true;
const isTired2 = false 
console.log(hasDriversLicense && hasGoodVision && isTired);
console.log(hasDriversLicense2 && hasGoodVision && isTired2);
console.log(hasDriversLicense || hasGoodVision || isTired2);
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired2) {
    console.log(`Sarah is able to drive`);
}
else {
    console.log('Someone else should drive')
};
*/
/////////////////////////////////////////////

/////////////////////////////////////////////

// CODING CHALLENGE 3 !! //

//DATA 1//
const dolphinsData1Score = [96, 108, 108];
let dolphin1Sum = 0;
for (var i = 0; i < dolphinsData1Score.length; i++ ) {
    dolphin1Sum += dolphinsData1Score[i];
};
const dolphinsData1Average = dolphin1Sum / dolphinsData1Score.length;

console.log(`Dolphin's team score is ${dolphinsData1Score}`);
console.log(`Average Dolphin's team score is ${dolphinsData1Average}`);

const koalasData1Score = [88, 91, 110];
let koalas1sum = 0;
for (var i = 0; i < koalasData1Score.length; i++) {
    koalas1sum += koalasData1Score[i]
};
const koalasData1Average = koalas1sum / koalasData1Score.length;

console.log(`Koala's team score is ${koalasData1Score}`);
console.log(`Average Koala's team score is ${Math.floor(koalasData1Average)}`);

if(dolphinsData1Average > koalasData1Average) {
    console.log(`Dolphin's team is the highest average score. Dolphin's team win!!`)
}
else if(dolphinsData1Average === koalasData1Average) {
    console.log(`Dolphin's and Koala's team is have same score. Draw!!`)
}
else {
    console.log(`Koala's team is the highest average score. Koala's team win!!`)
};


console.log(`BONUS DATA 1`);// BONUS DATA 1 //
const dolphinsBonusData1Score = [97, 112, 101];
let dolphinsBonusData1Sum = 0;

for (let i = 0; i < dolphinsBonusData1Score.length; i++) {
  if (dolphinsBonusData1Score[i] > 100) {
    dolphinsBonusData1Sum += dolphinsBonusData1Score[i];
  }
}

console.log("Total skor tim Dolphins: " + dolphinsBonusData1Sum);

/*const dolphinsBonusData1Score = [97, 112, 101];
let dolphinsBonusData1Sum = 0;
for (var i = 0; i < dolphinsBonusData1Score.length; i ++) {
    if (dolphinsBonusData1Score[i] > 100) {
        dolphinsBonusData1Sum += dolphinsBonusData1Score[i]};
};
const dolphinsBonusData1Average = dolphinsBonusData1Sum / dolphinsData1Score.length > 100;
console.log(`Dolphin's team score is ${dolphinsBonusData1Score}`)
console.log(`Dolphin's team score that allowed is ${dolphinsBonusData1Score.length > 100}`);
console.log(`Dolphin's team average score is ${dolphinsBonusData1Average}`);
*/
/////////////////////////////////////////////
