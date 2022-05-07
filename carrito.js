// Variables para carrito

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('#lista-productos');

let articulosCarrito = [];

registrarEventListeners();

function registrarEventListeners(){
    //Agregar un producto la hacer click en agregar carrito
    listaProductos.addEventListener('click', agregarProducto);
}

//Funciones

function agregarProducto(e){
    e.preventDefault();

    if(e.target.classList.contains('add-cart')){
        const productoSeleccionado = e.target.parentElement.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
    
    
}

//Leer el contenido al que hicimos click y extrarer su contenido

function leerDatosProducto(producto){
    console.log(producto);

    // crear un objeto con el contenido actual
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('.description').textContent,
        precio: producto.querySelector('.price p').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1

    }

    console.log(infoProducto);

    //Agregar elementos al articulo carrito
    articulosCarrito = [...articulosCarrito, infoProducto];

    console.log(articulosCarrito);

    carritoHTML();
}

//Mostrar el contenido del carrito de compras en el HTML
function carritoHTML(){
    articulosCarrito.forEach( producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${producto.imagen},
                ${producto.titulo},
                ${producto.precio}
            </td>
        `;

        //Agregar el HTML del carrito a el tbody
        contenedorCarrito.appendChild(row);
    });
}