var chilometriDaPercorrere = prompt('Quanti chilometri vuoi percorrere?');
var etaPasseggero = prompt('Quanti anni hai?');

var euroAlKm = 0.21;
var totalePrezzoViaggio = chilometriDaPercorrere * euroAlKm;

if (etaPasseggero < 18) {
    var scontoMinori = ( ( totalePrezzoViaggio * 20 ) / 100 );
  }
if (etaPasseggero > 65) {
    var scontoOver = ( ( totalePrezzoViaggio * 40 ) / 100 );
  }

var sconto = (totalePrezzoViaggio - scontoMinori) || (totalePrezzoViaggio - scontoOver);

console.log(chilometriDaPercorrere);
console.log(etaPasseggero);
console.log(euroAlKm);
console.log(totalePrezzoViaggio);
console.log(scontoMinori);
console.log(scontoOver);
console.log(sconto);
