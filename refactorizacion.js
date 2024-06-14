function calcularMCM(num1, num2) {
    // Validar valores de entrada
    if (!validarNumero(num1) || !validarNumero(num2)) {
throw new Error('Entrada no válida. Los números deben ser enteros positivos.');
    }
    
    // Calcular el Máximo Común Divisor (MCD) utilizando el algoritmo de Euclides
    let mcd = encontrarMCD(num1, num2);

    // Calcular el MCM utilizando la fórmula: MCM = (num1 * num2) / MCD
    return Math.floor((num1 * num2) / mcd);
}

function validarNumero(num) {
    return Number.isInteger(num) && num > 0;
}

function encontrarMCD(num1, num2) {
    // Caso base: si num2 es 0, entonces MCD es num1
    if (num2 === 0) {
return num1;
    }

    // Paso recursivo: calcular MCD de num1 y el residuo de num1 dividido por num2
    return encontrarMCD(num2, num1 % num2);
}

const mcm = calcularMCM(12, 18);
    console.log('El MCM es:', mcm); // Salida: El MCM es: 36