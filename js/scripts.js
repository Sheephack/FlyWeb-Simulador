const viaje = []
const selectedDestinations = []
let cancel = false
let quotaAmount;
let cardValidation;


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

// Funciones

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
        cardValidation = prompt("¿Posee tarjeta Mastercard?").toLowerCase();
        console.log(cardValidation)
        if (cardValidation == "si"){
            let masterYes = document.getElementById("master_card");
            masterYes.className = "card_selected";
            return fullTravelData["precio"] / quota;
        }else{
        interest = fullTravelData["precio"] * 1.6;
        return interest / quota; 
        }    
    }else{
        cardValidation = prompt("¿Posee tarjeta Visa?").toLowerCase();
        if (cardValidation == "si"){
            let visaYes = document.getElementById("visa_card");
            visaYes.className = "card_selected";
            return fullTravelData["precio"] / quota;
        }else{
            cardValidation = prompt("¿Posee tarjeta American Express?").toLowerCase();
            if (cardValidation == "si"){
                let americanYes = document.getElementById("american_card");
                americanYes.className = "card_selected";
                return fullTravelData["precio"] / quota;
            }else{
                interest = fullTravelData["precio"] * 1.9;
                return interest / quota;
            }
        }
    }
}

const cuotas = (selector) =>{
    switch(selector){
        case(3):
            quotaAmount = 3
            fullprice = newPrice(selector);
            alert(`Su viaje en 3 cuotas SIN INTERES a ${selectedDestinations} costara U$D ${fullprice} por mes. Viajaras por ${fullTravelData.ciudades} ciudades durante ${fullTravelData.tiempo} semanas.`);
            break;
        case(6):
            quotaAmount = 6
            fullprice = newPrice(selector);
            alert(`Su viaje en 6 cuotas con intereses a ${selectedDestinations} costara U$D ${fullprice} por mes. Viajaras por ${fullTravelData.ciudades} ciudades durante ${fullTravelData.tiempo} semanas.`)
            break;
        case(9):
            quotaAmount = 9
            fullprice = newPrice(selector);
            if (cardValidation == "si"){
                alert(`Su viaje en 9 cuotas SIN INTERES a ${selectedDestinations} costara U$D ${fullprice} por mes. Viajaras por ${fullTravelData.ciudades} ciudades durante ${fullTravelData.tiempo} semanas.`)    
            }else{
            alert(`Su viaje en 9 cuotas con intereses a ${selectedDestinations} costara U$D ${fullprice} por mes. Viajaras por ${fullTravelData.ciudades} ciudades durante ${fullTravelData.tiempo} semanas.`)
            }
            break;
        case(12):
            quotaAmount = 12
            fullprice = newPrice(selector);
            if (cardValidation == "si"){
                alert(`Su viaje en 12 cuotas SIN INTERES a ${selectedDestinations} costara U$D ${fullprice} por mes. Viajaras por ${fullTravelData.ciudades} ciudades durante ${fullTravelData.tiempo} semanas.`)
            }else{
                alert(`Su viaje en 12 cuotas con intereses a ${selectedDestinations} costara U$D ${fullprice} por mes. Viajaras por ${fullTravelData.ciudades} ciudades durante ${fullTravelData.tiempo} semanas.`)
            }
            break;
        default:
            cuotas(parseInt(prompt("Por favor, DEBE seleccionar en cuantas cuotas desea abonar su viaje: 3 - 6 - 9 - 12")));
    }
}

const passengersPerTravel = (amount) =>{
    switch(amount){
        case 1:
            for (const destinos of viaje){
                destinos.passengers = 1;
            }
            break;
        case 2:
            for (const destinos of viaje){
                destinos.passengers = 2;
            }
            break;
        case 3:
            for (const destinos of viaje){
                destinos.passengers = 3;
            }
            break;
        case 4:
            for (const destinos of viaje){
                destinos.passengers = 4;
            }
            break;
        default:
            passengersPerTravel(parseInt(prompt(`Por favor, DEBE seleccionar cuantos pasajeros viajaran (Maximo 4):`)));
    }
}

const destiny = (continent) => {
        switch(continent){
            case "europa":
                viaje.push(destinations[0]);
                selectedDestinations.push("Europa")
                break;
            case "asia":
                viaje.push(destinations[1]);
                selectedDestinations.push("Asia")
                break;
            case "america del norte":
                viaje.push(destinations[2]);
                selectedDestinations.push("America del Norte")
                break;
            case "africa":
                viaje.push(destinations[3]);
                selectedDestinations.push("Africa")
                break;
            case "america del sur":
                viaje.push(destinations[4]);
                selectedDestinations.push("America del Sur")
                break;
            case "oceania":
                viaje.push(destinations[5]);
                selectedDestinations.push("Oceania")
                break;
            case "no":
                cancel = true;
                break;
            default:
                destiny(prompt("Por favor, elija a que continente desea viajar: Europa, Asia, America del norte, America del Sur, Oceania o Africa").toLowerCase());
        }
}

// Fin funciones

//  array
const destinations = [
    europa = new Destino("Europa", 3000, 3, 15, 1.13), 
    asia = new Destino("Asia", 5000, 4, 18, 1.14),
    aDelNorte = new Destino("America del Norte", 4000, 4, 23, 1.26),
    africa = new Destino("Africa", 2500, 5, 12, 1.1),
    aDelSur = new Destino("America del Sur", 4500, 4, 15, 1.43),
    oceania = new Destino("Oceania", 2000, 2, 6, 1.23)
]

destiny(prompt("¡Bienvenido/a!. Por favor, elija a que continente desea viajar: Europa, Asia, America del norte, America del Sur, Oceania o Africa").toLowerCase());
do{
    destiny(prompt("Desea agregar un nuevo continente de destino? Escribalo a continuación, o escriba NO para continuar."))
}while(cancel != true && viaje.length !== 6)

passengersPerTravel(parseInt(prompt(`Por favor, seleccionar cuantos pasajeros viajaran (Maximo 4):`)));

for (const travel of viaje){
    travel.applyFullPricePerPassangerCount();
}

let fullTravelData = {precio: sumaValorPropiedades(viaje, 'price'), ciudades: sumaValorPropiedades(viaje, 'citiesNumber'), tiempo: sumaValorPropiedades(viaje, 'time')};

//Uso de DOM para manipular el resultado de la interaccion

const stringOfDestinations = selectedDestinations.join(", ");
let card = document.createElement("section");
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
document.getElementById("mainContainer").appendChild(card);

cuotas(parseInt(prompt("Por favor, seleccionar en cuantas cuotas desea abonar su viaje: 3 - 6 - 9 - 12")));

let paymentMethodDisplay = document.createElement("ul");
paymentMethodDisplay.className = "list-group list-group-flush";
paymentMethodDisplay.id = "cardDetails"
paymentMethodDisplay.innerHTML = `<li class="list-group-item text-white bg-dark">A pagar en ${quotaAmount} cuotas.</li>`
document.getElementById("cardOfTravel").appendChild(paymentMethodDisplay);
if (cardValidation == "si"){
    let noInterestCard = document.createElement("li");
    noInterestCard.className = "list-group list-group-flush";
    noInterestCard.innerHTML = "Gracias a la tarjeta de credito seleccionada, las cuotas son SIN INTERES"
    document.getElementById("cardDetails").appendChild(noInterestCard)
}else if (quotaAmount === 3){
    let noInterest = document.createElement("li");
    noInterest.className = "list-group list-group-flush";
    noInterest.innerHTML = "Los pagos en 3 cuotas son SIN INTERES"
    document.getElementById("cardDetails").appendChild(noInterest)
}
alert("¡Gracias por usar nuestros servicios!")