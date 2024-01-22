function sumar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 + num2;
    mostrarResultado(`${num1} + ${num2} = ${resultado}`);
    
    localStorage.setItem("mostrarResultado", resultado)
}

function restar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 - num2;
    mostrarResultado(`${num1} - ${num2} = ${resultado}`);

    localStorage.setItem("mostrarResultado", resultado)
}

function multiplicar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 * num2;
    mostrarResultado(`${num1} * ${num2} = ${resultado}`);

    localStorage.setItem("mostrarResultado", resultado)
}

function dividir() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 / num2;
    mostrarResultado(`${num1} / ${num2} = ${resultado}`);

    localStorage.setItem("mostrarResultado", resultado)
}

function calcularPromedio() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let promedio = (num1 + num2) / 2;
    mostrarResultado(`Promedio de ${num1} y ${num2} = ${promedio}`);
    localStorage.setItem("mostrarResultado", promedio)
}

function calcularPotencia() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = Math.pow(num1, num2);
    mostrarResultado(`${num1} ^ ${num2} = ${resultado}`);
    localStorage.setItem("mostrarResultado", resultado)
}

function calcularRaizCuadrada() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let resultado = Math.sqrt(num1);
    mostrarResultado(`Raíz cuadrada de ${num1} = ${resultado}`);
    localStorage.setItem("mostrarResultado", resultado)
}

function encontrarNumeroMenor() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let menor = Math.min(num1, num2);
    mostrarResultado(`El número menor entre ${num1} y ${num2} es: ${menor}`);
    localStorage.setItem("mostrarResultado", menor)
}

function encontrarNumeroMayor() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let mayor = Math.max(num1, num2);
    mostrarResultado(`El número mayor entre ${num1} y ${num2} es: ${mayor}`);
    localStorage.setItem("mostrarResultado", mayor)
}

function mostrarResultado(resultado) {
    let resultsDiv = document.getElementById('results');
    let currentResults = [...resultsDiv.innerHTML.split('\n')];
    currentResults.push(resultado);
    resultsDiv.innerHTML = currentResults.join('\n');
}


