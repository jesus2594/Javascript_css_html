const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')
let articulosCarrito = []

cargarEventListeners();
function cargarEventListeners(){
    //Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [] //resetamos el arreglo

        limpiarHTML()
    })
}

//Funciones
function agregarCurso(e) {
    e.preventDefault();


    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        

        leerDatosCurso(cursoSeleccionado)
    }
    
}

function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)

        carritoHTML()
    }

}

// Lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
    //console.log(curso)

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    if(existe) {
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;
            }else {
                return curso
            }
        });
        articulosCarrito = [...cursos];
    } else {
        //Agrega Elementos al carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    

    console.log(articulosCarrito)

    carritoHTML();
}   

//muestra el carrito en el html
function carritoHTML() {

    //Limpiar el HTML
    limpiarHTML()


    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = ` 
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        //agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row)
    })
}

//Elimina los cursos del tbody
function limpiarHTML () {

    //forma lenta
    //contenedorCarrito.innerHTML = ''

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

