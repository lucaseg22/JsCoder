
$(document).on('click','.delete', function borrar() {
    $(this).parent().remove();
    contador --;
    i --;
    $('#numero').remove('#numero')
    if (contador == 0) {
    $('#contador').hide();
    } else {$('#contador').show();}
    $('#contador').append(`<p id='numero'> ${contador} </p>`)
    animacionCarrito();

    let nombre = $(this).parent().get(0)
    shoppingCart.items.splice(nombre.id, 1, Auxiliar)
   
    if (i >= 1 ){

                $('.precio').remove('.precio');
                shoppingCart.precioTotal = 0;
                shoppingCart.calcularPrecioTotal();
                $('#precioCarrito').append(`<p class='precio'>$ ${shoppingCart.precioTotal}</p>`);
            } else { 
                $('.precio').remove('.precio');
                shoppingCart.precioTotal = 0
                shoppingCart.calcularPrecioTotal()}

    guardarArray('Carrito de compras', JSON.stringify(shoppingCart));
    console.log(shoppingCart.precioTotal);
});