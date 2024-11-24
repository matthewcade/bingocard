const bingoTable = document.querySelector("#bingo-table");
const checkbox = document.querySelector("#checkbox");
import {artists} from './presets.js';
import {fontFamily, fontColor, bingoFont, borderColor} from './settings.js';
import {uploadCheck} from './freespace.js';

//Pick a random artist
function randomize() {
    let index = artists.length;

    while (index != 0) {
        let randomIndex = Math.floor(Math.random() * index);
        index--;

        [artists[index], artists[randomIndex]] = [artists[randomIndex], artists[index]];
    }
}

//Set Square Rows
function cardRows() {
    if (bingoTable.innerHTML) {
        bingoTable.innerHTML = "";
    }

    const bingoRow = document.createElement("tr");
    bingoRow.id = "bingo-row";
    bingoRow.style.border = `1px solid ${borderColor}`;

    const b = document.createElement("td");
    b.id = "header-b";
    b.classList.add("bingo-letter");
    b.innerHTML = "B";
    b.style.fontFamily = bingoFont;
    b.style.borderColor = borderColor;
    b.style.backgroundColor = borderColor;
    bingoRow.appendChild(b);

    const i = document.createElement("td");
    i.id = "header-i";
    i.classList.add("bingo-letter");
    i.innerHTML = "I";
    i.style.fontFamily = bingoFont;
    i.style.borderColor = borderColor;
    i.style.backgroundColor = borderColor;
    bingoRow.appendChild(i);

    const n = document.createElement("td");
    n.id = "header-n";
    n.classList.add("bingo-letter");
    n.innerHTML = "N";
    n.style.fontFamily = bingoFont;
    n.style.borderColor = borderColor;
    n.style.backgroundColor = borderColor;
    bingoRow.appendChild(n);

    const g = document.createElement("td");
    g.id = "header-g";
    g.classList.add("bingo-letter");
    g.innerHTML = "G";
    g.style.fontFamily = bingoFont;
    g.style.borderColor = borderColor;
    g.style.backgroundColor = borderColor;
    bingoRow.appendChild(g);

    const o = document.createElement("td");
    o.id = "header-o";
    o.classList.add("bingo-letter");
    o.innerHTML = "O";
    o.style.fontFamily = bingoFont;
    o.style.borderColor = borderColor;
    o.style.backgroundColor = borderColor;
    bingoRow.appendChild(o);

    bingoTable.appendChild(bingoRow);

    let id = 1;
    
    for (let i = 1; i < 6; i++) {
        const row = document.createElement("tr");
        row.id = "row" + [i];

        for (let j = 1; j < 6; j++) {
            const square = document.createElement("td");
            square.id = "square" + id;
            square.classList.add("square");
            square.style.border = `1px solid ${borderColor}`;
            
            row.appendChild(square);

            id++;
        }

    bingoTable.appendChild(row);
    }
}

//Check free space function
function freeSpace() {
    if (checkbox.checked == true) {        
        if (uploadCheck == false) {
            let div = document.createElement("div");
            div.style.fontFamily = fontFamily;
            div.style.color = fontColor;
            div.classList.add("artist-square");
            div.id = "Free Space";
            div.textContent = "Free Space";

            const tr = document.getElementById("row3").children[2];
            tr.replaceChild(div, tr.childNodes[0]);
        } else {
            let div = document.createElement("div");
            div.id = "Free Space";
            let image = document.getElementById("output_image");
            let source = image.src;
            let freeSpaceImage = document.createElement("img");
            freeSpaceImage.src = source;
            freeSpaceImage.setAttribute("height", "50px");
            freeSpaceImage.setAttribute("width", "50px");
            div.appendChild(freeSpaceImage);

            const tr = document.getElementById("row3").children[2];
            tr.replaceChild(div, tr.childNodes[0]);
        }
    }
}

//Shuffle the card with random artists
export function shuffle() {
    cardRows();

    let numArr = artists.length;

    let id = 1;

    for (let i = 1; i < 26; i++) {
        let index = Math.floor(Math.random() * numArr);
        let div = document.createElement("div");
        div.id = "s" + id;
        div.classList.add("artist-square");
        div.style.fontFamily = fontFamily;
        div.style.color = fontColor;
        div.innerHTML = artists.splice([index - 1], 1);

        document.getElementById("square" + id).appendChild(div);
        numArr--;
        id++;
    }
    
    for (let j = 1; j < 26; j++) {
        artists.push(document.getElementById("s" + [j]).innerHTML);
    }

    randomize();
    freeSpace();
}

shuffle();

setInterval(shuffle, 3000);