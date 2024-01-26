document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    alert("Bienvenido usuario " + usuario + " con la contraseña " + contraseña);
});