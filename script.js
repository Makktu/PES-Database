"use strict";

// const form = document.getElementById("form");
// const search = document.getElementById("search");

function showGames(theData, searchTerm) {
    const contentNumber = theData.contents;

    if (searchTerm) {
        console.log("this has worked");
        for (let k = 0; k < contentNumber; k++) {
            console.log(k);
        }

        return;
    }

    for (let j = 0; j < contentNumber; j++) {
        const gameName = theData.games[j].name;
        const shortName = theData.games[j].shortname[1];
        const gameYear = theData.games[j].year;
        const gameRating = theData.games[j].rating;
        const gameWiki = theData.games[j].wikipedia;
        const boxArt = theData.games[j].cover;
        const summary = theData.games[j].summary;
        console.log(gameName, gameYear, gameRating, gameWiki, boxArt);
        const gameEl = document.createElement("div");
        gameEl.classList.add("movie");
        gameEl.innerHTML = `
            <img src="${boxArt}
            " alt="${gameName}">
            <div class="movie-info">
          <h3>${gameName}</h3>
          <span class="${getClassByRate(gameRating)}">${gameRating}</span>
            </div>
            <div class="overview">
          <h3>${shortName}</h3>
          ${gameYear}<br>${summary}
        </div>
        `;
        mainPart.appendChild(gameEl);
    }

    function getClassByRate(rating) {
        if (rating > 9) return "green";
        if (rating >= 8) return "orange";
        return "red";
    }
}

fetch("data.json")
    .then((response) => response.json())
    .then((json) => {
        // theData = json;
        const theData = json;
        showGames(theData);
    });

const mainPart = document.querySelector("main");

const gameEl = document.createElement("div");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value;

    if (searchTerm && searchTerm !== "") {
        showGames(null, searchTerm);
        search.value = "";
    } else {
        window.location.reload();
    }
});
