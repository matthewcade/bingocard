const customSpace = document.querySelector('#custom-space');

const uploadForm = document.createElement('form');
uploadForm.id = 'uploadForm';

const customHeader = document.createElement('div');
customHeader.innerText = 'Custom Space:';

export let uploadCheck = false;

//Free Space Upload
export const formInput = document.createElement('input');
formInput.setAttribute('type', 'file');
formInput.id = 'fileInput';
formInput.addEventListener('change', function(event) {
    if (event) {
        uploadCheck = true;
        var reader = new FileReader();
        reader.onload = function() {
            var output = document.getElementById('output_image');
            output.src = reader.result;
        }
        reader.readAsDataURL(event.target.files[0]);
    } else {
        uploadCheck = false;
    }
});

const previewImage = document.createElement('img');
previewImage.id = 'output_image';
previewImage.setAttribute('height', '125px');
previewImage.setAttribute('width', '125px');

const customBlockOne = document.createElement('div');
customBlockOne.id = 'custom-block-one';
const customBlockTwo = document.createElement('div');
customBlockTwo.id = 'custom-block-two';

customBlockOne.append(customHeader, formInput);
customBlockTwo.append(previewImage);
uploadForm.append(customBlockOne, customBlockTwo);
customSpace.appendChild(uploadForm);