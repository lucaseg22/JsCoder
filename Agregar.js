
$(document).on('click', '#agregarBronx', function (e) { 
    e.preventDefault();
    i++
    contador++
    if (i > 1 ){
        $('.precio').remove('.precio');
        shoppingCart.precioTotal = 0
    }
    shoppingCart.items.push(Bronx)
    shoppingCart.calcularPrecioTotal();

    $('#carrito').append(`<div id='${shoppingCart.items.length-1}' class='Bronx'>
                            <p id='burger'> ${Bronx.nombre} </p> 
                            <button class="delete"> X </button>
                        </div>`)
    $('#total').append('<div  id="precioCarrito"> </div>');
    $('#precioCarrito').append(`<p class='precio'>$ ${shoppingCart.precioTotal}</p>`);
        $('#numero').remove('#numero');
    $('#contador').append(`<p id='numero'> ${contador} </p>`);

    guardarArray('Carrito de compras', JSON.stringify(shoppingCart));
    animacionCarrito();
});

$(document).on('click', '#agregarQueens', function (e) { 
    e.preventDefault();
    i++
    contador++
    
    if (i > 1 ){
        $('.precio').remove('.precio');
        shoppingCart.precioTotal = 0
    }
    shoppingCart.items.push(Queens)
    shoppingCart.calcularPrecioTotal();
    
    $('#carrito').append(`<div id='${shoppingCart.items.length-1}' class='Queens'>
                            <p id='burger'> ${Queens.nombre} </p> 
                            <button class="delete"> X </button>
                        </div>`)
    $('#total').append('<div id="precioCarrito"> </div>');
    $('#precioCarrito').append(`<p class='precio'>$ ${shoppingCart.precioTotal}</p>`);
    $('#numero').remove('#numero')
    $('#contador').append(`<p id='numero'> ${contador} </p>`)

    guardarArray('Carrito de compras', JSON.stringify(shoppingCart))
    animacionCarrito()
});

$(document).on('click', '#agregarDetroit', function (e) { 
    e.preventDefault();
    i++
    contador++
    
    if (i > 1 ){
        $('.precio').remove('.precio');
        shoppingCart.precioTotal = 0
    }
    shoppingCart.items.push(Detroit)
    shoppingCart.calcularPrecioTotal()
    $('#carrito').append(`<div id='${shoppingCart.items.length-1}' class='Detroit'>
                            <p id='burger'> ${Detroit.nombre} </p> 
                            <button class="delete"> X </button>
                        </div>`
                        )
    $('#total').append('<div id="precioCarrito"> </div>');
    $('#precioCarrito').append(`<p class='precio'>$ ${shoppingCart.precioTotal}</p>`);
    $('#numero').remove('#numero')
    $('#contador').append(`<p id='numero'> ${contador} </p>`)

    guardarArray('Carrito de compras', JSON.stringify(shoppingCart))
    animacionCarrito()
});

$(document).on('click', '#agregarManhattan', function (e) { 
    e.preventDefault();
    i++
    contador++

    if (i > 1 ){
        $('.precio').remove('.precio');
        shoppingCart.precioTotal = 0
    }
    shoppingCart.items.push(Manhattan)
    shoppingCart.calcularPrecioTotal();
    
    $('#carrito').append(`<div id='${shoppingCart.items.length-1}' class='Manhattan'>
                                <p id='burger'> ${Manhattan.nombre} </p>
                                <button class="delete"> X </button> 
                        </div>`)
    $('#total').append('<div id="precioCarrito"> </div>');
    $('#precioCarrito').append(`<p class='precio'>$ ${shoppingCart.precioTotal}</p>`);
    $('#numero').remove('#numero');
    $('#contador').append(`<p id='numero'> ${contador} </p>`);
    
    guardarArray('Carrito de compras', JSON.stringify(shoppingCart))
    animacionCarrito()
});