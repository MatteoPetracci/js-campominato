// Campo Minato
// Il computer deve generare 16 numeri casuali da 1 a 100.

// creare array vuoto per inserire i numeri geneati dal pc e controllare che il numero non venga ripetuto
var numberArray = [];

while (numberArray.length < 16) {
  var numberPc = randomNumber(1, 100);
  var findNumber = checkArrayNumber(numberArray, numberPc);
  if (findNumber == false) {
    numberArray.push(numberPc);
  }
}
console.log(numberArray);

// creare un array vuoto dove inserire i numeri dell'utente
var userNumber = [];
//  creare una variabile per il numero di tentativi dell'utente
var userTries = 84;
//  dichiarare una variabile che contenga il punteggio dell'utente
var point = 0;
var findNumber = false;
// lunghezza dell'array è minore al numero massimo di tentativi e findnumber ha valore false
// utilizzare la funzione per dire se i numeri inseriti dall'utente sono contenuti nell'array con i numeri generati dal pc
// se si ha perso
while (userNumber.length < userTries && findNumber == false) {
  var promptUser = parseInt(prompt(' Inserisci un numero da 1 a 100'));
  if (checkArrayNumber(numberArray, promptUser) == true) {
    findNumber = true;
    console.log('Hai perso');
  } else {
    point = point + 1;
  }
}
console.log('Hai totalizzato il punteggio di' + ' ' + point);

 // Creare una funzione per generare un numero random con min e max compreso

 function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 // creare una funzione per vedere se un elemento è inserito dentro un array

 function checkArrayNumber(array, number) {
   var i = 0;
   while ( i < array.length) {
     if (number == array[i]) {
       return true;
     }
      i++;
   }
   return false;
 }













 //
 // //  dichiarare una variabile con i tentativi massimi che l'utente può utilizzare
 // var maxTries = 84;
 //
 //  while (tries.length < maxTries && checkArrayNumber(numberArray, triesUser) == false) {
   //     var triesUser = parseInt(prompt('Scrivi un numero da 1 a 100!'));
   //    // controllo che se il numero inserito dall'utente  è incluso nell'array con i numeri generati random il giocatore ha perso
   //
   //    if (checkArrayNumber(numberArray, triesUser) == true) {
     //      console.log('Hai perso');
     //    }
     //
     //    //  se invece nell'array con i numeri random del pc non è presente il numero inserito dall'utente aggiungo il numero dell'utente su l'array con i tentativi, aggiungendo + 1 alla variabile point
     //
     //    if (numberArray.includes(triesUser) == false) {
       //     tries.push(triesUser);
       //     point = point + 1;
       //   }
       //    console.log(point);
       //    console.log(tries);
       //
       //  }
