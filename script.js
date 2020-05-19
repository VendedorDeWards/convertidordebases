function convertToBase10() {
    let strNumber = document.getElementById('number').value                             // Crea variables para los valores de cada campo
    let base = parseInt(document.getElementById('base').value);
    let number = parseInt(strNumber);                                                   // Crea otra variable para guardar el numero como un entero
    let currentNumber;                                                                  // Define variables para la iteración y para el resultado
    let result = 0;
    for (let i = 1; i <= strNumber.length; i++) {                                       // Itera entre cada numero
        currentNumber = parseInt(strNumber.charAt(strNumber.length - i));               // Agarra el numero de esta iteración
        if (currentNumber !== 0) {                                                      // Si el numero es 1
            result += base ** (i - 1) * currentNumber;                                  // Cambia el resultado a la base a la potencia de 
        }                                                                               // la posición por el número de esta iteración
    }
    container = document.getElementById('container');                                   // Muestra el resultado
    try {
        container.removeChild(document.getElementById('result'));
    }
    catch {}
    resultDiv = document.createElement('div');                                          // Devuelve el resultado
    resultDiv.innerHTML = 'El resultado es ' + result.toString();
    resultDiv.id = 'result';
    container.appendChild(resultDiv)
}


$('form').on('submit', function(event) {
    event.preventDefault();
 })