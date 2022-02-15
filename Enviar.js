
$('#comprar').click(function (e) { 
    e.preventDefault();
    window.scrollTo(0,document.body.scrollHeight);
    $('footer').prepend(`<form id='contact' onsubmit='window.location.reload()' > 
                                <input type="text" placeholder="Nombre"></input> 
                                <input type="text" placeholder="Apellido"></input> 
                                <input type="text" placeholder="Direccion"></input>
                                <input type="text" placeholder="Celular"></input> 
                                    <Button type='submit' id='enviar'> Enviar pedido</Button> 
                        </form>`);
});

$(document).on('click', '#enviar', function (e){
    alert('Pedido enviado!')
});