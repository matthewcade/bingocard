const input = document.querySelector("#input-field");
const values = document.querySelector("#values");
const preset = document.querySelector("#new-preset");
import {artists} from './presets.js';

//Creates the artist block beneath the input
function valueArtist(event) {
    if (event) {
        let container = document.createElement("div");
        container.id = event.replace(" ", "") + "-container";
        container.classList.add("value-container");

        let newArr = document.createElement("div");
        newArr.id = event.replace(" ", "");
        newArr.classList.add("artists");
        newArr.textContent = event;

        let x = document.createElement("div");
        x.classList.add("x");
        x.textContent = "X";
        x.addEventListener("click", function() {
            document.getElementById(newArr.id).remove();
            document.getElementById(container.id).remove();
            x.remove();
            artists.splice(artists.indexOf(event), 1);
        })

        container.appendChild(newArr);
        container.appendChild(x);
        values.appendChild(container);
    }
}

//Adds an artist to the artist array
function addArtist() {
    artists.push(input.value);
    valueArtist(input.value);
    input.value = "";
}

//Checks if the value is already listed and adds the input value
function customGame() {
    if (document.getElementById("new-preset").selectedIndex == "0") {
        if (artists.includes(input.value)) {
            alert("duplicate artist/song");
        } else if (artists.includes("")) {
            const index = artists.indexOf("");
            artists[index] = input.value;
            valueArtist(input.value);
        } else {
            addArtist();
        }
    }
    input.value = "";
}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        customGame();
    }
});