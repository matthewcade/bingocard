const promoLogo = document.querySelector('#logo');
const card = document.querySelector('#promo-div');

//const logoImage = "https://i.postimg.cc/kgPmWpXC/Pro-Joe-III-Productions.png";
const logoImage = '';

export let adCheck = false;

//Logo Image Upload
export const adLogo = document.createElement('input');
adLogo.setAttribute('type', 'file');
adLogo.id = 'adInput';
adLogo.addEventListener('change', function(event) {
    if (event) {
        adCheck = true;
        var reader = new FileReader();
        reader.onload = function() {
            var output = document.getElementById('promo-div');
            output.src = reader.result;
        }
        reader.readAsDataURL(event.target.files[0]);
    } else {
        adCheck = false;
    }
});

promoLogo.append(adLogo);

//Adds the logo to the card's promotional area
function logo() {
    if (adCheck == true) {
        document.getElementById('logo-div').remove();
        const newDiv = document.createElement("div");
        newDiv.id = 'promoImageDiv';
        newDiv.style.height = "150px"
        newDiv.style.display = "flex";
        newDiv.style.justifyContent = "center";
        newDiv.style.alignItems = "center";

        const divLogo = document.createElement("img");
        divLogo.id = "logo-div";
        divLogo.classList.add("promo");
        divLogo.style.maxWidth = "130px";
        divLogo.style.maxHeight = "150px";
        let image = document.getElementById('promo-div');
        let source = image.src;
        divLogo.src = source;
        
        newDiv.appendChild(divLogo);

        const divChild = document.getElementById('promo-div').children[2];
        divChild.replaceChild(newDiv, divChild.childNodes[0]);
    } else {
        const newDiv = document.createElement("div");
        newDiv.id = 'promoImageDiv';
        newDiv.style.height = "150px"
        newDiv.style.display = "flex";
        newDiv.style.justifyContent = "center";
        newDiv.style.alignItems = "center";

        const divLogo = document.createElement("img");
        divLogo.id = "logo-div";
        divLogo.classList.add("promo");
        divLogo.style.maxWidth = "130px";
        divLogo.style.maxHeight = "150px";

        newDiv.appendChild(divLogo);
        card.appendChild(newDiv);
    }
}

logo();
setInterval(logo, 3000);