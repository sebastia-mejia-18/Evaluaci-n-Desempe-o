function calcularTarifa() {
    // Obtener los valores de los campos de entrada
    let edad = parseInt(document.getElementById("edad").value);
    let esEstudiante = document.getElementById("esEstudiante").value.toLowerCase();
    let distancia = parseFloat(document.getElementById("distancia").value);

    let tarifaBase = 0;

    // Calcular la tarifa base según la edad y el estado de estudiante
    if (edad <= 12) {
        tarifaBase = 1500;
    } else if (edad >= 60) {
        tarifaBase = 2000;
    } else if (esEstudiante === "sí" || esEstudiante === "si") {
        tarifaBase = 2500;
    } else {
        tarifaBase = 3000;
    }

    // Aplicar recargo si la distancia es mayor a 50 km
    if (distancia > 50) {
        tarifaBase = tarifaBase * 1.10;
    }

    // Mostrar el resultado en la página
    document.getElementById("resultadoTarifa").textContent = "La tarifa final es: $" + tarifaBase.toFixed(2);
}