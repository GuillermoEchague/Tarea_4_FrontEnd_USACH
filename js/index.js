/**
 * Calcula la suma de un arreglo de notas.
 * @param {number[]} notas - Un arreglo de números que representa las notas.
 * @returns {number} La suma de todas las notas en el arreglo.
 */
function calcularSumaNotas(notas) {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  return suma;
}

/**
 * Calcula el promedio de un arreglo de notas.
 * @param {number[]} notas - Un arreglo de números que representa las notas.
 * @returns {number} El promedio de las notas en el arreglo.
 */
function calcularPromedio(notas) {
  const suma = calcularSumaNotas(notas);
  return suma / notas.length;
}

/**
 * Calcula y muestra la suma y el promedio de las notas cuando se hace clic en un botón.
 * Obtiene las notas ingresadas por el usuario, valida la entrada y muestra los resultados.
 */
function calcular() {
  const notasInput = document.getElementById("notasInput").value;

  // Convierte el texto ingresado en un arreglo de números
  const notas = notasInput.split(",").map(Number);

  // Valida que todas las entradas sean números válidos
  if (notas.some(isNaN)) {
    alert("Por favor, ingresa solo números separados por comas.");
    return;
  }

  // Calcula la suma y el promedio de las notas
  const sumaNotas = calcularSumaNotas(notas);
  const promedio = calcularPromedio(notas);

  // Muestra los resultados
  document.getElementById("sumaResultado").textContent =
    "Suma de las notas: " + sumaNotas;
  document.getElementById("promedioResultado").textContent =
    "Promedio de las notas: " + promedio.toFixed(2);
}
