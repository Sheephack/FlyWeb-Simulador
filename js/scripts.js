const viaje = []
const selectedDestinations = []
let noInterestTravel
let masterYes = 0
let visaYes = 0
let americanYes = 0


// Constructor
class Destino{
    constructor (continent, price, time, citiesNumber, tax, passengers){
        this.continent = continent;
        this.price = parseFloat(price);
        this.time = time;
        this.citiesNumber = citiesNumber;
        this.tax = parseFloat(tax);
        this.passengers = passengers;
    }
    applyFullPricePerPassangerCount(){
        this.price = this.price * this.tax * 1.21 * this.passengers;
    }
}
//  array
let destinations = [
    europa = new Destino("Europa", 4500, 3, 15, 1.13), 
    asia = new Destino("Asia", 5000, 4, 18, 1.14),
    aDelNorte = new Destino("America del Norte", 4000, 4, 23, 1.26),
    africa = new Destino("Africa", 2500, 5, 12, 1.1),
    aDelSur = new Destino("America del Sur", 3000, 4, 15, 1.43),
    oceania = new Destino("Oceania", 2000, 2, 6, 1.23)
]

// Funciones
// Funcion para resetear los valores originales sin impuestos.
const resetDestinations = () =>{
    destinations = []
    destinations = [
        europa = new Destino("Europa", 4500, 3, 15, 1.13), 
        asia = new Destino("Asia", 5000, 4, 18, 1.14),
        aDelNorte = new Destino("America del Norte", 4000, 4, 23, 1.26),
        africa = new Destino("Africa", 2500, 5, 12, 1.1),
        aDelSur = new Destino("America del Sur", 3000, 4, 15, 1.43),
        oceania = new Destino("Oceania", 2000, 2, 6, 1.23)
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
    showCase = document.createElement("ul");
    showCase.id = "travelShowCase";
    for (destino of viaje){
        showCase.innerHTML = `<li>${destino.continent}</li>`;
        document.getElementById("destinyShowcase").appendChild(showCase)
    }
});


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
            }
            break;
        case "two":
            for (const destinos of viaje){
                destinos.passengers = 2;
            }
            break;
        case "three":
            for (const destinos of viaje){
                destinos.passengers = 3;
            }
            break;
        case "four":
            for (const destinos of viaje){
                destinos.passengers = 4;
            }
            break;
    }

    for (const travel of viaje){
        travel.applyFullPricePerPassangerCount();
    }

    fullTravelData = {precio: parseFloat(sumaValorPropiedades(viaje, 'price').toFixed(2)), ciudades: sumaValorPropiedades(viaje, 'citiesNumber'), tiempo: sumaValorPropiedades(viaje, 'time')};
    fullprice = newPrice(quotaSelected);

    const stringOfDestinations = selectedDestinations.join(", ");

    let card = document.createElement("div");
    card.className = "fullTravelDataCard"
    card.innerHTML = `<div class="card text-white bg-dark mb-3 border-light" id="cardOfTravel" style="width: 18rem;">
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
    document.getElementById("basket").classList.remove("non_visible")
    let paymentMethodDisplay = document.createElement("ul");
    paymentMethodDisplay.className = "list-group list-group-flush";
    paymentMethodDisplay.id = "cardDetails"
    paymentMethodDisplay.innerHTML = `<li class="list-group-item text-white bg-dark">A pagar en ${quotaSelected} cuotas.</li>`
    document.getElementById("cardOfTravel").appendChild(paymentMethodDisplay);
    if (noInterestTravel === true){
        let noInterestCard = document.createElement("li");
        noInterestCard.className = "list-group list-group-flush";
        noInterestCard.innerHTML = "Gracias a la tarjeta de credito seleccionada, las cuotas son SIN INTERES"
        document.getElementById("cardDetails").appendChild(noInterestCard)
    }else if (quotaSelected === 3){
        let noInterest = document.createElement("li");
        noInterest.className = "list-group list-group-flush";
        noInterest.innerHTML = "Los pagos en 3 cuotas son SIN INTERES"
        document.getElementById("cardDetails").appendChild(noInterest)
    }
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
        document.getElementById("basket").classList.add("non_visible")     
    })
    document.getElementById("cardOfTravel").appendChild(resetButton);

});