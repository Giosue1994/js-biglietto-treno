var chilometriDaPercorrere = prompt('Quanti chilometri vuoi percorrere?');
var etaPasseggero = prompt('Quanti anni hai?');

var euroAlKm = 0.21;
var totalePrezzoViaggio = chilometriDaPercorrere * euroAlKm;

var sconto = 0;

if (etaPasseggero < 18) {
    sconto = ( ( totalePrezzoViaggio * 20 ) / 100 )
  }
else if (etaPasseggero > 65) {
  sconto = ( ( totalePrezzoViaggio * 40 ) / 100 );
  }
else {
    alert('Niente sconto per te :)');
  }
var prezzoScontato = totalePrezzoViaggio - sconto;

console.log(chilometriDaPercorrere);
console.log(etaPasseggero);
console.log(euroAlKm);
console.log(totalePrezzoViaggio);
console.log(sconto);

document.getElementById('prezzo').innerHTML = 'Il prezzo è di ' + totalePrezzoViaggio + '€';
document.getElementById('prezzoscontato').innerHTML = 'Il prezzo scontato è di ' + prezzoScontato + '€';
