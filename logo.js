const card = document.querySelector("#promo-div");

const logoImage = "https://i.postimg.cc/267Dc81x/Pro-Joe-III-Productions.png";

function logo() {
    const newDiv = document.createElement("div");
    newDiv.style.height = "150px"
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";

    const divLogo = document.createElement("img");
    divLogo.id = "logo-div";
    divLogo.classList.add("promo");
    divLogo.style.maxWidth = "130px";
    divLogo.style.maxHeight = "150px";
    divLogo.src = logoImage;
    
    newDiv.appendChild(divLogo);
    card.appendChild(newDiv);
}

logo();