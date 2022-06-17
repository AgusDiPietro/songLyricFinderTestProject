import * as UI from "./interfaz.js";
import { API } from './api.js';

UI.formularioBuscar.addEventListener('sumbmit', buscarCancion);

function buscarCancion(e){
   

   //datos del form
   const artista = document.querySelector('#artista').value;
   const cancion = document.querySelector('#cancion').value;

   if(artista === '' || cancion === '') {
    // El usuario deja los campos vacios, mostrar error
      UI.divMensajes.textContent     = 'Error... Todos los campos son obligatorios';
      UI.divMensajes.classList.add('error');
      setTimeout(() => {
         UI.divMensajes.innerHTML = '';
         UI.divMensajes.classList.remove('error');
       }, 3000);
    } else {
    // El formulario esta completo, realizar consulta a la API
    new API(artista, cancion);
    }
   
}