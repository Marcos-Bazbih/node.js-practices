const fs = require("fs");

//! *********__2
// let i = 0;
// while (i < 10) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }


//! *********__3
// const randomNumbersArray = [];
// for (let i = 0; i < 16; i++) {
//     let randomNum = Math.floor(Math.random() * 10)
//     randomNumbersArray.push(randomNum);
//     if (randomNum % 2 === 0) console.log(randomNum);
// };
// console.log(randomNumbersArray);


//! *********__4  -- אתגר
// const kid = {
//     name: "Kanye",
//     age: 40,
//     isInSchool: true
// };

// fs.writeFile("./mission-4.json", JSON.stringify(kid), (err) => {
//     if (err) throw err;
// });


//! *********__5
// const kidsArray = [
//     { name: "Tupac", age: 27, isInSchool: false },
//     { name: "Biggie", age: 29, isInSchool: false },
//     { name: "Jay Z", age: 46, isInSchool: true },
//     { name: "Eminem", age: 42, isInSchool: true },
//     { name: "Nas", age: 40, isInSchool: true }
// ];
// fs.writeFile("./mission-5.txt", kidsArray.toString(), (err) => {
//     if (err) throw err;
// });

// fs.readFile("./mission-5.txt", (err, result) => {
//     if (err) throw err;
//     const data = result.toString().split(",");
//     for(const kid of data){
//         if(kid.isInSchool) console.log(kig);
//     };
// });


//! *********__6 -- אתגר
// const kidsArray = [
//     { name: "Tupac", age: 27, isInSchool: false },
//     { name: "Biggie", age: 29, isInSchool: false },
//     { name: "Jay Z", age: 46, isInSchool: true },
//     { name: "Eminem", age: 42, isInSchool: true },
//     { name: "Nas", age: 40, isInSchool: true }
// ];

// fs.writeFile("./mission-6.txt", JSON.stringify(kidsArray), (err) => {
//     if (err) throw err;
// })
// fs.readFile("./mission-6.txt", (err, result) => {
//     if (err) throw err;
//     const data = JSON.parse(result);
//     for (const kid of data) {
//         if (kid.isInSchool) console.log(kid);
//     };
// });


//! *********__7
// const randomArray = [];
// for (let i = 0; i < 100; i++) {
//     randomArray.push(Math.floor(Math.random() * 100))
// }

// fs.writeFile("./mission-7.txt", randomArray.filter(num => num % 7 === 0).toString(), (err) => {
// if (err) throw err;
// })

// fs.readFile("./mission-7.txt", (err, result) => {
//     if (err) throw err;
//     const data = result.toString().split(",");
//     for (const num of data) {
//         if (num > 50) console.log(num);
//     };
// });


//! *********__8 -- אתגר
// const randomArray = [];
// let i = 0;
// while (i < 100) {
//     randomArray.push(Math.floor(Math.random() * 100));
//     i++;
// }

// fs.writeFile("./mission-8.json", JSON.stringify(randomArray.filter(num => num % 7 === 0)), (err) => {
//     if (err) throw err;
// });

// fs.readFile("./mission-8.json", (err, result) => {
//     if (err) throw err;
//     for (const num of JSON.parse(result)) {
//         if (num > 50) console.log(num);
//     };
// });


//! *********__9
// const mission_9 = require("./eventClass-9");
// mission_9.EmitPrint("./mission-9.txt");


//! *********__10
// const mission_10 = require("./eventClass-10");
// mission_10.EmitPrintTen("./mission-10.txt","data fot mission 10");


//! *********__11 -- אתגר
// const mission_11 = require("./eventClass-11");
// mission_11.EmitPrintEleven(["marcos", "matan", "lior"]);