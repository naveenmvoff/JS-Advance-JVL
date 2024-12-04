// // // // // // // const data = [
// // // // // // //     {id:'1', title:""Hello""},
// // // // // // //     {id:'2', title:""Hiiiiiiii""},
// // // // // // //     {id:'3', title:""Vanakam""},
// // // // // // //     {id:'4', title:""ARE""},
// // // // // // // ];

// // // // // // // //map
// // // // // // // const lowerData = data.map((ele) => {
// // // // // // //     return ele.title.t"oLowerCase"();
// // // // // // // })
// // // // // // // console.log(lowerData);

// // // // // // // //filter
// // // // // // // const filteredData = data.filter((ele) => {
// // // // // // //     return ele.id % 2 == 0;
// // // // // // // })

// // // // // // // console.log(filteredData);


// // // // // // const data2 = [             //Slice & Spline
// // // // // //     'Hello',
// // // // // //     'Bus',
// // // // // //     'Train',
// // // // // //     'Lorry'
// // // // // // ]; 

// // // // // // const removedData2 = data2.slice(1,3);  //Slice
// // // // // // console.log(removedData2);

// // // // // // const removedData = data2.splice(1, 3); //Spline
// // // // // // console.log(removedData);


// // // // // const array1 = [1,2,3,4,5];  //concat
// // // // // const array2 = [6,7,8,9,10];
// // // // // const array3 = [11,12,13,14,15];

// // // // // const joinedArray = array1.concat(array2, array3);
// // // // // console.log(joinedArray);

// // // // const data2 = [
// // // //     { id:1, title: "first"},
// // // //     { id:2, title: "second"},
// // // //     { id:3, title: "three"},
// // // //     { id:4, title: "four"},
// // // //  ];
// // // // const itemIndex = data2.findIndex((b) =>{   // Return the Index
// // // //     // return b.id == "2";
// // // //     return b.title == "three";

// // // // })
// // // // console.log(itemIndex);

// // // // const item = data2.find((c) => {  //Find return the Whole element
// // // //     return c.id == "2";
// // // // })
// // // // console.log(item);

// // // const name3 = ["Jack", "Jhonnn"];   //Destructuring
// // // const [firstName, lastName] = name3;
// // // console.log(firstName, lastName);

// // const data4 = {    //Destructuring in Object
// //     id:1,
// //     name:"Naveen M V",
// //     loveMusic: true,
// //     species: "Human"
// // }

// // const { name:firstName1, species } = data4;
// // console.log(firstName1, species)

// const introduction = ["my", "name", "is", "Naveen"];     //Spread Operator is use to create new copy file(@This is not a copy file, this is new file.)
// const copyintroduction = [...introduction];
// console.log(copyintroduction);

// const [first5, ...balance5] = ["my", "name", "is", "Naveen"];  //REST Operation
// console.log(first5);
// console.log(balance5);