const card = document.querySelector("#card");

function promo() {
    const newDiv = document.createElement("div");
    newDiv.id = "promotion";
    newDiv.style.color = "black";
    newDiv.style.height = "150px";
    newDiv.innerHTML = document.getElementById("promo-text").ariaValueMax;;
    card.appendChild(newDiv);
}

promo();