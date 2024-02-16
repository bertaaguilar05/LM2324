const form = document.getElementById("calificaciones-form");
const calificaciones = [];
let media = 0;

form.addEventListener("click", (event) => {
    if (event.target.id === "agregar-calificacion") {
        const calificacion = parseInt(document.getElementById("calificacion").value);
        if (calificacion >= 0 && calificacion <= 10) {
            calificaciones.push(calificacion);
            document.getElementById("calificacion").value = "";
            mostrarCalificaciones();
        } else {
            alert("La calificación debe ser un número entre 0 y 10.");
        }
    } else if (event.target.id === "borrar-calificaciones") {
        calificaciones.length = 0;
        media = 0;
        mostrarCalificaciones();
    } else if (event.target.id === "calcular-media") {
        if (calificaciones.length > 0) {
            media = calificaciones.reduce((sum, calificacion) => sum + calificacion) / calificaciones.length;
            mostrarMedia();
        } else {
            alert("No hay calificaciones para calcular la media.");
        }
    }
});

function mostrarCalificaciones() {
    document.getElementById("media-label").style.display = "none";
    document.getElementById("media-value").textContent = "";
    const calificacionesList = document.getElementById("calificaciones-list");
    calificacionesList.innerHTML = "";
    for (let i = 0; i < calificaciones.length; i++) {
        const calificacion = document.createElement("li");
        calificacion.textContent = calificaciones[i];
        calificacionesList.appendChild(calificacion);
    }
}

function mostrarMedia() {
    document.getElementById("calificacion").style.display =promedio;
    document.getElementById("media-label").style.display = "block";
    document.getElementById("media-value").textContent = promedio;
}