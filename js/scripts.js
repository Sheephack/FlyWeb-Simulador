const viaje = []
const selectedDestinations = []
let noInterestTravel
let masterYes = 0
let visaYes = 0
let americanYes = 0
let destinationSpeach = ["Disfruta del hermoso recorrido por las ciudades de ", 
                        "Pasea por las calles de ", 
                        "El recorrido sera inolvidable, disfruta de ",
                        "Nunca viviste nada igual, disfruta de un paseo por ",
                        `La gente de este hermoso continente te hara disfrutar de `]


// Constructor
class Destino{
    constructor (continent, price, time, citiesNumber, tax, image, citiesNames, passengers){
        this.continent = continent;
        this.price = parseFloat(price);
        this.time = time;
        this.citiesNumber = citiesNumber;
        this.tax = parseFloat(tax);
        this.image = image;
        this.citiesNames = citiesNames;
        this.passengers = passengers;
    }
    applyFullPricePerPassangerCount(){
        this.price = this.price * this.tax * 1.21 * this.passengers;
    }
}
//  array
let destinations = [
    europa = new Destino("Europa", 4500, 3, 14, 1.13, "europe.png", "Roma, Paris, Ámsterdam, Praga, Viena, Londres, Budapest, Berlín, Madrid, Atenas, Barcelona, Lisboa, Edimburgo y Bruselas"), 
    asia = new Destino("Asia", 5000, 4, 13, 1.14, "asia.png", "Pekín, Shanghái, Bombay, Nueva Delhi, Seúl, Yakarta, Hong Kong, Bagdad, Tokio, Osaka, Moscú, Volgogrado y San Petersburgo"),
    aDelNorte = new Destino("America del Norte", 4000, 4, 12, 1.26, "namerica.png", "Nueva York, Los Ángeles, Toronto, Washington D.C., Seattle, Las Vegas, Orlando, Miami, Ottawa, Vancouver, Ciudad de Mexico y Cancún "),
    africa = new Destino("Africa", 2500, 5, 7, 1.1, "africa.png", "El Cairo, Johannesburgo, Nairobi, Ciudad del Cabo, Jerusalén, Abu Dabi y Dubái"),
    aDelSur = new Destino("America del Sur", 3000, 4, 18, 1.43, "samerica.png", "Buenos Aires, San Carlos de Bariloche, Isla San Andres, Cordoba, La Habana, Río de Janeiro, Cartagena, Bogotá, Lima, Medellín, Montevideo, Quito, Cali, Brasilia, Asunción, Cusco, Manaos y Santiago de Chile"),
    oceania = new Destino("Oceania", 2000, 2, 6, 1.23, "oceania.png", "Melbourne, Sídney, Perth, Auckland, Gladstone y Canberra")
]

// Funciones
// Funcion para resetear los valores originales sin impuestos.
const resetDestinations = () =>{
    destinations = []
    destinations = [
        europa = new Destino("Europa", 4500, 3, 14, 1.13, "europe.png", "Roma, Paris, Ámsterdam, Praga, Viena, Londres, Budapest, Berlín, Madrid, Atenas, Barcelona, Lisboa, Edimburgo y Bruselas"), 
        asia = new Destino("Asia", 5000, 4, 13, 1.14, "asia.png", "Pekín, Shanghái, Bombay, Nueva Delhi, Seúl, Yakarta, Hong Kong, Bagdad, Tokio, Osaka, Moscú, Volgogrado y San Petersburgo"),
        aDelNorte = new Destino("America del Norte", 4000, 4, 12, 1.26, "namerica.png", "Nueva York, Los Ángeles, Toronto, Washington D.C., Seattle, Las Vegas, Orlando, Miami, Ottawa, Vancouver, Ciudad de Mexico y Cancún "),
        africa = new Destino("Africa", 2500, 5, 7, 1.1, "africa.png", "El Cairo, Johannesburgo, Nairobi, Ciudad del Cabo, Jerusalén, Abu Dabi y Dubái"),
        aDelSur = new Destino("America del Sur", 3000, 4, 18, 1.43, "samerica.png", "Buenos Aires, San Carlos de Bariloche, Isla San Andres, Cordoba, La Habana, Río de Janeiro, Cartagena, Bogotá, Lima, Medellín, Montevideo, Quito, Cali, Brasilia, Asunción, Cusco, Manaos y Santiago de Chile"),
        oceania = new Destino("Oceania", 2000, 2, 6, 1.23, "oceania.png", "Melbourne, Sídney, Perth, Auckland, Gladstone y Canberra")
    ]
}

const sumaValorPropiedades = (array, valor) =>{
    return array.map(d => d[valor]).reduce((a, v) => a + v, 0)
};

//En funcíon newPrice, se manipula el DOM para resaltar agregando una clase, la tarjeta seleccionada.

const newPrice = (quota) =>{
    if (quota == 3){
        return fullTravelData["precio"] / quota;
    }else if (quota == 6){
        interest = fullTravelData["precio"] * 1.3;
        return interest / quota; 
    }else if (quota == 9){
        if (cardValidation == "Master"){
            masterYes = document.getElementById("master_card");
            masterYes.className = "card_selected";
            noInterestTravel = true
            return fullTravelData["precio"] / quota;
        }else{
        interest = fullTravelData["precio"] * 1.6;
        return interest / quota; 
        }    
    }else{
        if (cardValidation == "Visa"){
            visaYes = document.getElementById("visa_card");
            visaYes.className = "card_selected";
            noInterestTravel = true
            return fullTravelData["precio"] / quota;
        }else if (cardValidation == "American"){
                americanYes = document.getElementById("american_card");
                americanYes.className = "card_selected";
                noInterestTravel = true
                return fullTravelData["precio"] / quota;
        }else{
            interest = fullTravelData["precio"] * 1.9;
            return interest / quota; 
        }
    }
}
// Fin funciones
// Boton de carrito

let cartTrigger = document.getElementById("cartButton")
let cart = document.getElementById("basket")
cartTrigger.addEventListener("click", () => {
    if (cart.style.display === "flex"){
        cart.style.display = "none";
    }else{
        cart.style.display = "flex"
}})


// Chequea si quedo contenido en el carrito guardado de la sesion anterior en el localStorage y lo muestra en el carrito
let arrowOfCart = document.getElementById("arrow-icon");
if (localStorage.getItem("finalTravelData") !== null){
    arrowOfCart.style.display = "block"
    cart.style.display = "flex"
    let previousTravelData = JSON.parse(localStorage.getItem("finalTravelData"))
    let previousPassangerData = JSON.parse(localStorage.getItem("passengers"))
    let previousDestinationsData = localStorage.getItem("destinyData")
    stringfiedPreviousDestinations = previousDestinationsData
    console.log(previousTravelData)
    let card = document.createElement("div");
    card.className = "fullTravelDataCard"
    card.innerHTML = `<div class="card text-white bg-dark mb-3 border-light" id="cardOfTravel">
                        <img src="/img/plane_image.jpg" class="card-img-top" alt="Avion despegando">
                            <div class="card-body">
                                <h5 class="card-title">¡Te quedo un viaje pendiente de la ultima vez que estuviste por aca!</h5>
                                <p class="card-text">Aquí encontraras los detalles de tu viaje, chequealos antes de continuar.</p>
                            </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item text-white bg-dark">Valor total: U$D ${previousTravelData.precio}</li>
                            <li class="list-group-item text-white bg-dark">Ciudades recorridas: ${previousTravelData.ciudades}</li>
                            <li class="list-group-item text-white bg-dark">Tiempo de viaje: ${previousTravelData.tiempo} semanas</li>
                            <li class="list-group-item text-white bg-dark">Viajaras por: ${stringfiedPreviousDestinations}</li>
                            <li class="list-group-item text-white bg-dark">Cantidad de pasajeros: ${previousPassangerData}</li>
                        </ul>
                     </div>`
    document.getElementById("basket").appendChild(card);


}else{
    arrowOfCart.style.display = "none"
}



// Nuevo SISTEMA CON EL DOM, SIN PROMPT Y ALERT ABAJO DE ESTA LINEA:
let added;

let selectedContinent = document.getElementById("_destinySelector");
selectedContinent.addEventListener("change", () => {
    added = document.getElementById("_destinySelector").value 
});


let showCaseContainer

let addDestinyButton = document.getElementById("addDestiny");
let showCase
addDestinyButton.addEventListener("click", () => {
    switch(added){
        case "EU":
            viaje.push(destinations[0]);
            selectedDestinations.push("Europa")
            break;
        case "AS":
            viaje.push(destinations[1]);
            selectedDestinations.push("Asia")
            break;
        case "NA":
            viaje.push(destinations[2]);
            selectedDestinations.push("America del Norte")
            break;
        case "AF":
            viaje.push(destinations[3]);
            selectedDestinations.push("Africa")
            break;
        case "SA":
            viaje.push(destinations[4]);
            selectedDestinations.push("America del Sur")
            break;
        case "OC":
            viaje.push(destinations[5]);
            selectedDestinations.push("Oceania")
            break;
        }
    document.getElementById("destinyShowcase").classList.remove("nonVisibleDestinations");
    showCase = document.createElement("div");
    showCase.id = "travelShowCase";
    showCase.className = "card-group"
    for (destino of viaje){
        //Generador de numero random para seleccionar texto de arrays
        let i = Math.floor(4*Math.random())
        showCase.innerHTML = `<div class="card">
                                <img src="img/${destino.image}" class="card-img-top" alt="Mapa de ${destino.continent}">
                                <div class="card-body">
                                <h5 class="card-title">${destino.continent}</h5>
                                <p class="card-text">${destinationSpeach[i]} ${destino.citiesNames}</p>
                                <p class="card-text"><small class="text-muted">Revise los requerimientos y restricciones aplicadas por la pandemia de COVID19 para cada destino.</small></p>
                                </div>
                            </div>`;
        document.getElementById("destinyShowcase").appendChild(showCase)
    }
});

//Inputs de seleccion del viaje
let passengerCount;

let selectedPassengers = document.getElementById("_passengerQuantity");
selectedPassengers.addEventListener("change", () => {
    passengerCount = document.getElementById("_passengerQuantity").value
})

let quotaSelected

let selectedQuota = document.getElementById("_quotaSelector");
selectedQuota.addEventListener("change", () => {
    quotaSelected = parseInt(document.getElementById("_quotaSelector").value)
})

let cardValidation

let selectedCard = document.getElementById("_cardSelector");
selectedCard.addEventListener("change", () => {
    cardValidation = document.getElementById("_cardSelector").value 
});

let finishButton = document.getElementById("travelTrigger");
finishButton.addEventListener("click", () =>{
    switch(passengerCount){
        case "one":
            for (const destinos of viaje){
                destinos.passengers = 1;
                localStorage.setItem("passengers", 1);
            }
            break;
        case "two":
            for (const destinos of viaje){
                destinos.passengers = 2;
                localStorage.setItem("passengers", 2);
            }
            break;
        case "three":
            for (const destinos of viaje){
                destinos.passengers = 3;
                localStorage.setItem("passengers", 3);
            }
            break;
        case "four":
            for (const destinos of viaje){
                destinos.passengers = 4;
                localStorage.setItem("passengers", 4);
            }
            break;
    }

    for (const travel of viaje){
        travel.applyFullPricePerPassangerCount();
    }
//generacion del paquete de viaje
    fullTravelData = {precio: parseFloat(sumaValorPropiedades(viaje, 'price').toFixed(2)), ciudades: sumaValorPropiedades(viaje, 'citiesNumber'), tiempo: sumaValorPropiedades(viaje, 'time')};
    fullprice = newPrice(quotaSelected);
    const dataInStorage = JSON.stringify(fullTravelData);
    localStorage.setItem("finalTravelData", dataInStorage);
    localStorage.setItem("destinyData", selectedDestinations)
    const stringOfDestinations = selectedDestinations.join(", ");
//creacion de card en el carrito
    let card = document.createElement("div");
    card.className = "fullTravelDataCard"
    card.innerHTML = `<div class="card text-white bg-dark mb-3 border-light" id="cardOfTravel">
                        <img src="/img/plane_image.jpg" class="card-img-top" alt="Avion despegando">
                            <div class="card-body">
                                <h5 class="card-title">¡Ya estamos casí listos!</h5>
                                <p class="card-text">Aquí encontraras los detalles de tu viaje, chequealos antes de continuar.</p>
                            </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item text-white bg-dark">Valor total: U$D ${fullTravelData.precio}</li>
                            <li class="list-group-item text-white bg-dark">Ciudades recorridas: ${fullTravelData.ciudades}</li>
                            <li class="list-group-item text-white bg-dark">Tiempo de viaje: ${fullTravelData.tiempo} semanas</li>
                            <li class="list-group-item text-white bg-dark">Viajaras por: ${stringOfDestinations}</li>
                            <li class="list-group-item text-white bg-dark">Cantidad de pasajeros: ${viaje[0].passengers}</li>
                        </ul>
                     </div>`
    document.getElementById("basket").appendChild(card);
    //añade ayuda visual para ir al carrito
    arrowOfCart.style.display = "block"
    //añade informacion sobre el pago
    let paymentMethodDisplay = document.createElement("ul");
    paymentMethodDisplay.className = "list-group list-group-flush";
    paymentMethodDisplay.id = "cardDetails"
    paymentMethodDisplay.innerHTML = `<li class="list-group-item text-white bg-dark">A pagar en ${quotaSelected} cuotas.</li>`
    document.getElementById("cardOfTravel").appendChild(paymentMethodDisplay);
    if (noInterestTravel === true){
        let noInterestCard = document.createElement("li");
        noInterestCard.className = "list-group-item text-white bg-dark";
        noInterestCard.innerHTML = "Gracias a la tarjeta de credito seleccionada, las cuotas son SIN INTERES"
        document.getElementById("cardDetails").appendChild(noInterestCard)
    }else if (quotaSelected === 3){
        let noInterest = document.createElement("li");
        noInterest.className = "list-group-item text-white bg-dark";
        noInterest.innerHTML = "Los pagos en 3 cuotas son SIN INTERES"
        document.getElementById("cardDetails").appendChild(noInterest)
    }
    // funcionalidad del boton de reset
    let resetButton = document.createElement("button");
    resetButton.className = "btn btn-dark"
    resetButton.id = "_resetButton"
    resetButton.innerHTML = "Volver a comenzar"
    resetButton.addEventListener("click", () =>{
        for (every of viaje){
        deleteShowCase = document.getElementById("travelShowCase");
        deleteShowCase.parentNode.removeChild(deleteShowCase)
        }
        fullprice = 0
        selectedDestinations.length = 0;
        fullTravelData = 0;
        noInterestTravel = false;
        card.parentNode.removeChild(card); 
        card = 0;
        showCase = 0;
        added = 0
        passengerCount = 0
        quotaSelected = 0
        cardValidation = 0
        viaje.length = 0;
        if (masterYes != 0){
            masterYes.classList.remove("card_selected");
        }
        if (visaYes != 0){
            visaYes.classList.remove("card_selected");
        }
        if (americanYes != 0){
            americanYes.classList.remove("card_selected");
        }
        resetDestinations()
        document.getElementById("destinyShowcase").classList.add("nonVisibleDestinations")  
        localStorage.clear()
        arrowOfCart.style.display = "none"
    })
    document.getElementById("cardOfTravel").appendChild(resetButton);
});


// Codigo en contruccion, aun no le encuentro la vuelta a esta parte. La construire para la proxima entrega.
/// Area de Merchandising

// const productos = []

// class Producto{
//     constructor (id, name, precio, available, imageName){
//         this.id = id;
//         this.name = name;
//         this.precio = precio;
//         this.available = available;
//         this.imageName = imageName;
//     }
// };

// productos.push(new Producto(1, "Almohada", 200, true, "almohada.png"));
// productos.push(new Producto(2, "Cubre ojos", 150, true, "antifaz.png"));
// productos.push(new Producto(3, "Mapa marcable", 1400, false, "mapaRaspable.png"));
// productos.push(new Producto(4, "Vaso termico", 1200, true, "vasoTermico.png"));
// productos.push(new Producto(5, "Maqueta a escala", 2000, true, "avionAEscala.png"));
// productos.push(new Producto(6, "Lanyard", 125, true, "lanyard.png"));
// productos.push(new Producto(7, "Remera", 1300, true, "remera.png"));

// saleOfMerch = []

// for (producto of productos){
//     merch = document.createElement("div");
//     merch.className = "card"
//     merch.innerHTML = ` <img src="img/${producto.imageName}" class="card-img-top" alt="Foto de ${producto.name}">
//                         <div class="card-body">
//                         <h5 class="card-title">${producto.name}</h5>
//                         <p class="card-text">Aca va un texto random</p>
//                         <p class="card-text"><small class="text-muted">Costo: U$D${producto.precio}.</small></p>
//                         <button class="btn btn-dark product-add" id="${producto.id}">Añadir al carrito</button>`;
//     document.getElementById("merchandising").appendChild(merch)
// }



// // let merchAdd = document.getElementsByClassName("product-add")
// // Array.from(merchAdd).forEach(function(merchAdd){
// //     merchAdd.addEventListener("click", () =>{
// //     for (let id of merchAdd){
// //         console.log(id)
// //     }

// //     newProductAdded = document.createElement("div")
// //     newProductAdded.className = "card"
// //     newProductAdded.innerHTML = ` <img src="img/${producto.imageName}" class="card-img-top" alt="Foto de ${producto.name}">
// //                                 <div class="card-body">
// //                                 <h5 class="card-title">${producto.name}</h5>
// //                                 <p class="card-text">Aca va un texto random</p>
// //                                 <p class="card-text"><small class="text-muted">Costo: U$D${producto.precio}.</small></p>
// //                                 <button class="btn btn-dark product-add">Añadir al carrito</button>`;

// //     document.getElementById("basket").appendChild(newProductAdded);
// //     document.getElementById("basket").classList.remove("non_visible")
    
// // })});

// // console.log(merchAdd)