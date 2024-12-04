// // // // // // // // // // var x = 10;
// // // // // // // // // // console.log(x)

// // // // // // // // // // const person = {   //object
// // // // // // // // // //     name:"logesh",
// // // // // // // // // //     age:18
// // // // // // // // // // }

// // // // // // // // // // person.name = "Naveen";
// // // // // // // // // // console.log(person);

// // // // // // // // // const cars = ["BMW", "Maruti"];  //Push - should be work in the const list - if that is premetive value(single value), That shouldn't be change
// // // // // // // // // cars.push('Audi')
// // // // // // // // // console.log(cars)

// // // // // // // // function codeHoist() {  //Hoisting
// // // // // // // //     a = 10;
// // // // // // // //     let b = 50;
// // // // // // // // }

// // // // // // // // codeHoist(); 
// // // // // // // // console.log(a);

// // // // // // // const name = 'Naveen MV';   //GLobal Scope

// // // // // // // function justFunctionName() {
// // // // // // //     console.log(name);  // print the value, when the function is calling
// // // // // // // }

// // // // // // // console.log(name); // print the name value
// // // // // // // justFunctionName(); // call the function

// // // // // // const name2 = 'Naveen MV';   //Function Scope

// // // // // // function justFunctionName() {
// // // // // //     const name2 = 'John is a developer'
// // // // // //     console.log(name2);  // print the value, when the function is calling
// // // // // // }

// // // // // // console.log(name2); // print the name value
// // // // // // justFunctionName(); // call the function


// // // // // const name3 = 'Naveen MV';   //Block Scope

// // // // // function justFunctionName() {
// // // // //     const name3 = 'John is a developer'
// // // // //     if(true) {
// // // // //         const name3 = "He is good Boy"
// // // // //         console.log(name3);
// // // // //     }
// // // // //     console.log(name3); 
// // // // // }

// // // // // console.log(name3); // print the name value
// // // // // justFunctionName(); // call the function


// // // // function justFunctionName() {   //Scope define by variable also.
// // // //     // const name4 = 'John is a developer'
// // // //     if(true) {
// // // //         var name4 = "He is good Boy"
// // // //     }
// // // //     console.log(name4); 
// // // // }
// // // // justFunctionName(); // call the function


// // // console.log(42 + '')
// // // console.log(42 + '0')
// // // console.log(42 - '7')

// // const a = 42;  //Logical Operator
// // const b = 'Naveen MV';
// // const c = null;

// // console.log(a||b);
// // console.log(c||b);
// // console.log(a&&b);
// // console.log(a&&c);

// function greet(name6){  //and Operator
//     console.log(`Hello, ${name6 || 'Visitor'}!`);
// }
// greet('Naveen');

console.log(42 == "42"); // check the value
console.log(42 === "42"); // check the value and data type