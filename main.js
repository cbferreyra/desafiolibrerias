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
  {
    id: 4,
    imagen: "chapignon.jpeg",
    name: "Especial Albahaca",
    precio: 1300,
  },
  { id: 5, imagen: "napo.jpg", name: "Napolitana", precio: 1350 },
];
for (let cardItem of productos) {
  let cards = document.createElement("div");
  cards.className = "cardsStyle";
  cards.innerHTML = `<img class= cardImage src= imagenes/${cardItem.imagen}
  />
    <h3 class = "card__title"> ${cardItem.name}</h3> 
    <p class = "card__precio" >  $${cardItem.precio}</p>
    `;
  seccion[0].appendChild(cards);
}
let card = document.getElementsByClassName("cardsStyle");
console.log(card);
let boton1 = document.createElement("button");
let boton2 = document.createElement("button");
let boton3 = document.createElement("button");
let boton4 = document.createElement("button");
let boton5 = document.createElement("button");
boton1.id = "1";
boton2.id = "2";
boton3.id = "3";
boton4.id = "4";
boton5.id = "5";
card[0].appendChild(boton1);
card[1].appendChild(boton2);
card[2].appendChild(boton3);
card[3].appendChild(boton4);
card[4].appendChild(boton5);
console.log(boton1);
boton1.innerHTML = "Comprar";
boton2.innerHTML = "Comprar";
boton3.innerHTML = "Comprar";
boton4.innerHTML = "Comprar";
boton5.innerHTML = "Comprar";

let idBoton1 = parseInt(boton1.id);
console.log(idBoton1);
/* function buscarProducto(id) {
  return productos.find((elemento) => elemento.id == id);}


function avisoCompra() {
  console.log("Enviado al carrito!");
}

boton1.addEventListener("click", avisoCompra);
 */
/* function agregarProducto(producto) {
  carrito.push(producto);
  console.log(carrito);
} */
//fx buscar elemento por el id
/* function buscarProducto(id) {
  return productos.find((elemento) => elemento.id == id);
} */
/* <button class ="card__btn">Comprar</button> */
//let productoElegido = buscarProducto();
/* boton1.addEventListener("click", buscarProducto(parseInt(boton1.className)));
let productoElegido = buscarProducto(); */
//fx busca el producto en el array(objeto) por el id y lo guarda en producatoElegido
//console.log(productoElegido); //muestro el objeto que encontró la fx por el id

/* agregarProducto(productoElegido); //AGREGO EL OBJETO (Producto) al array CARRITO
console.log(carrito);
 */
