const numberOfFilms = +prompt("How much films you watch?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
const a = prompt("Один З останніх переглянутих фільмів?", ""),
  b = prompt("Наскільки ви його оціните?", ""),
  c = +prompt("Один З останніх переглянутих фільмів?", ""),
  d = prompt("Наскільки ви йоо оціните?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
