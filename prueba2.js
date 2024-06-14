function calcularDerivada() {
    // Obtener los valores de a y b introducidos por el usuario
    var a = parseFloat(document.getElementById("valorA").value);
    var b = parseFloat(document.getElementById("valorB").value);

    // Calcular la derivada de la función radical
    var derivada = derivadaRadical(a, b);

    // Mostrar el resultado
    document.getElementById("resultado").innerText = derivada;
}

// Función para calcular la derivada de la función radical √(ax + b)
function derivadaRadical(a, b) {
    // La derivada de √(ax + b) es (1/2) * (ax + b)^(-1/2) * a
    var resultado = (1/2) * a;

    // Devolvemos la respuesta en forma de cadena
    return "La derivada de √(" + a + "x + " + b + ") es: " + resultado + " / √(" + a + "x + " + b + ")";
}