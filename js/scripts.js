// Scrivere un programma che chieda all'utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un'implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

const fnameandSname = document.getElementById('fnameandSname');
console.log('fnameandSname',fnameandSname, typeof fnameandSname.value);

const kilometres = document.getElementById('kilometres');
console.log('kilometres', kilometres, typeof kilometres.value);

const ageAdult = document.getElementById('ageAdult');
const ageAdultValue = parseInt(ageAdult.value);
console.log('ageAdult', ageAdult, typeof ageAdult);

const ageYunger = document.getElementById('ageYunger');
const ageYungerValue = parseInt(ageYunger.value);
console.log('ageYunger', ageYunger, typeof ageYunger);

const ageOld = document.getElementById('ageOld');
const ageOldValue = parseInt(ageOld.value);
console.log('ageOld', ageOld, typeof ageOld);

const tax = 0.21
let totalPrice = (kilometres * tax);
let discount = 0;

var buttonGenerate = document.getElementById('buttonGenerate');
buttonGenerate.addEventListener ('click') , function () {

    if ( ageYunger ) {
        discount = ((totalPrice *  20) / 100);   
        console.log("sconto",discount, typeof discount);
    }
    
    else if ( ageOld ) {
        discount = ((totalPrice *  40) / 100);
        console.log("sconto",discount, typeof discount);
    }  

    else{
        discount = 0;
        console.log("sconto",discount, typeof discount);
        totalPrice = (kilometres * tax);
        console.log("totalPrice",price, typeof totalPrice);
    }
}

let price = (totalPrice - discount);
const finalPrice = (price.toFixed(2))

document.getElementById("trainticket").innerHTML =
finalPrice;
