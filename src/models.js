// src/models.js

export class Pelicula {

  constructor(id, titulo, anio, genero) {
    this.id = id;
    this.titulo = titulo;
    this.anio = anio;
    this.genero = genero;
  }

  getDescripcion() {
    return `${this.titulo} (${this.anio}) - Género: ${this.genero}`;

  }

}