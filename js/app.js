//* VARIABLES

//selecciona el contenedor de carrito
const carrito = document.querySelector('#carrito');

//selecciona tbody donde se inyecta de forma dinámica el HTML
const listarCarrito = document.querySelector('#lista-carrito tbody');

//selecciona el contenedor de cursos 
const listaCursos = document.querySelector('#lista-cursos');

//selecciona el botón eliminar del carrito
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');


//función para registrar todos los eventListeners
cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCursos)
}


//* FUNCIONES
//esta función se ejecuta después de escuchar el evento click (cargarEventListener)

function agregarCursos(e) {
    //prevent evita ese salto hacia el href que tiene el elemento <a></a>
    e.preventDefault();
    //e.target se refiere elemento clickado (en este caso el tag <a></a> dentro del <div id="lista-cursos"></div>)
    //si ese elemento contiene dentro de sus clases (agregar-carrito) ejecuto el if
    if (e.target.classList.contains('agregar-carrito')){
        //estoy subiendo al padre del elemento para tener acceso a los datos del curso 
        const cursoSeleccionado = e.target.parentElement.parentElement;
        //llamo a la función que lee los datos y le paso la variable que contiene el elemento raíz 
        leerDatosCurso(cursoSeleccionado);
    }
    
}


// lee el contenido HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso){
    
    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        //obtengo la img
        imagen: curso.querySelector('img').src,
        //obtengo el yiyulo del curso 
        titulo: curso.querySelector('h4').textContent,
        //obtengo el precio con rebaja que es el texto dentro del span con la clase .precio
        precio: curso.querySelector('.precio span').textContent,
        //cada curso tiene un id para acceder obtengo el atributo (data-id) del elemento (<a></a>)
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    console.log(infoCurso);
}

