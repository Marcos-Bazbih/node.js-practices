const fs = require("fs");


//! *****__5
// for (let i = 0; i < 15; i++) {
//     if (i % 2 === 0) console.log(i);
// };

//! *****__6
// const randomArr = [];
// let i = 0;
// while (i < 10) {
//     randomArr.push(Math.floor(Math.random()*10));
//     if(randomArr[i] % 2 !== 0) console.log(randomArr[i]);
//     i++;
// };

//! *****__7
// const fs = require("fs");
// const student = {
//     name: "student name",
//     age: 16,
//     grade: 7
// };
// fs.writeFile("./mission_7.json", JSON.stringify(student), (err) => {
//     if (err) throw err;
// });

//! *****__8
// const fs = require("fs");
// const studentsArray = [
//     { name: "first student", age: 6, grade: 15 },
//     { name: "second student", age: 12, grade: 5 },
//     { name: "third student", age: 8, grade: 3 },
//     { name: "forth student", age: 4, grade: 12 }
// ];
// fs.writeFile("./mission_8.json", JSON.stringify(studentsArray), (err) => {
//     if (err) throw err;
// })

// fs.readFile("./mission_8.json", (err, result) => {
//     if (err) throw err;
//     const data = JSON.parse(result);
//     for (const student of data) {
//         if (student.age > 7) console.log(student);
//     }
// });

//! *****__9
// const randomArr = [];
// for (let i = 0; i < 100; i++) {
// randomArr.push(Math.floor(Math.random() * 100));
// };
// const filteredArr = randomArr.filter(num => num % 3 === 0).toString();
// fs.writeFile("./mission_9.txt", filteredArr, (err) => {
//     if (err) throw err;
// })
// fs.readFile("./mission_9.txt", (err, result) => {
//     if (err) throw err;
//     const data = result.toString().split(",");
//     for (const num of data) {
//         if (parseInt(num) > 45) console.log(num);
//     };
// });

//! *****__10
// const randomArr = [];
// for (let i = 0; i < 100; i++) {
// randomArr.push(Math.floor(Math.random() * 100));
// };
// const filteredArr = randomArr.filter(num => num % 3 === 0);
// fs.writeFile("./mission_10.json",JSON.stringify(filteredArr), (err) => {
//     if (err) throw err;
// })
// fs.readFile("./mission_10.json", (err, result) => {
//     if (err) throw err;
//     for (const num of result) {
//         if (num > 45) console.log(num);
//     };
// });

//! *****__11
// require("./mission-11-event").EmitPrint("mission_11");

//! *****__12
// require("./mission-12-event").EmitPrint("mission_12", "Hello there");

//! *****__13
// require("./mission-13-event").EmitPrint("mission_13", ["aaa", "bbb", "ccc"]);

//! *****__14
// require("./mission-14-event");

//! *****__15
// require("./mission-15-event");

//! *****__16
// require("./mission-16-event");

//! *****__17
// require("./mission-17-event");

//! *****__18
// require("./mission-18-event");

//! *****__19
// require("./mission-19-event");