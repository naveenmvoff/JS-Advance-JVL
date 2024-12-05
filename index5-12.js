// // // // // // // // // // // // // // // // // // // let result;   //NO Value is assigned - undefined or null
// // // // // // // // // // // // // // // // // // // if (result == undefined || result == null){      
// // // // // // // // // // // // // // // // // // //     result = "Hello";   // assign the value
// // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // console.log(result); // we able to get the output as assigned value

// // // // // // // // // // // // // // // // // // let result1; //No value
// // // // // // // // // // // // // // // // // // result1 = result1 ?? "Hello, Changed";
// // // // // // // // // // // // // // // // // // console.log(result1);

// // // // // // // // // // // // // // // // // let text1 = "Hello World!, Naveen is Developer"; //"String Datatype"
// // // // // // // // // // // // // // // // // console.log(text1.length);  //Find Length
// // // // // // // // // // // // // // // // // console.log(text1.toLowerCase()); //Change to lower case
// // // // // // // // // // // // // // // // // console.log(text1.replace("World", "Naveen"));  //Replace the word
// // // // // // // // // // // // // // // // // console.log(text1.charAt(6));  //Take the word by using Index Number
// // // // // // // // // // // // // // // // // console.log(text1.substring(6,20));  //Take the particular word by using Index Number


// // // // // // // // // // // // // // // // let text2 = "Learn JavaScript, JavaScript is easy and JavaScript have ablity to run in website";
// // // // // // // // // // // // // // // // console.log('Check First Index Value : ', text2.indexOf("JavaScript"));
// // // // // // // // // // // // // // // // console.log('Check Last Index Value : ', text2.lastIndexOf("JavaScript"));

// // // // // // // // // // // // // // // let text3 = "This is a simple sentence";  //split
// // // // // // // // // // // // // // // console.log('Use to split the sentence by using any one char(,! ) : ', text3.split(" "))

// // // // // // // // // // // // // // let text4 = "    Hello, World!    "  //Trim
// // // // // // // // // // // // // // console.log("Trimmed value : ", text4.trim());

// // // // // // // // // // // // // function hello(message){
// // // // // // // // // // // // //     console.log(message);  //When Function doesn't return anything
// // // // // // // // // // // // // }
// // // // // // // // // // // // // let result = hello("This is naveen");
// // // // // // // // // // // // // console.log("Result : ", result);

// // // // // // // // // // // // function add(a, b){  //without input
// // // // // // // // // // // //     return a+b;
// // // // // // // // // // // // }
// // // // // // // // // // // // const call = add();
// // // // // // // // // // // // console.log(call);

// // // // // // // // // // // function add(a, b){   //without input but return 0
// // // // // // // // // // //     if (a&&b){
// // // // // // // // // // //         return a+b;
// // // // // // // // // // //     }
// // // // // // // // // // //     return 0;
// // // // // // // // // // // }
// // // // // // // // // // // const call = add();
// // // // // // // // // // // console.log(call);



// // // // // // // // // // function outer(){  //Closure - The Inner function's operation through outer function:
// // // // // // // // // //     const a = 10;
// // // // // // // // // //     function inner(){
// // // // // // // // // //         const b = 30;
// // // // // // // // // //         return `Inner Value: ${a+b}`;
// // // // // // // // // //     }               
// // // // // // // // // //     return `Inner function in outer function call: ${inner()}`;
// // // // // // // // // // }

// // // // // // // // // // let FnCall = `Assign to FnCall: ${outer()}`;
// // // // // // // // // // console.log("Outer function:",FnCall);


// // // // // // // // // let colors = ['red', 'blue','green', 1,2,3,true, false, {firstName:"Naveen"}];  //Array with []
// // // // // // // // // let color = new Array('red','blue','green', 1, 2, 3, true, false, {firstName:"Naveen"});  //Array with new Array 
// // // // // // // // // console.log(`Array with []: `, colors);
// // // // // // // // // console.log(`Array with new Array: `, color);
// // // // // // // // // console.log(`Take particular value: `,color[2]);
// // // // // // // // // console.log(`Chnage the Value: `, color[2] = "White")

// // // // // // // // let colors1 = ['red', 'blue','green']  //if conditon in the array
// // // // // // // // if (colors1.length > 0){
// // // // // // // //     console.log("We have Colors!")
// // // // // // // // }

// // // // // // // let colors1 = ['red', 'blue','green'];  //push
// // // // // // // colors1.push("Orange");
// // // // // // // console.log(colors1);

// // // // // // let colors1 = ['red', 'blue','green'];  //unshift
// // // // // // colors1.unshift("Orange");
// // // // // // console.log(colors1);

// // // // // let colors1 = ['red', 'blue','green'];  //pop
// // // // // colors1.pop();
// // // // // console.log(colors1);

// // // // let colors1 = ['red', 'blue','green'];  //shift
// // // // colors1.shift();
// // // // console.log(colors1);

// // // // let colors1 = ['red', 'blue','green'];  //indexof
// // // // console.log(colors1.indexOf("green"));


// // // let numbers6  = [1,2,3,4];   //Array forEach() Method
// // // numbers6.forEach(function(element){
// // //     console.log(element * 2);
// // // })


// // const products = ['Bean', 'pizza', 'Chicken', 'salmon'];  //map
// // products.map((ele) => {
// //     console.log(ele + ' *');
// // })

// const price = [2,4,5,6,8,9];  //map - working
// const discountammount = 1;
// const discountprice = price.map((ammount) =>{
//     return ammount - discountammount;
// });
// console.log(discountprice);

var numbers8 = [2,4,5,6,8,13];  //filtter - working
const filtternumbers8  = numbers8.filter((ele8) => { return ele8 >7;})
console.log(filtternumbers8);