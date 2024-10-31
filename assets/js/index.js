// Función para calcular la suma de las notas
function calcularSumaNotas(notas) {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  return suma;
}

// Función para calcular el promedio de las notas
function calcularPromedio(notas) {
  const suma = calcularSumaNotas(notas);
  return suma / notas.length;
}

// Función para calcular la suma y el promedio cuando se hace clic en el botón
function calcular() {
  const notasInput = document.getElementById("notasInput").value;

  // Convertimos el texto ingresado en un array de números
  const notas = notasInput.split(",").map(Number);

  // Validamos que todas las entradas sean números válidos
  if (notas.some(isNaN)) {
    alert("Por favor, ingresa solo números separados por comas.");
    return;
  }

  // Obtenemos la suma y el promedio
  const sumaNotas = calcularSumaNotas(notas);
  const promedio = calcularPromedio(notas);

  // Mostramos los resultados
  document.getElementById("sumaResultado").textContent =
    "Suma de las notas: " + sumaNotas;
  document.getElementById("promedioResultado").textContent =
    "Promedio de las notas: " + promedio.toFixed(2);
}
