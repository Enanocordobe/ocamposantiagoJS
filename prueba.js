//Variables
const tarjetas = document.getElementById("tarjetas");
const mercaderia = document.getElementById("mercaderia");
const tarjetaProductos = document.getElementById("tarjetas-prod").content;
const calculadoraPie = document.getElementById("calculadora").content;
const templateCarrito = document.getElementById("carreta").content;
const fragment = document.createDocumentFragment();
let carrito = {}
//Recibir informacion del Json donde guardamos nuestros arrays de objetos
document.addEventListener("DOMContentLoaded", () =>{
    fetchData();
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        pintarCarrito()
    }
});
const fetchData = async () =>{    
    try {
        const res = await fetch("prueba.json");
        const data = await res.json();        
        mostrarProductos(data);
    } catch (error) {
        console.log(error);        
    }  
 } 

const mostrarProductos = data =>{
    data.forEach(producto => {
    tarjetaProductos.querySelector("h5").textContent = producto.title;
    tarjetaProductos.querySelector("p").textContent = producto.precio;
    tarjetaProductos.querySelector("img").setAttribute("src", producto.thumbnailUrl);
    tarjetaProductos.querySelector(".btn-primary").dataset.id = producto.id;
    const clone = tarjetaProductos.cloneNode(true); 
    fragment.appendChild(clone);
    });    
    tarjetas.appendChild(fragment);
 }
 //Eventos

tarjetas.addEventListener("click", e => {
    addCarrito(e);
});
mercaderia.addEventListener('click', e => { btnAumentarDisminuir(e) });
const addCarrito = e => {
        if (e.target.classList.contains(`btn-primary`)){
            setCarrito(e.target.parentElement);
        }
        e.stopPropagation();
    }

const setCarrito = (objeto) => {        
const producto = {
        id: objeto.querySelector(".btn-primary").dataset.id,
        title: objeto.querySelector("h5").textContent,
        precio: objeto.querySelector("p").textContent,
        cantidad: 1
    }
    console.log(producto)
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1;
    }
    
    carrito[producto.id] = {...producto};
    pintarCarrito();
    
    }
    const pintarCarrito = () => {
    mercaderia.innerHTML = "";
        Object.values(carrito).forEach(producto => {
            templateCarrito.querySelector("th").textContent = producto.id;
            templateCarrito.querySelectorAll("td")[0].textContent = producto.title;
            templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad;
            templateCarrito.querySelector(".btn-info").dataset.id = producto.id;
            templateCarrito.querySelector(".btn-danger").dataset.id = producto.id;
            templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio;
            const clone = templateCarrito.cloneNode(true);
            fragment.appendChild(clone);
        })
        mercaderia.appendChild(fragment);
        pintarFooter();
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    const pintarFooter = () => {
        footer.innerHTML = ``;
        if (Object.keys(carrito).length === 0) {
            footer.innerHTML = `        
        <th scope= "row" colspan = "5">Carrito vacio con InnterHTML</th>;`;
        return;
    }    
    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0);
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0);
    calculadoraPie.querySelectorAll("td")[0].textContent = nCantidad;
    calculadoraPie.querySelector("span").textContent = nPrecio;
    const clone = calculadoraPie.cloneNode(true);
    fragment.appendChild(clone);
    footer.appendChild(fragment);
    const btnVaciar = document.getElementById("vaciar-carrito");
    btnVaciar.addEventListener("click",() => {
    carrito = {}
    pintarCarrito();
    })
    }
    const btnAumentarDisminuir = e => {        
        if (e.target.classList.contains('btn-info')) {            
            const producto = carrito[e.target.dataset.id];
            producto.cantidad++;         
            carrito[e.target.dataset.id] = {...producto};
            pintarCarrito();
        }
    
        if (e.target.classList.contains('btn-danger')) {
            const producto = carrito[e.target.dataset.id];
            producto.cantidad--;
            if (producto.cantidad === 0) {
                delete carrito[e.target.dataset.id];
            } else {
                carrito[e.target.dataset.id] = {...producto};
            }
            pintarCarrito();
        }
        e.stopPropagation();
    }