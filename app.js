const productos = [
    {nombre: "Kayak", precio: 10 },
    {nombre: "Essencial", precio: 20 },
    {nombre: "Agua", precio: 50 },
    {nombre: "Jazmin", precio: 40 }, 
    {nombre: "Cremita", precio: 60},   
];
let carrito = [];
let cliente = prompt("Buenos dias bienvenido Natura, Ingrese su nombre");
let seleccion = prompt (`"Hola ${cliente}, desea comprar algun producto? si o no"`);
while(seleccion != "si" && seleccion != "no"){
    alert ("por favor ingresa si o no");
    seleccion = prompt("Hola desea comprar algo si o no");
}
if (seleccion == "si"){
    alert(`${cliente} a continuacion nuestra lista de productos"`);
    let todoslosProductos = productos.map((producto)  => producto.nombre + " " + "$" + producto.precio );
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por venir, hasta pronto")
}

while(seleccion != "no"){
    let producto = prompt(`${cliente}agrega un producto a tu carrito`)
    let precio = 0

    if(producto == "Kayak" || producto == "Essencial" || producto == "Agua" || producto == "Jazmin" || producto == "Cremita"){
        switch (producto){
            case "Kayak":
                precio = 50;
                break;
            case "Essencial":
                precio = 40;
                break;
             case "Agua":
                precio = 60;
                break;
            case "Jazmin":
                precio = 100;
                break;
            case "Cremita":
                precio = 50;
                break;
                default:
                    break;
        }
    let unidades = parseInt(prompt(`${cliente}Ingrese  cantidad`))
    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert ("no tenemos ese producto ")
    }
    seleccion = prompt("desea seguir comprando??")
    while (seleccion == "no") {
        alert(`gracias por la compra! ${cliente} hasta pronto`)
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)            
        })
        break;        
    }
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`Debera abonar: ${total}`)