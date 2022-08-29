const seccion = document.getElementsByClassName("section");

const divContenedor = document.createElement("div");
divContenedor.id = "productosIndex";
seccion[0].appendChild(divContenedor);
let tituloMenu = document.createElement("h2");
tituloMenu.id = "menu__title";
tituloMenu.innerHTML = "Elegí tu gustito del día";
divContenedor.appendChild(tituloMenu);

const productos = [
  {
    id: 1,
    imagen: "napo.jpg",
    name: "jamon crudo con provolone",
    precio: 1400,
  },
  {
    id: 2,
    imagen: "muzzarella.jpg",
    name: "Muzzarella",
    precio: 1000,
  },
  { id: 3, imagen: "chapignon.jpeg", name: "Champignon", precio: 1600 },
  { id: 4, imagen: "chapignon.jpeg", name: "Especial Albahaca", precio: 1300 },
  { id: 5, imagen: "napo.jpg", name: "Napolitana", precio: 1350 },
  { id: 6, imagen: "chapignon.jpeg", name: "Fugazzeta", precio: 1200 },
];
let carrito = [];
for (let cardItem of productos) {
  let cards = document.createElement("div");
  cards.className = "cardsStyle";
  cards.innerHTML = `<img class= cardImage src= imagenes/${cardItem.imagen}
  />
    <h3 class = "card__title"> ${cardItem.name}</h3> 
    <p class = "card__precio" >  $${cardItem.precio}</p>
    <button class= "comprar__btn" id= "${cardItem.id}">Comprar</button>
    <div class = "confirmacion_carrito"></div>
    `;
  seccion[0].appendChild(cards);
}

//captura del botón  y el div de confirmacion de agragado al carrito en el DOM
let botonesComprar = document.querySelectorAll(".comprar__btn");
let confirmacionCarrito = document.querySelector(".confirmacion_carrito");
//recorro los botones de los productos y les asigno el evento para que al hacer click, agregue los productos al carrito
botonesComprar.forEach((botonComprar) => {
  botonComprar.addEventListener("click", (e) => {
    let idBoton = parseInt(e.target.id); //acá el id pasa de string a número
    let productoEncontrado = buscarProducto(idBoton); //en base al número (orieginalmente del id del botón) busca el producto en el array
    agregarProducto(productoEncontrado); //pushea el objeto (producto) al array (carrito)
    guardaCarrito(carrito);

    /*JUSTIFICACIÓN DE LIBRERÍA: Elegí usar Toastify porque me parece la librería más apropiada para este caso en el que sólo necesito que aparezca un mensaje breve que notifique al usuario que se agregó el producto al carrito */
    Toastify({
      text: `La pizza de ${productoEncontrado.name} fue agregada al carrito de compras`,
      duration: 4000,
      destination: "https://github.com/apvarun/toastify-js",
      close: true,
      gravity: "top",
      position: "right",
      style: {
        color: "#FF5733",
        background: "linear-gradient(to right,#FBFCFC , #F8F9F9 )",
      },
    }).showToast();
    //confirmacionCarrito.innerHTML = `La pizza de: ${productoEncontrado.name} fue agregada al carrito de compras`;
    /*  console.log(
      `La pizza de: ${productoEncontrado.name} fue agregada al carrito de compras`
    ); */
  });
});
function buscarProducto(id) {
  return productos.find((elemento) => elemento.id == id);
}
function agregarProducto(producto) {
  carrito.push(producto);
  console.log(carrito);
}

//HASTA ACÁ EL CARRITO FUNCIONANDO DEVUELVE ARRAY EN CONSOLA

function carritoRecuperar() {
  JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardaCarrito(carrito) {
  localStorage.setItem("carritoJson", JSON.stringify(carrito));
}
