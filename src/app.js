// Clase Pelicula
class Pelicula {

  constructor(id, titulo, año, genero) {
    this.id = id;
    this.titulo = titulo;
    this.año = año;
    this.genero = genero;
  }

  getDescripcion() {
    return `${this.titulo} (${this.año}) - Género: ${this.genero}`;
  }
  
}

// Array de películas
const peliculas = [

  new Pelicula(1, "The Batman", 2022, "Acción"),
  new Pelicula(2, "Avatar: El Camino del Agua", 2022, "Ciencia ficción"),
  new Pelicula(3, "Top Gun: Maverick", 2022, "Acción"),

];

// Mostrar en DOM
const lista = document.getElementById("lista_peliculas");

peliculas.forEach(peli => {

  const li = document.createElement("li");
  li.textContent = peli.getDescripcion();
  lista.appendChild(li);

});