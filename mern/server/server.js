const express = require("express");
const cors = require("cors");
const shirtsRouter = require("./routes/shirts-router");
const app = express();
const port = 4000;
const db = require("./DB/db.js");

app.use(cors());
app.use(express.json());
app.use("/api", shirtsRouter);

app.listen(port, () => {
    console.log(`connected to ${port}`);
});