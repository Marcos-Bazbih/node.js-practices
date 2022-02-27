const fs = require("fs");

const GetMovies = (req, res) => {
    const movies = require("../movies.json");
    if (movies) res.send({ movies });
    res.status(401).send({ massage: "no movies found" });
};

const GetMovieById = (req, res) => {
    const movies = require("../movies.json");
    const movie = movies.find((movieItem) => movieItem.id === parseInt(req.params.id));
    if (movie) res.send({ movie });
    res.status(401).send({ massage: `no movie with ${req.params.id} id found` });
};

const AddMovie = (req, res) => {
    const movies = require("../movies.json");
    const movie = req.body.movie;
    movies.push(movie);
    fs.writeFile("./movies.json", JSON.stringify(movies), () => { });
    res.send({ massage: "movie added" });
};

const UpdateMovie = (req, res) => {
    let movies = require("../movies.json");
    let movie = movies.find((movieItem) => movieItem.id === parseInt(req.params.id));
    movies[movies.indexOf(movie)] = { ...movie, ...req.body };
    fs.writeFile("./movies.json", JSON.stringify(movies), () => { });
    res.send({ movies });
};

const DeleteMovie = (req, res) => {
    let movies = require("../movies.json");
    let filteredMovies = movies.filter(movieItem => movieItem.id !== parseInt(req.params.id));
    fs.writeFile("./movies.json", JSON.stringify(filteredMovies), () => { });
    res.send({ massage: "movie deleted" });
};

module.exports = { GetMovies, GetMovieById, AddMovie, UpdateMovie, DeleteMovie };