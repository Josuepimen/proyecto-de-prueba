function calcularMCM(num1, num2) {
    // Validar que ambos números sean enteros positivos
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 <= 0 || num2 <= 0) {
    throw new Error("Los valores deben ser números enteros positivos");
    }

    // encontrar el maximo comun divisot (MCD)
    let mcd = encontrarMCD(num1, num2);

    // calcular el MCM utilizando la formula: MCM = (num1 * num2) / MCD
    return Math.floor((num1 * num2) / mcd);
}

  // funcion auxiliar para encontrar el maximo comun divisor (MCD)
function encontrarMCD(num1, num2) {
    // caso base, si num2 es 0, entonces el MCD es num1
    if (num2 === 0) {
    return num1;
    }

    // recursion, calcular el MCD de num1 y el residuo de dividir num1 entre num2
    return encontrarMCD(num2, num1 % num2);
}

const mcm = calcularMCM(12, 18);
    console.log("El MCM es:", mcm); // se imprime el resultado
