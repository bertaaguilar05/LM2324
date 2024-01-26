function convertir(divisa) {
    let valor = document.getElementById("cantidad").value;
    let resultado = 0;  
    if (divisa=="euros"){
        //Convierto a euros
        resultado = valor * 0.91;
        document.getElementById("resultado").innerHTML = resultado + "euro";
    }
    else {
        //Convierto a dolares
        
    }
}
  
