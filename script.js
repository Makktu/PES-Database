"use strict";

// import * as data from 'data.json';

// const form = document.getElementById("form");
// const search = document.getElementById("search");

// const IMG_PATH = "/img/boxart/";

// const games = require("data.json");

// const mainPart = document.querySelector("main");

// const gameEl = document.createElement("div");

// const testCase = IMG_PATH + "Goal_Storm_PAL_version_1996.jpg";

// console.log(testCase);

// gameEl.innerHTML = `<p>HELLO WORLD?</p><img src="${testCase}">`;

// access JSON of all games and display them on a single page
// games.forEach((game) => {
//     // code to do it goes here
// });

const el = document.querySelector(".img");
el.src = "img/boxart/Goal_Storm_PAL_version_1996.jpg";
el.addEventListener("load", () => {
    el.classList.add("fadeIn");
});
