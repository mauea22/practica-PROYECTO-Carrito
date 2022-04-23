//* VARIABLES

//selecciona el contenedor de carrito
const carrito = document.querySelector('#carrito');

//selecciona tbody donde se inyecta de forma dinámica el HTML
const listarCarrito = document.querySelector('#lista-carrito tbody');

//selecciona el contenedor de cursos 
const listaCursos = document.querySelector('#lista-cursos');

//selecciona el botón eliminar del carrito
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');


//función para cargar los eventListeners
cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCursos)
}


//* FUNCIONES

function agregarCursos() {
    console.log("agregando al carrito");
}