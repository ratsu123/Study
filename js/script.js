"use strict";

const numberOfFilms = +prompt("How many films you have watched?", "");

const personalMovieDB = {
    count : numberOfFilms,
    actors : {},
    genres : [],
    privat : false,
    movies : {}
};

let name1 = prompt("The last film you have watched?","");
let rate1 = prompt("Rate it from 1 to 10","0");
let name2 = prompt("The last film you have watched?","");
let rate2 = prompt("Rate it from 1 to 10","0");
personalMovieDB.movies[name1] = rate1;
personalMovieDB.movies[name2] = rate2;
console.log(personalMovieDB);




