

function obtenerHistorial() {
    return JSON.parse(localStorage.getItem('historial')) || [];
}


function mostrarHistorial() {
    let historial = obtenerHistorial();
    let historialContainer = document.getElementById("historial-container");

    console.log(historialContainer)
    historialContainer.innerHTML = '';


    
    historial.forEach((resultado, index) => {
        let resultadoElement = document.createElement('div');
        resultadoElement.innerHTML = `${resultado} <button onclick="borrarResultado(${index})">Borrar</button>`;
        historialContainer.appendChild(resultadoElement);
    });
}
mostrarHistorial()


let operador ='';
document.getElementById('btn0').addEventListener('click', function () {agregarDigito('0')});
document.getElementById('btn1').addEventListener('click', function () {agregarDigito('1')});
document.getElementById('btn2').addEventListener('click', function () {agregarDigito('2')});
document.getElementById('btn3').addEventListener('click', function () {agregarDigito('3')});
document.getElementById('btn4').addEventListener('click', function () {agregarDigito('4')});
document.getElementById('btn5').addEventListener('click', function () {agregarDigito('5')});
document.getElementById('btn6').addEventListener('click', function () {agregarDigito('6')});
document.getElementById('btn7').addEventListener('click', function () {agregarDigito('7')});
document.getElementById('btn8').addEventListener('click', function () {agregarDigito('8')});
document.getElementById('btn9').addEventListener('click', function () {agregarDigito('9')});
document.getElementById('btn+').addEventListener('click', function () {agregarOperador('+')});                                
document.getElementById('btn-').addEventListener('click', function () {agregarOperador('-')});                                
document.getElementById('btn*').addEventListener('click', function () {agregarOperador('*')});                                
document.getElementById('btn/').addEventListener('click', function () {agregarOperador('/')});                                
document.getElementById('btn^').addEventListener('click', function () {agregarOperador('^')});                                
document.getElementById('btn√').addEventListener('click', function () {agregarOperador('√')});                                
document.getElementById('btnX̄').addEventListener('click', function () {agregarOperador('X̄')});                                
document.getElementById('btn>').addEventListener('click', function () {agregarOperador('>')});   
document.getElementById('btn<').addEventListener('click', function () {agregarOperador('<')});
document.getElementById('btnres').addEventListener('click', function () {calcularResultado('=')});
document.getElementById('vaciarHistorialBtn').addEventListener('click', function () {
    vaciarHistorial();
});

document.getElementById('btnres').addEventListener('click', () => {
 
    const minId = 1;
    const maxId = 671;
    const randomId = Math.floor(Math.random() * (maxId - minId + 1)) + minId;


    fetch(`https://rickandmortyapi.com/api/character/${randomId}`)
        .then((response) => response.json())
        .then((data) => renderCharacters(data))
        .catch((error) => console.error('Error al obtener el personaje:', error));
});

function renderCharacters(character) {
    const characterContainer = document.getElementById('character-container');
    
   
    characterContainer.innerHTML = '';


    characterContainer.innerHTML = `<img src="${character.image}" alt="${character.name}">`;
}                                                                                                      



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

    guardarResultado(`${num1} + ${num2} = ${resultado}`);

    mostrarHistorial();
}

function restar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 - num2;
    mostrarResultado(`${num1} - ${num2} = ${resultado}`);

    guardarResultado(`${num1} - ${num2} = ${resultado}`);
    mostrarHistorial();
}

function multiplicar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 * num2;
    mostrarResultado(`${num1} * ${num2} = ${resultado}`);

    guardarResultado(`${num1} * ${num2} = ${resultado}`);
    mostrarHistorial();
}

function dividir() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 / num2;
    mostrarResultado(`${num1} / ${num2} = ${resultado}`);

    guardarResultado(`${num1} / ${num2} = ${resultado}`);
    mostrarHistorial();
}

function calcularPromedio() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let promedio = (num1 + num2) / 2;
    mostrarResultado(`Promedio de ${num1} y ${num2} = ${promedio}`);
    guardarResultado(`Promedio de ${num1} y ${num2} = ${promedio}`);
    mostrarHistorial();
}

function calcularPotencia() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = Math.pow(num1, num2);
    mostrarResultado(`${num1} ^ ${num2} = ${resultado}`);

    guardarResultado(`${num1} ^ ${num2} = ${resultado}`);
    mostrarHistorial();
}

function calcularRaizCuadrada() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let resultado = Math.sqrt(num1);
    mostrarResultado(`Raíz cuadrada de ${num1} = ${resultado}`);

    guardarResultado(`Raíz cuadrada de ${num1} = ${resultado}`);
    mostrarHistorial();
}

function encontrarNumeroMenor() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let menor = Math.min(num1, num2);
    mostrarResultado(`El número menor entre ${num1} y ${num2} es: ${menor}`);
    guardarResultado(`El número menor entre ${num1} y ${num2} es: ${menor}`);
    mostrarHistorial();
}

function encontrarNumeroMayor() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let mayor = Math.max(num1, num2);
    mostrarResultado(`El número mayor entre ${num1} y ${num2} es: ${mayor}`);
    guardarResultado(`El número mayor entre ${num1} y ${num2} es: ${mayor}`);
    mostrarHistorial();
    
}

function vaciarHistorial() {
    localStorage.removeItem('historial');
    mostrarHistorial();
}




function borrarResultado(index) {
    let historial = obtenerHistorial();

    
    if (index >= 0 && index < historial.length) {
        historial.splice(index, 1); 
        localStorage.setItem('historial', JSON.stringify(historial)); 
        mostrarHistorial(); 
    }
}

