// // Il computer deve generare 16 numeri casuali da 1 a 100.

var numeriRandomPc = [];

for (var i = 1; i <= 16; i++) {
  var numeriRandom = generaNumeroRandom(1, 100);
  console.log(numeriRandom);
  numeriRandomPc.push(numeriRandom);
}

console.log(numeriRandomPc);

function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// // In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
//
var numeriUtenti = [];
//
for (var i = 1; i < 5; i++) {
  var utente = parseInt(prompt('Inserisci un numero da 1 a 84'));
  numeriUtenti.push(utente);
  }
console.log(numeriUtenti);







// var i = 0;
// var posizione = false;
//
// while (i < numeriRandom.length && posizione == false) {
  //   if (numeriUtenti[i] == numeriRandom) {
    //     posizione = true;
    //   }
    //   i++
    // }
    // console.log(posizione);





// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente
// che cambia il range di numeri casuali.
// Con difficoltà 0 => numeri vietati da 1 a 100, tentativi 84
// con difficoltà 1 => numeri vietati  da 1 a 80, tentativi 64
// con difficoltà 2 => numeri vietati  da 1 a 50, tentativi 34
// Come fatto assieme analizzate prima cosa deve fare il software, poi scriviamo i passaggi in italiano, solo dopo convertiamo in sintassi js aiutandoci con le slide e con la documenazione ufficiale.
// Proviamo ad inserire delle piccole funzioni, ogni funzione deve svolgere un compito preciso e restiturci qualcosa.
