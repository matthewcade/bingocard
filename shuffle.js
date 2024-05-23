const input = document.querySelector("#input-field");
const values = document.querySelector("#values");
const bingoHeader = document.querySelectorAll(".bingo-header");
const squareOne = document.getElementById("1");

const artists = [
    "NSync",
    "Backstreet Boys",
    "Savage Garden",
    "Warrant",
    "Boston",
    "Foreigner",
    "Chicago",
    "Kansas",
    "Styx",
    "Michael Jackson",
    "John Mayer",
    "Metallica",
    "Disturbed",
    "Phil Collins",
    "Genesis",
    "Hootie & The Blowfish",
    "Darius Rucker",
    "Laura Brannagin",
    "Mariah Carey",
    "Beyonce",
    "Rihanna",
    "Sugar Ray",
    "Def Leppard",
    "Goo Goo Dolls",
    "Red Hot Chili Peppers",
];

let fontFamily = "";
let fontColor = "";
let bingoFont = "";
let borderColor = "";

//Font Family
function setFont() {
    if (document.getElementById('new-font-family').selectedIndex == '1') {
        fontFamily = 'Times New Roman';
    } else if (document.getElementById('new-font-family').selectedIndex == '2') {
        fontFamily = 'Segoe UI';
    } else if (document.getElementById('new-font-family').selectedIndex == '3') {
        fontFamily = 'Comic Sans MS';
    } else if (document.getElementById('new-font-family').selectedIndex == '4') {
        fontFamily = 'Helvetica';
    }
}

//Font Color
function setFontColor() {
    if (document.getElementById('new-font-color').selectedIndex == '1') {
        fontColor = 'Black';
    } else if (document.getElementById('new-font-color').selectedIndex == '2') {
        fontColor = 'Blue';
    } else if (document.getElementById('new-font-color').selectedIndex == '3') {
        fontColor = 'Green';
    } else if (document.getElementById('new-font-color').selectedIndex == '4') {
        fontColor = 'Red';
    }
}

function setBingoFont() {
    if (document.getElementById('new-border-font').selectedIndex == '1') {
        bingoFont = 'Times New Roman';
    } else if (document.getElementById('new-border-font').selectedIndex == '2') {
        bingoFont = 'Segoe UI';
    } else if (document.getElementById('new-border-font').selectedIndex == '3') {
        bingoFont = 'Comic Sans MS';
    } else if (document.getElementById('new-border-font').selectedIndex == '4') {
        bingoFont = 'Helvetica';
    }
}

function valueArtist(event) {
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

function addArtist() {
    artists.push(input.value);
    valueArtist(input.value);
    input.value = "";
}

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

//Pick a random artist
function randomize() {
    let index = artists.length;

    while (index != 0) {
        randomIndex = Math.floor(Math.random() * index);
        index--;

        [artists[index], artists[randomIndex]] = [artists[randomIndex], artists[index]];
    }
}

//Shuffle the card with random artists
function shuffle() {
    let numArr = artists.length;

    let id = 1;

    for (i = 1; i < 26; i++) {
        let index = Math.floor(Math.random() * numArr);
        let newDiv = document.createElement("div");
        newDiv.id = "s" + id;
        newDiv.classList.add("artist-square");
        newDiv.style.fontFamily = fontFamily;
        newDiv.style.color = fontColor;
        newDiv.innerHTML = artists.splice([index - 1], 1);

        document.getElementById(id.toString()).appendChild(newDiv);
        numArr--;
        id++;
    }
    
    for (j = 1; j < 26; j++) {
        artists.push(document.getElementById("s" + [j]).innerHTML);
    }
    
    randomize();
}

function reshuffle() {
    let numArr = artists.length;

    let id = 1;

    for (i = 1; i < 26; i++) {
        document.getElementById("s" + i).remove();
    }

    for (j = 1; j < 26; j++) {
        let index = Math.floor(Math.random() * numArr);
        let newDiv = document.createElement("div");
        newDiv.id = "s" + id;
        newDiv.classList.add("artist-square");
        newDiv.style.fontFamily = fontFamily;
        newDiv.style.color = fontColor;
        newDiv.innerHTML = artists.splice([index - 1], 1);

        document.getElementById(id.toString()).appendChild(newDiv);
        numArr--;
        id++;
    }

    for (k = 1; k < 26; k++) {
        artists.push(document.getElementById("s" + [k]).innerHTML);
    }

    randomize();
}

function countCheck () {
    if (artists.length < 25) {
        let count = 25 - artists.length;
        alert(`Need at least 25 artists/songs, add ${count} more.`);
    } else if (squareOne.children.length < 1) {
        shuffle();
    } else {
        reshuffle();
    }
}

shuffle();
setInterval(reshuffle, 3000);