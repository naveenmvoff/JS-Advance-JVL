// // // // // // // /*06-12-2024*/
// // // // // // // var creatures = [                                  //filter in object
// // // // // // //     {name:"Shark", habitat:"Ocean"},
// // // // // // //     {name:"Whale", habitat:"Ocean"},
// // // // // // //     {name:"Lion", habitat:"Savanna"},
// // // // // // //     {name:"Monkey", habitat:"Jungle"}
// // // // // // // ];

// // // // // // // const occenNames = creatures.filter((creatures) => {return creatures.habitat == "Ocean"});
// // // // // // // console.log(occenNames);


// // // // // // let numbers = [10,20,30,40,50];  //use to find the single element

// // // // // // b = numbers.find((ele) => {
// // // // // //         a = ele > 20;
// // // // // //         return a;
// // // // // //     });
// // // // // // console.log(b);


// // // // // let numbers1 = [10,20,30,40,50];  //use to confirm the value is true or false
// // // // // b1 = numbers1.some((ele1) => {
// // // // //     return ele1 > 20;
// // // // // })

// // // // // console.log(b1);

// // // // /*Object*/

// // // // let person = {
// // // //     firstName: "Naveen",
// // // //     age: 18,
// // // //     isStudent: true
// // // // }


// // // let person1 = Object.create({
// // //     firstName: "Naveen",
// // //     age: 18,
// // //     isStudent: true
// // // });

// // // let person2 = Object.create(person)


// // let person1 = Object.create({
// //     firstName: "Naveen",
// //     age: 18,
// //     isStudent: true
// // });

// // console.log(person1.firstName);     //method1 
// // console.log(person1['firstName']);  //method2
// // console.log(person1['address']);  //unavailable

// let person2 = Object.create({
//     firstName: "Naveen",
//     age: 18,
//     isStudent: true
// });

// value1 = person2.firstName = "Kavi";
// console.log(value1);     //change the value 
// value2 = delete person2.age;  //delete the value
// console.log("IsStudent is deleted: ",value2);
// console.log("The person OBJECT:", person2);