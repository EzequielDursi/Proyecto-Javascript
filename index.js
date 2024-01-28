let operador ='';

document.getElementById('sumarBtn').addEventListener('click', sumar);
document.getElementById('restarBtn').addEventListener('click', restar);
document.getElementById('multiplicarBtn').addEventListener('click', multiplicar);
document.getElementById('dividirBtn').addEventListener('click', dividir);
document.getElementById('promedioBtn').addEventListener('click', calcularPromedio);
document.getElementById('potenciaBtn').addEventListener('click', calcularPotencia);
document.getElementById('raizBtn').addEventListener('click', calcularRaizCuadrada);
document.getElementById('menorBtn').addEventListener('click', encontrarNumeroMenor);
document.getElementById('mayorBtn').addEventListener('click', encontrarNumeroMayor);


function agregarDigito(digito) {
    let campoActivo = obtenerCampoActivo();
    campoActivo.value += digito;

    console.log(digito)
}

function agregarOperador(op)  {
    let num1 = document.getElementById('num1');
    console.log(num1.value);
   if (operador==''&&num1.value!='') {
   let campoActivo = obtenerCampoActivo();
   let valorCampo = campoActivo.value;
   operador = op;
   campoActivo.value += operador; }  }

function obtenerCampoActivo() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');

return operador!='' ? num2 : num1;

}

function calcularResultado() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let numeros = obtenerNumeros();
     if(num1.value!=''&&num2.value!=''){

    switch (operador) {
        case '+':
            sumar();
            break;
        case '-':
            restar();
            break;
        case '*':
            multiplicar();
            break;
        case '/':
            if (numeros[1] !== 0) {
                dividir(`${numeros[0]} / ${numeros[1]} = ${numeros[0] / numeros[1]}`);
            } else {
                mostrarResultado('Error: División por cero');
            }
            break;

            case '^':
            calcularPotencia();
            break
            case '√':
                calcularRaizCuadrada()
            break;
            case 'X̄':
                calcularPromedio()
            break;
            case '>':
                encontrarNumeroMayor()
                break;
            case '<':
                encontrarNumeroMenor()
                break;


    } 

     document.getElementById("num1").value=""
     document.getElementById("num2").value=""
     operador=""
     }

}

function obtenerNumeros() {
    let campoActivo = obtenerCampoActivo();
    let numeros = campoActivo.value.split(operador).map(parseFloat);
    return numeros;
}

function mostrarResultado(resultado) {
    let resultsDiv = document.getElementById('results');
    let currentResults = [...resultsDiv.innerHTML.split('\n')];
    currentResults.push(resultado);
    resultsDiv.innerHTML = currentResults.join('\n');
}

function guardarResultado(resultado) {
    let historial = JSON.parse(localStorage.getItem('historial')) || [];
    historial.push(resultado);
    localStorage.setItem('historial', JSON.stringify(historial));
}

function sumar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 + num2;
    mostrarResultado(`${num1} + ${num2} = ${resultado}`);

    guardarResultado(resultado);

    mostrarHistorial();
}

function restar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 - num2;
    mostrarResultado(`${num1} - ${num2} = ${resultado}`);

    guardarResultado(resultado);
    mostrarHistorial();
}

function multiplicar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 * num2;
    mostrarResultado(`${num1} * ${num2} = ${resultado}`);

    guardarResultado(resultado);
    mostrarHistorial();
}

function dividir() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 / num2;
    mostrarResultado(`${num1} / ${num2} = ${resultado}`);

    guardarResultado(resultado);
    mostrarHistorial();
}

function calcularPromedio() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let promedio = (num1 + num2) / 2;
    mostrarResultado(`Promedio de ${num1} y ${num2} = ${promedio}`);
    guardarResultado(promedio);
    mostrarHistorial();
}

function calcularPotencia() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = Math.pow(num1, num2);
    mostrarResultado(`${num1} ^ ${num2} = ${resultado}`);

    guardarResultado(resultado);
    mostrarHistorial();
}

function calcularRaizCuadrada() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let resultado = Math.sqrt(num1);
    mostrarResultado(`Raíz cuadrada de ${num1} = ${resultado}`);

    guardarResultado(resultado);
    mostrarHistorial();
}

function encontrarNumeroMenor() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let menor = Math.min(num1, num2);
    mostrarResultado(`El número menor entre ${num1} y ${num2} es: ${menor}`);
    guardarResultado(menor);
    mostrarHistorial();
}

function encontrarNumeroMayor() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let mayor = Math.max(num1, num2);
    mostrarResultado(`El número mayor entre ${num1} y ${num2} es: ${mayor}`);
    guardarResultado(mayor);
    mostrarHistorial();
    
}

function vaciarHistorial() {
    localStorage.removeItem('historial');
    mostrarHistorial();
}


function obtenerHistorial() {
    return JSON.parse(localStorage.getItem('historial')) || [];
}

function mostrarHistorial() {
    let historial = obtenerHistorial();
    let historialContainer = document.getElementById('historial-container');

    
    historialContainer.innerHTML = '';

    
    historial.forEach((resultado, index) => {
        let resultadoElement = document.createElement('div');
        resultadoElement.innerHTML = `${resultado} <button onclick="borrarResultado(${index})">Borrar</button>`;
        historialContainer.appendChild(resultadoElement);
    });
}

function borrarResultado(index) {
    let historial = obtenerHistorial();

    
    if (index >= 0 && index < historial.length) {
        historial.splice(index, 1); 
        localStorage.setItem('historial', JSON.stringify(historial)); 
        mostrarHistorial(); 
    }
}