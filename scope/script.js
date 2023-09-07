function statement() {
let firstName = 'John';
let lastName = 'Smith';
let age = 25;
let country = 'England';

console.log(`${firstName} ${lastName} is ${age} years old, and lives in ${country}`)
}

let firstName = 'James';

statement();

let game = 'Sonic';

if(true) {
    let game = 'Mario';
    console.log(game);
}

console.log(game);

// let game = 'Sonic'; // global variable

// console.log(game);

// function title() {
//     console.log(`${game}`);
// }

// title();

// if(true) {
//     console.log(`${game}`);
// }

//====================================================

// function a() {
//     let game = 'Sonic'; // Local Variable / Functional Scope
//     console.log(game);
// }

// a();

// if(true) {
//     let game = 'Mario';
//     console.log(game);
// }

//=====================================================
// if(true) {
//     let greeting = 'hello';
// }

// console.log(greeting);

//======================================================
// let x = 10;
// console.log(x);

// if(true) {
//     let x = 2;
//     console.log(x);
// }

// console.log(x);