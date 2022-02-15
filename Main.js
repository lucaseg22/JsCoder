class Burger {
    constructor (nombre, ingredientes, precio) {
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
}
}

class ShoppingCart {
    constructor(date, user) {
     this.date = date
     this.user = user
     this.precioTotal = 0
     this.items = []
}

calcularPrecioTotal () {
    this.items.map((v) => {
        
        this.precioTotal = this.precioTotal + v.precio
        
    });
}           
}

function guardarArray (clave, valor) {
    localStorage.setItem(clave, valor)
};

const Bronx = new Burger ('Bronx', 'Lechuga, tomate, cebolla', 900);
const Queens = new Burger ('Queens', 'Cebolla, cheddar, barbacoa', 800)
const Detroit = new Burger ('Detroit', 'Panceta, Barbacoa, cheddar', 1050)
const Manhattan = new Burger ('Manhattan', 'Aros de cebolla, bondiola, lechuga', 1200)
const Auxiliar = new Burger ('', '', 0)
const shoppingCart = new ShoppingCart (new Date(), 'Lucas', 0, []);
let contador = 0
let i = 0


function animacionCarrito () {
    if (contador > 0) {
        $('#contador').show();
        }
    }
