const app = require("express")();
const port = 8080;

app.listen(port);

//! *****__5,14,15
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

//! *****__6
app.get("/hello", (req, res) => {
    res.send("hello");
});

//! *****__7
app.get("/users", (req, res) => {
    const namesArray = ["aa", "bb", "cc", "dd", "ee"];
    res.send(namesArray);
});

//! *****__8
app.get("/ages", (req, res) => {
    const randomArray = [];
    for (let i = 0; i < 100; i++) {
        randomArray.push(Math.floor(Math.random() * 100));
    };
    res.send(randomArray);
});

//! *****__9
app.get("/rndNumbers", (req, res) => {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
        randomArray.push(Math.floor(Math.random() * 100));
    };
    res.send({ max: Math.max(...randomArray) });
});

//! *****__10
app.get("/numbers/:id", (req, res) => {
    const randomArray = [];
    for (let i = 0; i < 100; i++) {
        randomArray.push(Math.floor(Math.random() * 1000));
    };
    res.send({ number: randomArray[req.params.id] });
});

//! *****__11
app.get("/isNumber/:num", (req, res) => {
    const randomArray = [];
    for (let i = 0; i < 100; i++) {
        randomArray.push(Math.floor(Math.random() * 100));
        if (randomArray[i] == req.params.num) {
            res.send(`${req.params.num} is in the array`)
        };
    };
    res.send(`${req.params.num} is not in the array`);
});

//! *****__12
app.get("/bigNumber/:num", (req, res) => {
    const randomNum = Math.floor(Math.random() * 1000);
    if (randomNum > req.params.num) res.send(`${randomNum} is bigger`);
    if (randomNum < req.params.num) res.send(`${req.params.num} is bigger`);
    res.send(`${req.params.num} = ${randomNum}`);
});

//! *****__13
app.get("/smallNumber/:num", (req, res) => {
    const randomNum = Math.floor(Math.random() * 1000);
    if (randomNum < req.params.num) res.send(`${randomNum} is smaller`);
    if (randomNum > req.params.num) res.send(`${req.params.num} is smaller`);
    res.send(`${req.params.num} = ${randomNum}`);
});