// Campo Minato
// Il computer deve generare 16 numeri casuali da 1 a 100.

// creare array vuoto per inserire i numeri geneati dal pc
var numberArray = [];

while (numberArray.length < 16) {
  var numberPc = randomNumber(1, 100);
  if (numberArray.includes(numberPc) == false) {
    numberArray.push(numberPc);
  }
}
console.log(numberArray);
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(randomNumber(1, 100));

// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.

// creare una funziona che controlli che il numero inserito dall'utente  sia dentro all'array con dentro i numeri generati dal pc

function checkArrayNumber(array, number) {
  for (var i = 0; i < array.length; i++) {
    if (number == array[i]) {
      return true;
    }
  }
  return false;
}
// // dichiarare una variabile con i tentativi massimi che l'utente può utilizzare
//
var maxTries = 84;
//
// // creare un array vuoto dove inserire i tentativi dell'utente
//
var tries = [];
//
// // dichiarare una variabile che contenga il punteggio dell'utente
//
var point = 0;

 while (tries.length < maxTries && checkArrayNumber(numberArray, triesUser) == false) {
    var triesUser = parseInt(prompt('Scrivi un numero da 1 a 100!'));
   // controllo che se il numero inserito dall'utente  è incluso nell'array con i numeri generati random il giocatore ha perso

   if (checkArrayNumber(numberArray, triesUser) == true) {
     console.log('Hai perso');
   } else if (triesUser > maxTries) {
     console.log('Hai vinto');
   }

   //  se invece nell'array con i numeri random del pc non è presente il numero inserito dall'utente aggiungo il numero dell'utente su l'array con i tentativi, aggiungendo + 1 alla variabile point

   if (numberArray.includes(triesUser) == false) {
    tries.push(triesUser);
    point = point + 1;
   }
   console.log(point);
 }
