const promoText = document.querySelector("#promo-text");
const promoDiv = document.querySelector("#promo-div");
const card = document.querySelector("#promo-div");
const image = document.querySelector("#my-logo");

//Adds the promotional text to the card
function promo() {
    const div = document.createElement("div");
    div.id = "yourText";
    div.style.height = "150px"
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";

    const divText = document.createElement("div");
    divText.id = "promoDiv";
    divText.classList.add("promo");
    divText.style.fontFamily = "Segoe UI";
    divText.style.color = "black";
    divText.style.fontWeight = "bold";
    divText.style.maxWidth = "130px";
    divText.style.maxHeight = "150px";
    divText.style.overflowWrap = "break-word";
    divText.innerHTML = promoText.value;;

    div.appendChild(divText);
    card.appendChild(div);
}

promoText.addEventListener("change", (event) => {
    if (document.getElementById("yourText")) {
        document.getElementById("yourText").remove();
        promoDiv.style.justifyContent = "center";
    }

    if (document.getElementById("promo-text").value !== "") {
        promo();
        promoDiv.style.justifyContent = "space-evenly";
    }
})
