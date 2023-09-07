// let myName = 'Matt'

// function printName() {
//     console.log(myName)
// }

// myName = 'Joey'

// printName();

// myName = 'Kate'

// printName();

//======================================================

// function outerFucntion(outerVariable) {
//     const outer2 = 'Hi'
//     return function innerFunction(innerVariable) {
//         console.log('Outer Variable: ' + outerVariable)
//         console.log('Inner Variable: ' + innerVariable)
//         console.log(outer2)
//     }
// }

// const newFunction = outerFucntion('outside');
// newFunction('inner');

//======================================================

function outerFucntion(url) {
    fetch(url).then(() => {
        console.log(url)
    })
}

const newFunction = outerFucntion('outside')
newFunction('inner')