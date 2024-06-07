const promoText = document.querySelector("#promo-text");
const promoDiv = document.querySelector("#promo-div");
const card = document.querySelector("#promo-div");

function promo() {
    const newDiv = document.createElement("div");
    newDiv.id = "yourText";
    newDiv.style.height = "150px"
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";

    const divText = document.createElement("div");
    divText.id = "promoDiv";
    divText.classList.add("promo");
    divText.style.color = "black";
    divText.style.maxWidth = "130px";
    divText.style.maxHeight = "150px";
    divText.style.overflowWrap = "break-word";
    divText.innerHTML = promoText.value;;

    newDiv.appendChild(divText);
    card.appendChild(newDiv);
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