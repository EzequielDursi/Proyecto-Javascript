let resultados = [];

function sumar() {
    let numeroA = obtenerNumero("Ingrese primer numero");
    let numeroB = obtenerNumero("Ingrese el otro numero");
    let resultado = numeroA + numeroB;
    alert(numeroA + " + " + numeroB + " = " + resultado);
    resultados.push({ operacion: `${numeroA} + ${numeroB}`, resultado });
}

function restar() {
    let numeroA = obtenerNumero("Ingrese primer numero");
    let numeroB = obtenerNumero("Ingrese el otro numero");
    let resultado = numeroA - numeroB;
    alert(numeroA + " - " + numeroB + " = " + resultado);
    resultados.push({ operacion: `${numeroA} - ${numeroB}`, resultado });
}

function multiplicar() {
    let numeroA = obtenerNumero("Ingrese primer numero");
    let numeroB = obtenerNumero("Ingrese el otro numero");
    let resultado = numeroA * numeroB;
    alert(numeroA + " * " + numeroB + " = " + resultado);
    resultados.push({ operacion: `${numeroA} * ${numeroB}`, resultado });
}

function dividir() {
    let numeroA = obtenerNumero("Ingrese primer numero");
    let numeroB = obtenerNumero("Ingrese el otro numero");
    let resultado = numeroA / numeroB;
    alert(numeroA + " / " + numeroB + " = " + resultado);
    resultados.push({ operacion: `${numeroA} / ${numeroB}`, resultado });
}

function calcularPromedio() {
    const cantidadNumeros = obtenerNumero("Ingrese la cantidad de números para calcular el promedio");
    let suma = 0;

    for (let i = 0; i < cantidadNumeros; i++) {
        const numero = obtenerNumero("Ingrese el número " + (i + 1));
        suma += numero;
    }

    const promedio = suma / cantidadNumeros;
    alert("El promedio es: " + promedio);
    resultados.push({ operacion: `Promedio de ${cantidadNumeros} números`, resultado: promedio });
}

function calcularPotencia() {
    const base = obtenerNumero("Ingrese la base");
    const exponente = obtenerNumero("Ingrese el exponente");
    let resultado = Math.pow(base, exponente);
    alert(base + " ^ " + exponente + " = " + resultado);
    resultados.push({ operacion: `${base} ^ ${exponente}`, resultado });
}

function calcularRaizCuadrada() {
    const numero = obtenerNumero("Ingrese el número para calcular la raíz cuadrada");
    let resultado = Math.sqrt(numero);
    alert("La raíz cuadrada de " + numero + " es: " + resultado);
    resultados.push({ operacion: `Raíz cuadrada de ${numero}`, resultado });
}

function encontrarNumeroMenor() {
    const cantidadNumeros = obtenerNumero("Ingrese la cantidad de números para encontrar el menor");
    let numerosIngresados = [];

    for (let i = 0; i < cantidadNumeros; i++) {
        const numero = obtenerNumero("Ingrese el número " + (i + 1));
        numerosIngresados.push(numero);
    }

    let menor = Math.min(...numerosIngresados);
    alert("El número menor es: " + menor);
    resultados.push({ operacion: `Número menor de ${cantidadNumeros} números`, resultado: menor });
}

function encontrarNumeroMayor() {
    const cantidadNumeros = obtenerNumero("Ingrese la cantidad de números para encontrar el mayor");
    let numerosIngresados = [];

    for (let i = 0; i < cantidadNumeros; i++) {
        const numero = obtenerNumero("Ingrese el número " + (i + 1));
        numerosIngresados.push(numero);
    }

    let mayor = Math.max(...numerosIngresados);
    alert("El número mayor es: " + mayor);
    resultados.push({ operacion: `Número mayor de ${cantidadNumeros} números`, resultado: mayor });
}

function obtenerNumero(mensaje) {
    let numero = parseInt(prompt(mensaje));
    while (Number.isNaN(numero)) {
        numero = parseInt(prompt("Por favor, ingrese un número válido. " + mensaje));
    }
    return numero;
}

let opcion = obtenerNumero("Elija una opción: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-calcular promedio \n 6-calcular potencia \n 7-calcular raíz cuadrada \n 8-encontrar número menor \n 9-encontrar número mayor \n 10-Salir");

while (opcion !== 10) {
    switch (opcion) {
        case 1:
            sumar();
            break;
        case 2:
            restar();
            break;
        case 3:
            multiplicar();
            break;
        case 4:
            dividir();
            break;
        case 5:
            calcularPromedio();
            break;
        case 6:
            calcularPotencia();
            break;
        case 7:
            calcularRaizCuadrada();
            break;
        case 8:
            encontrarNumeroMenor();
            break;
        case 9:
            encontrarNumeroMayor();
            break;
        default:
            alert("Opcion incorrecta");
            break;
    }

    opcion = obtenerNumero("Elija una opción: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-calcular promedio \n 6-calcular potencia \n 7-calcular raíz cuadrada \n 8-encontrar número menor \n 9-encontrar número mayor \n 10-Salir");
}

mostrarResultados();

function mostrarResultados() {
    console.log("Historial de resultados:");
    for (const resultado of resultados) {
        console.log(`${resultado.operacion}: ${resultado.resultado}`);
    }
}

alert("Finalizado programa, enter para cerrarlo");