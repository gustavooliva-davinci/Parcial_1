// Clase Pelicula
class Pelicula {

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

// Array de películas (cambio cons x let para poder cambiar)
let peliculas = [

  new Pelicula(1, "The Batman", 2022, "Acción"),
  new Pelicula(2, "Avatar: El Camino del Agua", 2022, "Ciencia ficción"),
  new Pelicula(3, "Top Gun: Maverick", 2022, "Acción"),

];

// Referencias al DOM
const lista = document.getElementById("lista_peliculas");
const form = document.getElementById("form_pelicula");

// Mostrar en DOM
function mostrarPeliculas() {
  lista.innerHTML = ""; // limpiar lista

  peliculas.forEach((peli) => {
    const li = document.createElement("li");
    
    li.classList.add("tarjeta");

    const span = document.createElement("span");
    span.textContent = peli.getDescripcion();

    // Botón eliminar
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.addEventListener("click", () => {
      if (confirm(`¿Querés borrar "${peli.titulo}"?`)) {
        peliculas = peliculas.filter(p => p.id !== peli.id);
        guardarPeliculas();
        mostrarPeliculas();
      }
    });

    // Agregar elementos al li
    li.appendChild(span);
    li.appendChild(btnEliminar);

    lista.appendChild(li);
  });
}

// Guardar array en localStorage
function guardarPeliculas() {
  localStorage.setItem("peliculas", JSON.stringify(peliculas));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const anio = document.getElementById("anio").value;
  const genero = document.getElementById("genero").value;

  let mensaje = "Pelicula agregada con exito";
  if (!titulo || !anio || !genero) {
    mensaje = "Todos los campos son obligatorios";
  }

  if (titulo && anio && genero) {
    const nuevaPeli = new Pelicula(peliculas.length + 1, titulo, anio, genero);
    peliculas.push(nuevaPeli);

    guardarPeliculas();
    mostrarPeliculas();

    form.reset(); // limpiar formulario
  }

  alert(mensaje);
});

// Cargar desde localStorage si ya hay datos
const peliculasGuardadas = localStorage.getItem("peliculas");
if (peliculasGuardadas) {
  peliculas = JSON.parse(peliculasGuardadas).map(
    (p) => new Pelicula(p.id, p.titulo, p.anio, p.genero)
  );
}

mostrarPeliculas();