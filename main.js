//string methods & properties
// console.log( firstName.toLocaleUpperCase() );
// console.log( firstName.toLocaleLowerCase() );




// Concatination

// const firstName = "John";

// const lastName = "Doe";

// const age = 30;

// const fullName = "My Name is " + firstName + " " + lastName + " "+ "i am "  + age + " " + "years old.";

// const fullName2 = `My Name is ${firstName} ${lastName} i am ${age} years old.`;

// console.log(fullName);
// console.log(fullName2);




//ASSIGNMENT FOR WEEK 3
const firstName = "Aishat";// my first name
const lastName = "Omolara";// my last name
const age = 28;// my age
const country = "Nigeria";// my country
const yourSelf = `My name is ${firstName} ${lastName}. I am ${age} years old and I am from ${country}.`;// my introduction
console.log(yourSelf);

const quote = "The only limit to our realization of tomorrow is our doubts of today. Life is too Short to be serious all the time. So, if you can't laugh at yourself, call me and I will laugh at you.";// my favourite quote

console.log(quote.toLocaleUpperCase());// convert the quote to uppercase

console.log(quote.toLocaleLowerCase());// convert the quote to lowercase

const word = "hello world";// a word to be reversed
const reverseWord = word.split("").reverse().join("");// reverse the word
console.log(reverseWord);// display the reversed word

const price1 = 10 // price of first item
const price2 = 20 // price of second item
const price3 = 30 // price of third item
const totalPrice = price1 + price2 + price3 // total price of all items
const display = `The total price of the three items is $${totalPrice}` // display the total price
console.log(display);

const num1 = 5; // first number
const num2 = 10; // second number
const num3 = 15; // third number
const num4 = 20; // fourth number
const num5 = 25; // fifth number
const average = (num1 + num2 + num3 + num4 + num5) / 5; // calculate the average
const displayAverage = `The average of the five numbers is ${average}`; // display the average

console.log(displayAverage);

const favoriteFood = ["Jollof Rice", "Pasta", "Pizza", "Fried Rice", "Egusi Soup"] // array of favorite foods
console.log("first food",favoriteFood[0] ); // display the first array
console.log("last food", favoriteFood[4] ); // display the last array


console.log(favoriteFood.unshift("Beans and bread")); // add an item to the beginning of the array
console.log(favoriteFood.push("Efo Riro and Pounded Yam")); // add an item to the end of the array
console.log(favoriteFood); // display the updated array

const jssOne = ["david", "john", "james", "joseph", "joshua", "jason", "justin", "julius", "julianna", "jessica"]
const jssTwo = ["Aishat", "Omolara", "Oluwatobi", "Oluwaseun", "Oluwatimilehin", "Oluwafemi", "Oluwakemi", "Oluwatosin", "Oluwaseun", "Oluwatoyin"]
const jssThree = ["Ayoola", "olabosi", "Olalekan", "lateef", "Yusuf", "Kikky", "Omolola", "Kaothar", "Oladele", "Oluwatobi"]
console.log(jssOne);
console.log(jssTwo);
console.log(jssThree);








//control flows(loops)
//while loop
//for loop
//1. when you want it to start.
//2. when you want it to end.
//3. how you want it to increment or decrement.

let i = 0; // initialization


//WEEK FOUR  ASSIGNMENT
const score = 180; // score of the student

if( score >= 180 && score <= 200) { 
    console.log("Passed");
}
else {
    console.log("Failed"); 
}

const my_age = 18;

if( my_age == 18 || my_age >= 18) {
    console.log("You are eligible to vote.");
}
 else {
    console.log("You are not eligible to vote.");
}

const my_name = "Ayoola";
const my_score = 90;

if( my_score >= 90) {
    console.log("Exellent");
}
else if( my_score >=75){
    console.log("Good");
}
else if( my_score >= 50){
    console.log("Average");
}
else {
    console.log("Fail");
}

const hasID = true;
const isAbove18 = true;

if( hasID && isAbove18) {
    console.log("Access Granted");
}
else {
    console.log("Access Denied");
}

let scores = [90, 85, 78, 92, 88, 59];

for (let i = 0; i< scores.length; i++){
    if (scores[i] > 50){
        console.log("Pass");
    } else{
        console.log("Fail");
    }
}
 const math = 50;
 const english = 50;

 const calculateGrade = (math, english) =>{
    if (math && english >= 50){
        console.log("Yes");
    } else{
        console.log("No");
    }
 }
    calculateGrade(math, english);

    const email = "aishet123@gmail.com";
    const password = "12345678";

    if(email && password){
        console.log("Login Successful");
    }
    else{
        console.log("Login Failed");
    }

    const userName = "";
    const password_me = "";

    if (userName == "" || password_me == ""){
        console.log("Invalid Input");
    } else{
        console.log("Valid Input");
    }

    const hoursWorked = (hours) => hours >= 40 ? "Full-time" : "Part-time";
    console.log(hoursWorked(45)); // Full-time
    console.log(hoursWorked(20)); // Part-time
    
    const isNumber = (number1, number2) => {
        return number1 + number2

    }
    console.log(isNumber(5, 10)); // 15

