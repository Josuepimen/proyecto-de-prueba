function retoJs(numero) { //se crea la funcion llamada retoJs que toma el argumento llamado numero 

    return Array.from({ length: numero + 1 }, (_, i) => i).reduce((ho, la) => la + ho, 0); 
    // aqui utilizo el metodo array.from que crea un array con numero + 1 aplica una función de reducción al array. La función de reducción suma los elementos del array. El segundo argumento (0) es el valor inicial de la suma.
}
    const resultado = retoJs(3);// resultado va a ser igual al valor ingresado 
console.log(resultado); //imprime el codigo