import * as UI from './interfaz.js';

export class API {
     constructor(artista, cancion) {
          this.artista = artista;
          this.cancion = cancion;

          this.consultarAPI();
     }z