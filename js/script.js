"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films you have watched?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films you have watched?", "");
    }
}

start();


const personalMovieDB = {
    count : numberOfFilms,
    actors : {},
    genres : [],
    privat : false,
    movies : {}
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const name1 = prompt("The last film you have watched?","");
        const rate1 = prompt("Rate it from 1 to 10","0");
        if (name1 != null && rate1 != null && name1 != '' && rate1 != '' && name1.length < 50) {
            personalMovieDB.movies[name1] = rate1;
            console.log('Done');
        } else {
            console.log('error');
            i--;
        }
        
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert('Просмотренно довольно мало фильмов');
    } else if (numberOfFilms >= 10 && numberOfFilms <=30) {
        alert('Вы классический зриетль');
    } else if (numberOfFilms > 30) {
        alert('вы киноман');
    } else {
        alert('произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres();

