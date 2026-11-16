let nombreEstudiante = document.getElementById("nombreEstudiante");
let notaPromedio = document.getElementById("notaPromedio");
let notaTrimestre1 = document.getElementById("notaTrimestre1");
let notaTrimestre2 = document.getElementById("notaTrimestre2");
let notaTrimestre3 = document.getElementById("notaTrimestre3");
let btnCalcular = document.getElementById("btnCalcular");

function calcularPromedio() {
    let t1 = parseFloat(notaTrimestre1.value);
    let t2 = parseFloat(notaTrimestre2.value);
    let t3 = parseFloat(notaTrimestre3.value);

    if (isNaN(t1)) { t1 = 0; }
    if (isNaN(t2)) { t2 = 0; }
    if (isNaN(t3)) { t3 = 0; }

    if (t1 < 0 || t1 > 100 || t2 < 0 || t2 > 100 || t3 < 0 || t3 > 100) {
        alert("Error: Las notas deben estar entre 0 y 100 puntos.");
        return;
    }

    let promedio = (t1 + t2 + t3) / 3;

    notaPromedio.textContent = "Promedio Anual: " + promedio.toFixed(1) + " Pts.";

    notaPromedio.classList.remove("text-success", "text-danger");

    if (promedio >= 51) {
        notaPromedio.classList.add("text-success");
    } else {
        notaPromedio.classList.add("text-danger");
    }

    return promedio;
}

btnCalcular.addEventListener("click", calcularPromedio);