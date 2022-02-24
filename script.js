alert("I'm invoked!");


alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
    1
    + 2); // this is multiple line code and its working



let admin, fname, lname;
fname = "Guvi";
lname = " geek"
admin = fname + lname;
alert(admin); // "Guvi geek"



let fname, lname, name;
fname = "Guvi";
lname = " geek"
let names = fname + lname;
alert(`hello ${names}`);


// //  Fix the below to alert sum of two numbers

let a = prompt("First number?");
let b = prompt("Second number?");
alert(parseInt(a) + parseInt(b));


// If you run the below scritpt you will get “Code is Blasted” Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
var a = 2 > 12;     // comparation is done with the string type need to change to number type to get diffused
//Don't touch below this
if (a) {
    console.log("Code is Blasted")
}
else {
    console.log("Diffused")
}


// How to get the success in console.

let a = parseInt(prompt("Enter a number?"))    // // need to covert the string from the input
//Don't modify any code below this
if (a) {
    console.log('OMG it works for any number inc 0');
}
else {
    console.log("Success");
}


// // How to get the correct score in console.
let value = parseInt(prompt('How many runs you scored in this ball'));
if (value === 4) {
    console.log("You hit a Four");
} else if (value === 6) {
    console.log("You hit a Six");
} else {
    console.log("I couldn't figure out");
}


//  //Fix the code to welcome the Employee
let login = 'Employee';
let message1 = (
    login == 'Employee' ? 'Greetings' : login == 'Director' ? '' : login == '' ? 'No login' : ''
)

console.log(message1)

// // Fix the code to welcome the boss

// // You cant change the value of the msg
let message;
if (null || 2 || undefined) {
    message = "welcome boss";
}
else {
    message = "Go away";
}
console.log(message);


//Fix the code to welcome the boss
let message;
let lock = 0;
//Dont change any code below this 
if (null || lock || undefined) {
    message = "Go away";
}
else {
    message = "welcome";
}
console.log(message);


// //Fix the code to welcome the boss
let message;
let lock = 0;
//Dont change any code below this
if (lock && " " || undefined) {
    message = "Go away";
}
else {
    message = "welcome";
}
console.log(message);


// //Change the code to print
//You can change only 2 characters
let i = 3;
while (i) {
    console.log(i);
    i--
}


//  // Change the code to print 1 to 10 in 4 lines
for (let num = 1; num <= 10; num++) {
    console.log(num)
}


// // Change the code to print even numbers
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
}

// // Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
}


// // Fix the code to disarm the bomb

let countdown = 100;
while (countdown > 0) {

    if (countdown == 0) {
        console.log("bomb triggered");
    }
    countdown--;
}


//  // Whats the msg printed and why?

var lemein = '0';
var lemeout = 0;
var msg = '';
if (lemein) {
    msg += 'hi';  // this prints because 0 considered as string
}
if (lemeout) {
    msg += 'Hello';
}
console.log(msg);