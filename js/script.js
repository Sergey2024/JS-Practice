'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
// const a = prompt('Один из последних просмотренных фильмов?', ''),
// 	b = +prompt('На сколько оцените его?', ''),
// 	c = prompt('Один из последних просмотренных фильмов?', ''),
// 	d = +prompt('На сколько оцените его?', '');

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?', ''),
		b = +prompt('На сколько оцените его?', '');
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
} 
if (personalMovieDB.count < 10) {
	console.log('Мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Классика');
} else if (personalMovieDB.count >= 30) {
	console.log('Вы киноман');
} else {
	console.log('Ошибка');
}


console.log(personalMovieDB);
