const viaje = []
const selectedDestinations = []
let noInterestTravel
let masterYes = 0
let visaYes = 0
let americanYes = 0
let fullTravelData
let destinationSpeach = ["Disfruta del hermoso recorrido por las ciudades de ", 
                        "Pasea por las calles de ", 
                        "El recorrido sera inolvidable, disfruta de ",
                        "Nunca viviste nada igual, disfruta de un paseo por ",
                        `La gente de este hermoso continente te hara disfrutar de `]
let productsPurchased = []

// Mixin de Toast
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    iconColor: 'white',
    customClass: {
        popup: 'colored-toast'
    },
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

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
//Llamada AJAX a JSON Local
const jsonLocal = "./json/data.json";
$.getJSON(jsonLocal, function(data, status){
    let infoOfJSON = data
    if (status === "success"){
        $("#toggleAvailable").one ("click", () =>{
            for (destiny of infoOfJSON){
                $("#availableDestinys").fadeIn(3000).css('display', 'flex').append(`<div class="card col-sm-6"> <img src="img/${destiny.image}" class="card-img-top" alt="Foto de ${destiny.continent}">
                <div class="card-body">
                <h5 class="card-title">Destino: ${destiny.continent}</h5>
                <p class="card-text">Las ciudades a visitar: ${destiny.citiesNames}</p></div>
                <div class="card-footer"><small class="text-muted">El costo de este paquete es de: U$D${destiny.price} por persona. El destino tiene un impuesto del ${destiny.tax}%</small></div>
                `)
            }
        })
    }
})



 //array
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
// Boton de carrito
// Animacion concatenada!

let cart = document.getElementById("basket")
$("#cartButton").click(() => {
    if (cart.style.display === "flex" && localStorage.getItem("finalTravelData") == undefined){
        $("#resetButton").fadeOut("fast")
        $("#basket").fadeOut("3000");
    }
    else if (cart.style.display === "flex" && localStorage.getItem("finalTravelData") != undefined){
        $("#resetButton").fadeOut("fast")
        $("#arrow-icon").fadeIn("slow")
        $("#basket").fadeOut("3000");
        
    }else {
        $("#basket").fadeIn("3000").css('display', 'flex')
        $("#resetButton").fadeIn(1000)
        $("#arrow-icon").fadeOut("slow")
    
            
    }

    ;})

// Chequea si quedo contenido en el carrito guardado de la sesion anterior en el localStorage y lo muestra en el carrito
if (localStorage.getItem("finalTravelData") !== null){
    $("#arrow-icon").show()
    $("#basket").css('display', 'flex')
    $("#resetButton2").show().css('display', 'flex')
    let previousTravelData = JSON.parse(localStorage.getItem("finalTravelData"))
    let previousPassangerData = JSON.parse(localStorage.getItem("passengers"))
    let previousDestinationsData = localStorage.getItem("destinyData")
    stringfiedPreviousDestinations = previousDestinationsData
    console.log(previousTravelData)
    $("#travelSection").append(`<div class="fullTravelDataCard"><div class="card text-white bg-dark mb-3 border-light" id="cardOfTravel">
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
 </div></div>`);

}else{
    $("#arrow-icon").hide()
}

//El vaciar carrito elimina tanto del carrito como del LocalStorage los elementos, luego de confirmar la compra se ejecuta la misma funcion para resetear el simulador
let resetFunction = () =>{
    $("#resetButton").fadeOut("fast")
            $("#basket").fadeOut("3000");
          for (every of viaje){
            $("#travelShowCase").remove();
            }
            fullprice = 0
            selectedDestinations.length = 0;
            fullTravelData = 0;
            noInterestTravel = false;
            $(".fullTravelDataCard").remove();
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
            resetDestinations();
            document.getElementById("destinyShowcase").classList.add("nonVisibleDestinations")  ;
            localStorage.clear();
            $("#arrow-icon").hide();
            $("#destinyShowcase").hide();
            productsPurchased = [];
            $("#merchSection").empty().hide()
}
$("#resetButton").click(() =>{
    Swal.fire({
        title: '¿Desea vaciar el carrito?',
        text: "La compra comenzara desde un principio y no se guardaran cambios",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#8403FC',
        cancelButtonColor: '#212529',
        confirmButtonText: 'Si, vaciar carrito',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Hecho',
            'El carrito esta ahora vacio.',
            'success'
          )
            resetFunction()
        }
      })
    }
)

// Nuevo SISTEMA CON EL DOM, SIN PROMPT Y ALERT ABAJO DE ESTA LINEA:
let added;

$("#_destinySelector").change((e) => {
    added = e.target.value 
});

let showCaseContainer
let showCase

//Añadir destinos
$("#addDestiny").click((e) => {
    e.preventDefault()
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
    $("#destinyShowcase").fadeIn(2000).css('display', 'flex');
    showCase = document.createElement("div");
    showCase.id = "travelShowCase";
    showCase.className = "card-group"
    for (destino of viaje){
        //Generador de numero random para seleccionar texto de arrays y muestra cada destino agregado
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

$("#_passengerQuantity").change((e) => {
    passengerCount = e.target.value
})

let quotaSelected

$("#_quotaSelector").change((e) => {
    quotaSelected = parseInt(e.target.value)
})

let cardValidation

$("#_cardSelector").change((e) => {
    cardValidation = e.target.value 
});
// travelTrigger comienza la generacion del paquete de viaje mediante los imputs del formulario
$("#travelTrigger").click((e) =>{
    e.preventDefault()
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
    $('#travelSection').append(`<div class="fullTravelDataCard"><div class="card text-white bg-dark mb-3 border-light" id="cardOfTravel">
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
 </div></div>`)
    
    //añade ayuda visual para ir al carrito
    $("#arrow-icon").show()
    //añade informacion sobre el pago
    $("#cardOfTravel").append(`<ul class="list-group list-group-flush" id="cardDetails"><li class="list-group-item text-white bg-dark">A pagar en ${quotaSelected} cuotas.</li></ul>`);
    if (noInterestTravel === true){
        $("#cardDetails").append('<li class="list-group-item text-white bg-dark">Gracias a la tarjeta de credito seleccionada, las cuotas son SIN INTERES</li>');
    }else if (quotaSelected === 3){
        $("#cardDetails").append('<li class="list-group-item text-white bg-dark">Los pagos en 3 cuotas son SIN INTERES</li>');
    }
    document.getElementById("form-container").reset()  
    Toast.fire({ //uso de SweetAlerts para ayuda visual
        icon: 'success',
        title: 'Viaje agregado al carrito!'
    })
});
// Boton de confirmacion de compra
$("#confirmBuy").click( () =>{
    if ((localStorage.getItem("finalTravelData") != undefined) || (productsPurchased.length > 0)){
    Swal.fire({
        title: 'Deseas confirmar tu compra?',
        text: "Tu viaje y/o los productos seleccionados estan por ser confirmados",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, confirmar!',
        cancelButtonText: 'Seguir navegando'
      }).then((result) => {
        if (result.isConfirmed) {
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            finalPriceCalc = () =>{ //la calculadora consulta el localstorage por la posibilidad de viaje en sesion anterior y hace un reduce del array de productos seleccionados.
                if ((localStorage.getItem("finalTravelData") != undefined) && (productsPurchased.length > 0)){
                    previousPriceRequierement = JSON.parse(localStorage.getItem("finalTravelData"))
                return productsPurchased.reduce(reducer) + previousPriceRequierement.precio
            }else if (localStorage.getItem("finalTravelData") != undefined){
                previousPriceRequierement = JSON.parse(localStorage.getItem("finalTravelData"))
                return previousPriceRequierement.precio
            }else{
                return productsPurchased.reduce(reducer)
            }
            }
            finalPrice = finalPriceCalc()
          Swal.fire(
            'Tu compra ha sido confirmada!',
            `El costo final sera de U$D ${finalPrice} A disfrutar!`,
            'success'
          )
        }
        resetFunction();
      })
    }else{
        Swal.fire(
            'No hay nada que puedas confirmar!',
            'Añade items al carrito para continuar',
            'error'
          )
    }
})




