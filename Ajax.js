const URLJSON = "./hamburguesas.json"

$.get(URLJSON, function (respuesta, estado){
                    if (estado ==="success"){
                        let misDatos= respuesta;
                        for (const dato of misDatos){
                            $(".Productos").append(` <div class="card text-white bg-secondary" style="width: 18rem;">
                            <img src="${dato.imagen}" class="card-img-top" alt="${dato.nombre}">
                            <div class="card-body">
                              <h5 class="card-title">${dato.nombre}</h5>
                              <p class="card-text">${dato.ingredientes}</p>
                              <p class="card-text">Precio: $${dato.precio}</p>
                              <a href="#" id='agregar${dato.nombre}' class="btn btn-dark">Agregar al carrito</a>
                            </div>
                          </div>`)
                        }
                    };
});
console.log(respuesta)