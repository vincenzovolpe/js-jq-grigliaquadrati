$(document).ready(function(){
    var indicirossi = []; //array che includerà gli indici dei quadratini che diventeranno rossi
    var maxQuadratiniRossi = 15; // Numero massimo di qudratini rossi della griglia
    var altezzaGriglia = 600; // Altezza  della griglia in px
    var righeGriglia = 8; // Quadratini per ogni riga
    var minIndiceRossi = 0;
    var maxIndiceRossi = (righeGriglia * righeGriglia) - 1; // Numero totale quadratini della griglia
    var margini = 2; // Margine sinistro + margine destro in px dei quadratini
    // Chiamiamo la funzione per la generazione degli indici dei quadratini rossi
    creaIndiciRossi();
    // Chiamiamo la funzione per la creazione della Griglia
    creaQuadratini(altezzaGriglia, righeGriglia);
    // Evento click di un quadratino (per colorarlo verde o rosso)
    $(".quadratino").click(function() {
      // Verifico se il mio array contiene l'indice del quadratino che ho cliccato
    if (indicirossi.includes($(this).index())){
        // L'indice del quadratino cliccato è contenuto nell'array degli indici rossi, quindi gli assegno la classe red
        $(this).addClass("red");
    } else {
        // L'indice del quadratino cliccato non è contenuto nell'array degli indici rossi, quindi gli assegno la classe green
        $(this).addClass("green");
    }
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
    function creaQuadratini(altezzaGriglia, righeGriglia) {
      // Calcolo il totale dei qudratini della griglia
      var totaleQuadratini = righeGriglia * righeGriglia;
      // Calcolo l'altezza del quadratino
      var altezzaQuadratino = (altezzaGriglia / righeGriglia) - margini;
      // Calcolo la larghezza del quadratino
      var larghezzaQuadratino = (altezzaGriglia / righeGriglia) - margini;
      // Imposto la larghezza della griglia
      $("#griglia").width(altezzaGriglia);
      // Imposto l'altezza della griglia
      $("#griglia").height(altezzaGriglia);
      // Creo la griglia con un ciclo for che crea tanti qudratini in html in base alla dimensione della griglia data dalla variabile totaleQuadratini
      for (j = 0; j < totaleQuadratini; j++) {
          // Aggiungo il quadratino alla griglia
          $("<div class='quadratino'></div>").appendTo($("#griglia"));
      }
      // Imposto la larghezza del quadratino
      $(".quadratino").width(altezzaQuadratino);
      // Imposto l'altezza del quadratino
      $(".quadratino").height(larghezzaQuadratino);
  }
    // Funzione per calcolare gli indici casuali dei quadratini che diventeranno rossi
    function indiciRandom(min, max) {
      var numero = Math.floor(Math.random() * (max - min + 1) ) + min;
      return numero;
    }
});
