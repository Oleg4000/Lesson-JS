"use strikt";
const numberOfFilms = +prompt("How much films you watch?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

// c = +prompt("Один З останніх переглянутих фільмів?", ""),
// d = prompt("Наскільки ви йоо оціните?", "");

for (let i = 0; i < 2; i++) {
  const a = prompt("Один З останніх переглянутих фільмів?", "");
  b = prompt("Наскільки ви його оціните?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

console.log(personalMovieDB);
