require("dotenv").config();

const express = require("express");
const cors = require("cors");
const moviesRoutes = require("./routes/movies-routes.js");
const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use("/movies", moviesRoutes)
app.use(cors());

app.get("/", (req, res) => {
    res.send({ massage: "server connected" })
});

app.listen(port);