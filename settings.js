const newFont = document.querySelector("#new-font-family");
const newFontColor = document.querySelector("#new-font-color");
const newBingoFont = document.querySelector("#new-bingo-font");
const newBorderColor = document.querySelector("#new-border-color");
import {shuffle} from './card.js';

export let fontFamily = "";
export let fontColor = "";
export let bingoFont = "";
export let borderColor = "black";

//Set Font
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
};

newFont.addEventListener("change", (event) => {
    setFont();
    shuffle();
})

//Set Font Color
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

newFontColor.addEventListener("change", (event) => {
    setFontColor();
    shuffle();
})

//Set Bingo Header Font
function setBingoFont() {
    if (document.getElementById('new-bingo-font').selectedIndex == '1') {
        bingoFont = 'Times New Roman';
    } else if (document.getElementById('new-bingo-font').selectedIndex == '2') {
        bingoFont = 'Segoe UI';
    } else if (document.getElementById('new-bingo-font').selectedIndex == '3') {
        bingoFont = 'Comic Sans MS';
    } else if (document.getElementById('new-bingo-font').selectedIndex == '4') {
        bingoFont = 'Helvetica';
    }
}

newBingoFont.addEventListener("change", (event) => {
    setBingoFont();
    shuffle();
})

//Bingo Header Font Family
function setBorderColor() {
    if (document.getElementById('new-border-color').selectedIndex == '1') {
        borderColor = 'Black';
    } else if (document.getElementById('new-border-color').selectedIndex == '2') {
        borderColor = 'Blue';
    } else if (document.getElementById('new-border-color').selectedIndex == '3') {
        borderColor = 'Green';
    } else if (document.getElementById('new-border-color').selectedIndex == '4') {
        borderColor = 'Red';
    }
}

newBorderColor.addEventListener("change", (event) => {
    setBorderColor();
    shuffle();
})