// chiedere età del passeggero e chilometri da percorrere
var eta = parseInt('Quanti anni hai?');
var chilometri = parseInt('Quanti chilometri vuoi percorrere?');

// costo del biglietto in base ai chilometri
var euroAlKm = 0.21;
var prezzoBiglietto = chilometri * euroAlKm;
var costoBigl = document.getElementById('bigl-costo');

var genera = document.getElementById('genera');
genera.addEventListener( 'click',
  function() {
  
  }
)

costoBigl.innerHTML = prezzoBiglietto;
