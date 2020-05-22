// EVENTI FORM
// bottoni
var genera = document.getElementById('form-genera');
var annulla = document.getElementById('form-annulla');
// form input
var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');
// altre variabili form
var formKmValue;
var formEtaValue;

// SEZIONE BIGLIETTO
var sezioneBiglietto = document.getElementById('biglietto');
// EVENTI BIGLIETTO
var biglNome = document.getElementById('bigl-nome');
var biglOfferta = document.getElementById('bigl-offerta');
var biglCarrozza = document.getElementById('bigl-carrozza');
var biglCodice = document.getElementById('bigl-codice');
var biglCosto = document.getElementById('bigl-costo');
// altre variabili biglietto
var prezzoBiglietto;
var offerta;

// Evento Bottone Genera
genera.addEventListener( 'click',
  function() {
    // kilometri passeggero
    formKmValue = formKm.value;
    // età passeggero
    formEtaValue = formEta.value;

    // numero carrozza
    biglCarrozza.innerHTML = Math.floor(Math.random() * 10) + 1;
    // codice CP
    biglCodice.innerHTML = Math.floor(Math.random() * 10000) + 1000;

    // costo del biglietto in base ai chilometri
    prezzoBiglietto = formKmValue * 0.21;
    // offerta standard
    offerta = 'Prezzo standard';

    //costo biglietto per minorenni
    if (formEtaValue == 'minorenne') {
      prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 20 / 100);
      // offerta minorenni
      offerta = 'Sconto per minorenni';
    }
    //costo biglietto per over 65
    else if (formEtaValue == 'over') {
      prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 40 / 100);
      // offerta over 65
      offerta = 'Sconto per over 65';
    }

    // Compilazione Biglietto
    // inserisco nome nel biglietto
    biglNome.innerHTML = formNome.value;
    // inserisco prezzo nel biglietto
    biglCosto.innerHTML = prezzoBiglietto.toFixed(2) + '€';
    // inserisco offerta nel biglietto
    biglOfferta.innerHTML = offerta;

    // Mostra Biglietto
    sezioneBiglietto.className = 'visible';
  }
);

// Evento Bottone Annulla
annulla.addEventListener( 'click',
  function() {
    // cancella nome nel form
    formNome.value = '';
    // azzera km nel form
    formKmValue = formKm.value = '';
    // ripristina selezione età nel form
    formEta.value = 'maggiorenne';

    // cancella nome nel biglietto
    biglNome.innerHTML = '';
    // cancella offerta nel biglietto
    biglOfferta.innerHTML = '';
    // cancella carrozza nel biglietto
    biglCarrozza.innerHTML = '';
    // cancella codice nel biglietto
    biglCodice.innerHTML = '';
    // cancella codice nel biglietto
    biglCosto.innerHTML = '';

    // Nascondi Biglietto
    sezioneBiglietto.className = 'hidden';
  }
);
