let interest
let viaje

// Constructor

class Destino{
    constructor (continent, price, time, citiesNumber, tax, passengers){
        this.continent = continent;
        this.price = price;
        this.time = time;
        this.citiesNumber = citiesNumber;
        this.tax = tax;
        this.passengers = passengers;
        this.applyTax = function(){return this.price * this.tax }
    }
}

// Funciones

const newPrice = (imputCost, quota) =>{
    let ivaCost = imputCost * 1.21;
    if (quota == 3){
        return ivaCost / quota;
    }else if (quota == 6){
        interest = viaje["price"] *0.6
        return (ivaCost + interest) / quota; 
    }else{
        interest = viaje["price"] *0.9
        return (ivaCost + interest) / quota; 
    }
}

const cuotas = (selector) =>{
    switch(selector){
        case(3):
            fullprice = newPrice((viaje.applyTax() * viaje.passengers), selector);
            alert(`Su viaje en 3 cuotas SIN INTERES a ${viaje.continent} costara U$D ${fullprice} por mes. Viajaras por ${viaje.citiesNumber} durante ${viaje.time}.`);
            break;
        case(6):
            fullprice = newPrice((viaje.applyTax() * viaje.passengers), selector);
            alert(`Su viaje en 6 cuotas con intereses a ${viaje.continent} costara U$D ${fullprice} por mes. Viajaras por ${viaje.citiesNumber} durante ${viaje.time}.`)
            break;
        case(9):
            fullprice = newPrice((viaje.applyTax() * viaje.passengers), selector);
            alert(`Su viaje en 9 cuotas con intereses a ${viaje.continent} costara U$D ${fullprice} por mes. Viajaras por ${viaje.citiesNumber} durante ${viaje.time}.`)
            break;
        default:
            cuotas(parseInt(prompt("Por favor, DEBE seleccionar en cuantas cuotas desea abonar su viaje: 3 - 6 - 9")));
    }
}

const passengersPerTravel = (amount) =>{
    switch(amount){
        case 1:
            viaje.passengers = 1;
            break;
        case 2:
            viaje.passengers = 2;
            break;
        case 3:
            viaje.passengers = 3;
            break;
        case 4:
            viaje.passengers = 4;
            break;
        default:
            passengersPerTravel(parseInt(prompt(`Por favor, DEBE seleccionar cuantos pasajeros viajaran (Maximo 4):`)));
    }
    cuotas(parseInt(prompt("Por favor, seleccionar en cuantas cuotas desea abonar su viaje: 3 - 6 - 9")));
}

const destiny = (continent) => {
    switch(continent){
        case "europa":
            viaje = new Destino("Europa", 3000, "3 semanas", "15 ciudades", 1.13);
            break;
        case "asia":
            viaje = new Destino("Asia", 5000, "4 semanas", "18 ciudades", 1.14);
            break;
        case "america del norte":
            viaje = new Destino("America del Norte", 4000, "4 semanas", "23 ciudades", 1.26);
            break;
        case "africa":
            viaje = new Destino("Africa", 2500, "5 semanas", "12 ciudades", 1.1);
            break;
        case "america del sur":
            viaje = new Destino("America del Sur", 4500, "4 semanas", "15 ciudades", 1.43);
            break;
        case "oceania":
            viaje = new Destino("Oceania", 2000, "2 semanas", "6 ciudades", 1.23);
            break;
        default:
            destiny(prompt("Por favor, elija a que continente desea viajar: Europa, Asia, America del norte, America del Sur, Oceania o Africa").toLowerCase());
    }
    passengersPerTravel(parseInt(prompt(`Por favor, seleccionar cuantos pasajeros viajaran (Maximo 4):`)));
}

// Fin funciones

destiny(prompt("¡Bienvenido/a!. Por favor, elija a que continente desea viajar: Europa, Asia, America del norte, America del Sur, Oceania o Africa").toLowerCase());
console.log(viaje);
console.log(viaje.applyTax());

alert("¡Gracias por usar nuestros servicios!")