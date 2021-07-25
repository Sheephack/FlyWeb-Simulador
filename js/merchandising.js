// Area de Merchandising

// Uso de JSON local para spawnear los items a poder ser comprados
const productsJson = "./json/products.json";
$.getJSON(productsJson, function(data, status){
    let jsonData = data
    if (status === "success"){
        $("#toggleProducts").one("click", () =>{
            for (product of jsonData){
                $("#merchandising").fadeIn(3000).css('display', 'flex').append(`<div class="card col-sm-6"> <img src="img/${product.imageName}" class="card-img-top" alt="Foto de ${product.name}">
                <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.text}</p>
                <p class="card-text"><small class="text-muted">Costo: U$D${product.price}.</small></p>
                </div><div class="card-footer">
                <button class="btn btn-dark product-add" id="product${product.id}">Añadir al carrito</button>
              </div>
                `)
            } // Aca abajo se encuentra la funcionalidad de eliminar individualmente los items agregados al carrito asi como la posibilidad de incluirlos al mismo.
                $(`#product1`).click(() =>{
                    $("#merchSection").fadeIn("fast").css("display", "flex")
                    productsPurchased.push(parseInt(`${jsonData[0].price}`))
                    $("#merchSection").append(`<div class="card flexedMerch col-sm-6" id="added${jsonData[0].id}"> <img src="img/${jsonData[0].imageName}" class="card-img-top" alt="Foto de ${jsonData[0].name}">
                    <div class="card-body">
                    <h5 class="card-title">${jsonData[0].name}</h5>
                    <p class="card-text">${jsonData[0].text}</p>
                    <p class="card-text"><small class="text-muted">Costo: U$D${jsonData[0].price}.</small></p>
                    <button class="btn btn-dark product-add" id="remove${jsonData[0].id}">Quitar</button></div>
                    `).fadeIn("slow")
                    Toast.fire({ //uso de SweetAlerts para ayuda visual
                        icon: 'success',
                        title: `${jsonData[0].name} agregado al carrito!`
                    })
                    $("#remove1").click(() =>{
                        $(() =>{
                            $("#added1").remove()
                            for( var i = 0; i < productsPurchased.length; i++){ 
                                if ( productsPurchased[i] === 200) { 
                                    productsPurchased.splice(i, 1); 
                                    i--; 
                                }
                            }
                        })
                    })                        
                    
                })
                $("#product2").click(() =>{
                    $("#merchSection").fadeIn("fast").css("display", "flex")
                    productsPurchased.push(parseInt(`${jsonData[1].price}`))
                    $("#merchSection").append(`<div class="card col-sm-6" id="added${jsonData[1].id}"> <img src="img/${jsonData[1].imageName}" class="card-img-top" alt="Foto de ${jsonData[1].name}">
                    <div class="card-body">
                    <h5 class="card-title">${jsonData[1].name}</h5>
                    <p class="card-text">${jsonData[1].text}</p>
                    <p class="card-text"><small class="text-muted">Costo: U$D${jsonData[1].price}.</small></p>
                    <button class="btn btn-dark product-add" id="remove${jsonData[1].id}">Quitar</button></div>
                    `).fadeIn("slow")
                    Toast.fire({
                        icon: 'success',
                        title: `${jsonData[1].name} agregado al carrito!`
                    })
                    $("#remove2").click(() =>{
                        $(() =>{
                            $("#added2").remove()
                            for( var i = 0; i < productsPurchased.length; i++){ 
                                if ( productsPurchased[i] === 150) { 
                                    productsPurchased.splice(i, 1); 
                                    i--; 
                                }
                            }
                        })
                    })
                })
                $("#product3").click(() =>{
                    $("#merchSection").fadeIn("fast").css("display", "flex")
                    productsPurchased.push(parseInt(`${jsonData[2].price}`))
                    $("#merchSection").append(`<div class="card col-sm-6" id="added${jsonData[2].id}"> <img src="img/${jsonData[2].imageName}" class="card-img-top" alt="Foto de ${jsonData[2].name}">
                    <div class="card-body">
                    <h5 class="card-title">${jsonData[2].name}</h5>
                    <p class="card-text">${jsonData[2].text}</p>
                    <p class="card-text"><small class="text-muted">Costo: U$D${jsonData[2].price}.</small></p>
                    <button class="btn btn-dark product-add" id="remove${jsonData[2].id}">Quitar</button></div>
                    `).fadeIn("slow")
                    Toast.fire({
                        icon: 'success',
                        title: `${jsonData[2].name} agregado al carrito!`
                    })
                    $("#remove3").click(() =>{
                        $(() =>{
                            $("#added3").remove()
                            for( var i = 0; i < productsPurchased.length; i++){ 
                                if ( productsPurchased[i] === 400) { 
                                    productsPurchased.splice(i, 1); 
                                    i--; 
                                }
                            }
                        })
                    })
                })
                $("#product4").click(() =>{
                    $("#merchSection").fadeIn("fast").css("display", "flex")
                    productsPurchased.push(parseInt(`${jsonData[3].price}`))
                    $("#merchSection").append(`<div class="card col-sm-6" id="added${jsonData[3].id}"> <img src="img/${jsonData[3].imageName}" class="card-img-top" alt="Foto de ${jsonData[3].name}">
                    <div class="card-body">
                    <h5 class="card-title">${jsonData[3].name}</h5>
                    <p class="card-text">${jsonData[3].text}</p>
                    <p class="card-text"><small class="text-muted">Costo: U$D${jsonData[3].price}.</small></p>
                    <button class="btn btn-dark product-add" id="remove${jsonData[3].id}">Quitar</button></div>
                    `).fadeIn("slow")
                    Toast.fire({
                        icon: 'success',
                        title: `${jsonData[3].name} agregado al carrito!`
                    })
                    $("#remove4").click(() =>{
                        $(() =>{
                            $("#added4").remove()
                            for( var i = 0; i < productsPurchased.length; i++){ 
                                if ( productsPurchased[i] === 300) { 
                                    productsPurchased.splice(i, 1); 
                                    i--; 
                                }
                            }
                        })
                    })
                })
                $("#product5").click(() =>{
                    $("#merchSection").fadeIn("fast").css("display", "flex")
                    productsPurchased.push(parseInt(`${jsonData[4].price}`))
                    $("#merchSection").append(`<div class="card col-sm-6" id="added${jsonData[4].id}"> <img src="img/${jsonData[4].imageName}" class="card-img-top" alt="Foto de ${jsonData[4].name}">
                    <div class="card-body">
                    <h5 class="card-title">${jsonData[4].name}</h5>
                    <p class="card-text">${jsonData[4].text}</p>
                    <p class="card-text"><small class="text-muted">Costo: U$D${jsonData[4].price}.</small></p>
                    <button class="btn btn-dark product-add" id="remove${jsonData[4].id}">Quitar</button></div>`).fadeIn("slow")
                    Toast.fire({
                        icon: 'success',
                        title: `${jsonData[4].name} agregado al carrito!`
                    })
                    $("#remove5").click(() =>{
                        $(() =>{
                            $("#added5").remove()
                            for( var i = 0; i < productsPurchased.length; i++){ 
                                if ( productsPurchased[i] === 1000) { 
                                    productsPurchased.splice(i, 1); 
                                    i--; 
                                }
                            }
                        })
                    })
                })
                $("#product6").click(() =>{
                    $("#merchSection").fadeIn("fast").css("display", "flex")
                    productsPurchased.push(parseInt(`${jsonData[5].price}`))
                    $("#merchSection").append(`<div class="card col-sm-6" id="added${jsonData[5].id}"> <img src="img/${jsonData[5].imageName}" class="card-img-top" alt="Foto de ${jsonData[5].name}">
                    <div class="card-body">
                    <h5 class="card-title">${jsonData[5].name}</h5>
                    <p class="card-text">${jsonData[5].text}</p>
                    <p class="card-text"><small class="text-muted">Costo: U$D${jsonData[5].price}.</small></p>
                    <button class="btn btn-dark product-add" id="remove${jsonData[5].id}">Quitar</button></div>`).fadeIn("slow")
                    Toast.fire({
                        icon: 'success',
                        title: `${jsonData[5].name} agregado al carrito!`
                    })
                    $("#remove6").click(() =>{
                        $(() =>{
                            $("#added6").remove()
                            for( var i = 0; i < productsPurchased.length; i++){ 
                                if ( productsPurchased[i] === 5) { 
                                    productsPurchased.splice(i, 1); 
                                    i--; 
                                }
                            }
                        })
                    })
                })
                $("#product7").click(() =>{
                    $("#merchSection").fadeIn("fast").css("display", "flex")
                    productsPurchased.push(parseInt(`${jsonData[6].price}`))
                    $("#merchSection").append(`<div class="card col-sm-6" id="added${jsonData[6].id}"> <img src="img/${jsonData[6].imageName}" class="card-img-top" alt="Foto de ${jsonData[6].name}">
                    <div class="card-body">
                    <h5 class="card-title">${jsonData[6].name}</h5>
                    <p class="card-text">${jsonData[6].text}</p>
                    <p class="card-text"><small class="text-muted">Costo: U$D${jsonData[6].price}.</small></p>
                    <button class="btn btn-dark product-add" id="remove${jsonData[6].id}">Quitar</button></div>`).fadeIn("slow")
                    Toast.fire({
                        icon: 'success',
                        title: `${jsonData[6].name} agregado al carrito!`
                    })
                    $("#remove7").click(() =>{
                        $(() =>{
                            $("#added7").remove()
                            for( var i = 0; i < productsPurchased.length; i++){ 
                                if ( productsPurchased[i] === 100) { 
                                    productsPurchased.splice(i, 1); 
                                    i--; 
                                }
                            }
                        })
                    })
                })
        })
    }
})