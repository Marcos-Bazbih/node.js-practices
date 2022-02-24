const app = require("express")();
const port = 8000;

app.listen(port);


//! ***_5
app.get("/home", (req, res) => {
    res.send("Welcome");
});


//! ***_6
app.get("/test", (req, res) => {
    res.send("Success");
});


//! ***_7
app.get("/names", (req, res) => {
    const namesArray = ["marcos", "lior", "matan", "shimon", "itzhak"];
    res.send(namesArray);
});


//! ***_8
app.get("/numbers", (req, res) => {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
        randomArray.push(Math.floor(Math.random() * 10));
    };
    res.send(randomArray);
});


//! ***_9
app.get("/rndNumbers", (req, res) => {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
        randomArray.push(Math.floor(Math.random() * 100));
    };
    res.send(`${Math.max(...randomArray)}`);
});


//! ***_10
app.get("/numbers/:index", (req, res) => {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
        randomArray.push(Math.floor(Math.random() * 100));
    };
    res.send(`${randomArray[req.params.index]}`);
})


//! ***_11
app.get("/isNumber/:num", (req, res) => {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
        randomArray.push(Math.floor(Math.random() * 10));
        if (randomArray[i] === parseInt(req.params.num)) res.send(`${req.params.num} is in the array`);
    };
    res.send(`${req.params.num} is not in the array`);
});


//! ***_12
app.get("/bigNumber/:num", (req, res) => {
    const randomNum = Math.floor(Math.random() * 10);
    const userNum = req.params.num;

    if (randomNum > userNum) res.send(`${randomNum}`);
    if (userNum > randomNum) res.send(`${userNum}`);
    res.send(`${userNum} and ${randomNum} are equal`);
});


//! ***_13
app.get("/smallNumber/:num", (req, res) => {
    const randomNum = Math.floor(Math.random() * 99);
    const userNum = req.params.num;
    if (randomNum < userNum) res.send(`${randomNum}`);
    if (userNum < randomNum) res.send(`${userNum}`);
    res.send(`${userNum} and ${randomNum} are equal`);

    // res.send({min:Math.min(randomNum,userNum)})
});


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});