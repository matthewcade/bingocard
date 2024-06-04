const input = document.querySelector("#input-field");
const values = document.querySelector("#values");
import {artists} from './presets.js';

//Creates the artist block beneath the input
export function valueArtist(event) {
    if (event) {
        let holder = document.createElement("div");
        holder.id = event.replace(" ", "") + "-holder";
        holder.classList.add("holder");

        let newArr = document.createElement("div");
        newArr.id = event.replace(" ", "");
        newArr.classList.add("artists");
        newArr.textContent = event;

        let ex = document.createElement("div");
        ex.classList.add("ex");
        ex.textContent = "X";
        ex.addEventListener("click", function() {
            document.getElementById(newArr.id).remove();
            document.getElementById(holder.id).remove();
            ex.remove();
            artists.splice(artists.indexOf(event), 1);
        })

        holder.appendChild(newArr);
        holder.appendChild(ex);
        values.appendChild(holder);
    }
}

//Adds an artist to the artist array
function addArtist() {
    artists.push(input.value);
    valueArtist(input.value);
    input.value = "";
}

//Checks if the artist is already listed in the artist array
function checkArtist() {
    if (artists.includes(input.value)) {
        alert("Duplicate artist/song");
        input.value = "";
    } else {
        addArtist();
    }
}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkArtist();
    }
});