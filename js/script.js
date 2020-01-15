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


// *********************************************************************************
// BONUS: all’inizio il software richiede anche una difficoltà all’utente
// che cambia il range di numeri casuali.
// Con difficoltà 0 => numeri vietati da 1 a 100, tentativi 84
// con difficoltà 1 => numeri vietati  da 1 a 80, tentativi 64
// con difficoltà 2 => numeri vietati  da 1 a 50, tentativi 34

var numMin;
var numMax;
var difficulty = 0;

while (checkRange(numMin, numMax, difficulty) == false && difficulty < 3 ) {
  var choiceDifficulty = parseInt(prompt('Scegliere una difficoltà da 0 a 2!'));
  if (choiceDifficulty == 1) {
    userTries = 64;
    numMin = 1;
    numMax = 80;
  } else if (choiceDifficulty == 2) {
    userTries = 34;
    numMin = 1;
    numMax = 50;
  }
  difficulty++;
  console.log(choiceDifficulty);
  console.log(userTries);
  console.log(numMax);
}

// *********************************************************************************


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

// richiamare la funzione che controlla se il numero inserito è dentro all'array usernumber
// se non è inserito lo inserisce se invece è già stato inserito mandiamo un alert chiedendo di ripetere il numero

  if (checkArrayNumber(userNumber, promptUser) == false) {
    userNumber.push(promptUser);
    // console.log(userNumber);
  } else if (checkArrayNumber(userNumber, promptUser) == true) {
    alert('Hai gia inserito questo numero');
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

 // creare una funzione che stabilisca se i numeri inseriti dall'utente fanno parte di un determinato range di numeri

function checkRange(numMin, numMax, num) {
  var rangeResult = false;
  if (num >= numMin && num <= numMax) {
    rangeResult = true;
  }
  return rangeResult;
}
