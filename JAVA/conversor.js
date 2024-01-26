function convertirEurosADolares() {
    var euros = document.getElementById("eurosInput").value;
    var dolares = euros * 1.09; // Considerando un cambio de 1€ = 1.09$
    document.getElementById("resultadoEurosADolares").innerText = euros + "€ = " + dolares.toFixed(2) + "$";
  }
  
  function convertirDolaresAEuros() {
    var dolares = document.getElementById("dolaresInput").value;
    var euros = dolares * 0.91; // Considerando un cambio de 1$ = 0.91€
    document.getElementById("resultadoDolaresAEuros").innerText = dolares + "$ = " + euros.toFixed(2) + "€";
  }
  