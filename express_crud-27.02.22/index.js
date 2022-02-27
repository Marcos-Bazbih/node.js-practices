const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());

app.listen('8080');

app.get("/", (req, res) => {
    const movies = require("./movies.json");
    if (movies) res.send({ movies });
    res.status(401).send({ massage: "no movies found" });
});

app.get("/:id", (req, res) => {
    const movies = require("./movies.json");
    const movie = movies.find((movieItem) => movieItem.id === parseInt(req.params.id));
    if (movie) res.send({ movie });
    res.status(401).send({ massage: `no movie with ${req.params.id} id found` });
});

app.post("/", (req, res) => {
    const movies = require("./movies.json");
    const movie = req.body.movie;
    movies.push(movie);
    fs.writeFile("./movies.json", JSON.stringify(movies), () => { });
    res.send({ massage: "movie added" });
});

app.put("/:id", (req, res) => {
    let movies = require("./movies.json");
    let movie = movies.find((movieItem) => movieItem.id === parseInt(req.params.id));
    movies[movies.indexOf(movie)] = {...movie, ...req.body};
    fs.writeFile("./movies.json", JSON.stringify(movies), () => { });
    res.send({ movies });
});

app.delete("/:id", (req, res) => {
    let movies = require("./movies.json");
    let filteredMovies = movies.filter(movieItem => movieItem.id !== parseInt(req.params.id) );
    fs.writeFile("./movies.json", JSON.stringify(filteredMovies), () => { });
    res.send({ massage: "movie deleted" });
});