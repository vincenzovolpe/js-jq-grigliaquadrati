// Dichiarazione variabili
var indicirossi = []; // Array che includerà gli indici dei quadratini che diventeranno rossi
var maxQuadratiniRossi = 15; // Numero massimo di qudratini rossi della griglia
var larghezzaGriglia = '40%'; // Larghezza della griglia in percentuale
var righeGriglia = 8; // Quadratini per ogni riga
var minIndiceRossi = 1;
var maxIndiceRossi = (righeGriglia * righeGriglia) - 1; // Numero totale quadratini della griglia
var maxQuadratiniVerdi = maxIndiceRossi - maxQuadratiniRossi + 1;
var margini = '2px'; // Margine sinistro + margine destro in px dei quadratini
var contarossi = 0; // Variabile che memorizza i quadratini rossi scoperti
var contaverdi = 0;// Variabile che memorizza i quadratini verdi scoperti
// Document Ready
$(document).ready(function(){
    // Chiamiamo la funzione per la generazione degli indici dei quadratini rossi
    creaIndiciRossi();
    console.log(indicirossi);
    // Chiamiamo la funzione per la creazione della Griglia
    creaGriglia(larghezzaGriglia, righeGriglia);
    // Evento click di un quadratino (per colorarlo verde o rosso)
    $(".quadratino").click(function() {
      // Verifico se il mio array contiene l'indice del quadratino che ho cliccato
    if (indicirossi.includes($(this).index())){
        // L'indice del quadratino cliccato è contenuto nell'array degli indici rossi, quindi gli assegno la classe red
        $(this).addClass("red");
        contarossi++;
        if (contarossi == maxQuadratiniRossi && (contaverdi != maxQuadratiniVerdi)) {
            alert('Hai perso');
        }
    } else {
        // L'indice del quadratino cliccato non è contenuto nell'array degli indici rossi, quindi gli assegno la classe green
        $(this).addClass("green");
        contaverdi++;
        if ((contaverdi == maxQuadratiniVerdi) && (contarossi !== maxQuadratiniRossi)) {
            alert('Complimenti! Hai vinto la battaglia');
        }
    }
  });
});

// Ridimensiona la griglia in modo responsive
$(window).resize(function() {
    creaQuadratini();
});

// Funzione che crea gli indici dei quadratini che diventeranno rossi
function creaIndiciRossi() {
  for (i = 0; indicirossi.length < maxQuadratiniRossi; i++){
      var indicegenerato = indiciRandom(minIndiceRossi, maxIndiceRossi);
      // Prima di inserire nell'array degli indici l'indice generato con la funzione indiciRandom mi assicuro che non esista già nell'array
      var esiste = indicirossi.includes(indicegenerato);
      if (!esiste) {
          // Se l'indice generato non esiste lo aggiungo all'array degli indici
          indicirossi.push(indicegenerato);
      }
  }
}
// Funzione per la generazione dei quadratini
function creaGriglia(larghezzaGriglia, righeGriglia) {
  // Calcolo il totale dei quadratini della griglia
  var totaleQuadratini = righeGriglia * righeGriglia;
  // Creo la struttura della griglia in html con un ciclo for in base alla dimensione della griglia data dalla variabile totaleQuadratini
  for (j = 0; j < totaleQuadratini; j++) {
      // Aggiungo il div quadratino alla griglia
      $("<div class='quadratino'></div>").appendTo($(".contenitore"));
  }
  // Assegno la larghezza impostata nella variabile altezzaGriglia alla griglia
  $('.contenitore').width(larghezzaGriglia);
  creaQuadratini();
}
// Funzione che imposta le misure della griglia e dei quadratini
function creaQuadratini() {
    // Creo la stringa che contiene il calcolo dinamico della larghezza del Quadratino
    calcLargQuadratino = "calc((100% / " + righeGriglia + ") - " + margini;
    // Imposto la larghezza del quadratino
    $(".quadratino").width(calcLargQuadratino);
    // Creo una variabile per memorizzare la larghezza del quadratino
    var altezzaQuadratino = $(".quadratino").width();
    // Imposto l'altezza del quadratino uguale alla larghezza
    $(".quadratino").height(altezzaQuadratino);
}
// Funzione per calcolare gli indici casuali dei quadratini che diventeranno rossi
function indiciRandom(min, max) {
  var numero = Math.floor(Math.random() * (max - min + 1) ) + min;
  return numero;
}
