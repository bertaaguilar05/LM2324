function calcularFahrenheit() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = celsius * 9/5 + 32;
    document.getElementById("resultado").innerHTML = "La temperatura en Fahrenheit es: " + fahrenheit.toFixed(2);

}