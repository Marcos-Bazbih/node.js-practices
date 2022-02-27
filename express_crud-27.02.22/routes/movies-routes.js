const moviesRoutes = require("express").Router();
const movieControllers = require("../controllers/movies-controller.js");
const { GetMovies, GetMovieById, AddMovie, UpdateMovie, DeleteMovie } = movieControllers;

moviesRoutes.get("/", GetMovies);
moviesRoutes.get("/:id", GetMovieById);
moviesRoutes.post("/", AddMovie);
moviesRoutes.put("/:id", UpdateMovie);
moviesRoutes.delete("/:id", DeleteMovie);

module.exports = moviesRoutes;