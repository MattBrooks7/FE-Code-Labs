// const a = 1;

// function test() {
//     const b = 2
//     console.log(a, b);
// }

// test();
// console.log(a, b);

// console.log(globalVar)

// import { exportedVar } from "./moduleScript.js";

// console.log(exportedVar);

//======================================================

function test() {
    let c = 2;

    if(true) {
        const c = 3;
    }
    console.log(c);
}

test();