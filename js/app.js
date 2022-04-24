//* VARIABLES

//selecciona el contenedor de carrito
const carrito = document.querySelector('#carrito');
//selecciona tbody donde se inyecta de forma dinámica el HTML
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
//selecciona el contenedor de cursos 
const listaCursos = document.querySelector('#lista-cursos');
//selecciona el botón eliminar del carrito
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
//es nuestro carrito de compras que inicia vació
let articulosCarrito = [];


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
        //estoy subiendo al div que contiene todos los datos donde está el elemento para tener acceso a ellos
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
        //obtengo el titulo del curso 
        titulo: curso.querySelector('h4').textContent,
        //obtengo el precio con rebaja que es el texto dentro del span con la clase .precio
        precio: curso.querySelector('.precio span').textContent,
        //cada curso tiene un id para acceder obtengo el atributo (data-id) del elemento (<a></a>)
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);

    if (existe) {
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            }else{
                return curso;// retorna los objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else{
        //agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito,infoCurso];
    }

    carritoHTML();
}


//muestra el carrito de compras en el HTML
function carritoHTML(){
    //limpiar el HTML
    limpiarHTML();
    // Recorre el carrito y genera el Html
    articulosCarrito.forEach(curso =>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}" > X </a>
            </td>
            `;
            //el ultimo td es la x para borrar cursos del carrito la class ya esta definida en custom.css

        //agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

//Elimina los cursos de tbody
function limpiarHTML(){
    //forma lenta de limpiar HTML
    //contenedorCarrito.innerHTML = "";

    //mientras el contenedor tenga hijos dentro los elimina, esto es para limpiar el html
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

