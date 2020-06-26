"use strict";






const personalMovieDB = {
    count: 0,
    actors: {},
    genres: [],
    privat: false,
    movies: {},
    start: function() {
        personalMovieDB.count = +prompt("How many films you have watched?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films you have watched?", "");
        }
    },
    rememberMyFilms : function() {
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

    },
    detectPersonalLevel : function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
            alert('Вы классический зриетль');
        } else if (personalMovieDB.count > 30) {
            alert('вы киноман');
        } else {
            alert('произошла ошибка');
        }
    },

    
    showMyDB : function  (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres : function () {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == null || genre === ''){
                console.log('вы ввели некорректные данные или не ввели вовсе');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
            
        }
        personalMovieDB.genres.forEach((element, i) => {
            console.log(`Любимый жанр # ${i + 1} - это ${element}`);
            
        });
    },
    toggleVisibleMyDB : function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        
    }
};


rememberMyFilms();



showMyDB(personalMovieDB.privat);




writeYourGenres();

