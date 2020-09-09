import {subirImagen} from './http-provider';

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () => {
    const html = `
        <h1 class="mt-5">Subir Archivos</h1>
        <hr>

        <label>Selecciona una Fotografia</label>
        <input type="file" accept="image/png, image/jpeg">

        <br>
        <img id="foto" class="img-thumbnail" src="">
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
}

const eventos = () => {
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        // console.log(file);
        subirImagen(file).then(url => imgFoto.src = url);
    });
}

export const init = () => {
    crearInputFileHtml();
    eventos();
}



/**
 * var formdata = new FormData();
formdata.append("upload_preset", "hfjfzmjf");
formdata.append("file", fileInput.files[0], "one.jpg");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.cloudinary.com/v1_1/softtek/upload", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
 */