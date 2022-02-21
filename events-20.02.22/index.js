// const fs = require("fs");
// const arr = []
// for (let i = 0; i <= 14; i++) {
//     arr.push(i);
// }
// fs.writeFile("./myFile.txt", arr.join('-'), () => { })

// fs.readFile("./myFile.txt", (err, result) => {
//     if (err) throw err;
//     console.log(result.toString());
// })

// const fiveNames = ["aaa", "bbb", "ccc", "ddd", "eee"];

// fiveNames.forEach((item) => {
//     console.log(item);
// })

// const randomArray = [];
// for (let i = 0; i < 16; i++) {
//     randomArray.push(Math.floor(Math.random() * 10))
//     if (randomArray[i] % 2 === 0) {
//         console.log(randomArray[i]);
//     }
// };


// const fourNamesArray = ["xzcx", "abasdd", "sdfa", "Azxc"];

// fs.writeFile("./four-names.txt", fourNamesArray.toString(), (err) => {
//     if (err) throw err;
// });

// fs.readFile("./four-names.txt", (err, result) => {
//     if (err) throw err;
//     let namesArr = result.toString().split(',');

//     namesArr.forEach((name) => {
//         if (name[0].toLocaleUpperCase() == 'A') console.log(name);
//     })
// })

// let i = 0;
// const randomArray = [];
// while (i < 12) {
//     randomArray.push(Math.floor(Math.random() * 100));
//     i++;
// }
// let moduleThree = randomArray.filter((num) => num % 3 === 0);


// fs.writeFile("./random-numbers.txt", moduleThree.toString(), (err) => {
//     if (err) throw err;
// })

// fs.readFile("./random-numbers.txt", (err, result) => {
//     if (err) throw err;
//     let overFifty = result.toString().split(',');
//     overFifty.forEach((num) => {
//         if (num > 50) console.log(num.toString())
//     })
// })

//! ******___7
// const class_7 = require("./MyEventClass-7.js");
// class_7.EmitPrint("marcos");


//! ******___8
// const class_8 = require("./MyEventClass-8.js");
// class_8.EmitDoNow();
// class_8.EmitDoNow();
// class_8.EmitDoNow();


//! ******___9
// const class_9 = require("./MyEventClass-9");
// class_9.EmitPrintNames(2);


//! ******___10
// const class_10 = require("./MyEventClass-10");
// class_10.EmitListen();


//! ******___11
// const class_11 = require("./MyEventClass-11");
// class_11.EmitFileMsg("./mission_11.txt");


//! ******___12
// const class_12 = require("./MyEventClass-12");
// class_12.EmitFileMsg("./mission_12.txt","Hi, mission 12 !")


//! ******___13
// const class_13 = require("./MyEventClass-13");
// class_13.EmitPrintArray(["marcos","matan","haim"]);


//! ******___14
// const class_14 = require("./MyEventClass-14");
// class_14.EmitPrintNumbers([17, 11, 25, 15, 50]);
