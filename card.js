const bingoTable = document.querySelector("#bingo-table");
import {artists} from './presets.js';
import {fontFamily, fontColor, bingoFont, borderColor} from './settings.js';

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
function squareRows() {
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
        const newRow = document.createElement("tr");
        newRow.id = "row" + [i];

        for (let j = 1; j < 6; j++) {
            const newSquare = document.createElement("td");
            newSquare.id = "square" + id;
            newSquare.classList.add("square");
            newSquare.style.border = `1px solid ${borderColor}`;
            
            newRow.appendChild(newSquare);

            id++;
        }
    bingoTable.appendChild(newRow);
    }
}

//Shuffle the card with random artists
export function shuffle() {
    squareRows();

    let numArr = artists.length;

    let id = 1;

    for (let i = 1; i < 26; i++) {
        let index = Math.floor(Math.random() * numArr);
        let newDiv = document.createElement("div");
        newDiv.id = "s" + id;
        newDiv.classList.add("artist-square");
        newDiv.style.fontFamily = fontFamily;
        newDiv.style.color = fontColor;
        newDiv.innerHTML = artists.splice([index - 1], 1);

        document.getElementById("square" + id).appendChild(newDiv);
        numArr--;
        id++;
    }
    
    for (let j = 1; j < 26; j++) {
        artists.push(document.getElementById("s" + [j]).innerHTML);
    }

    randomize();
}

shuffle();

setInterval(shuffle, 3000);