
function sumar() {
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA + numeroB;
    alert(numeroA + " + " + numeroB + " = " + resultado);
}

function restar() {
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA - numeroB;
    alert(numeroA + " - " + numeroB + " = " + resultado);
}

function multiplicar() {
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA * numeroB;
    alert(numeroA + " * " + numeroB + " = " + resultado);
}

function dividir() {
    const numeroA = parseInt(prompt("Ingrese primer numero"));
    const numeroB = parseInt(prompt("Ingrese el otro numero"));
    const resultado = numeroA / numeroB;
    alert(numeroA + " / " + numeroB + " = " + resultado);
}

function calcularPromedio() {
    const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números para calcular el promedio"));
    let suma = 0;

    for (let i = 0; i < cantidadNumeros; i++) {
        const numero = parseInt(prompt("Ingrese el número " + (i + 1)));
        suma += numero;
    }

    const promedio = suma / cantidadNumeros;
    alert("El promedio es: " + promedio);
}

function calcularPotencia() {
    const base = parseInt(prompt("Ingrese la base"));
    const exponente = parseInt(prompt("Ingrese el exponente"));
    const resultado = Math.pow(base, exponente);
    alert(base + " ^ " + exponente + " = " + resultado);
}

function calcularRaizCuadrada() {
    const numero = parseInt(prompt("Ingrese el número para calcular la raíz cuadrada"));
    const resultado = Math.sqrt(numero);
    alert("La raíz cuadrada de " + numero + " es: " + resultado);
}

let opcion = parseInt(prompt("Elija una opción: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-calcular promedio \n 6-calcular potencia \n 7-calcular raíz cuadrada \n 8-salir"));

while (opcion !== 8) {
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
        default:
            alert("Opcion incorrecta");
            break;
    }

    opcion = parseInt(prompt("Elija una opción: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-calcular promedio \n 6-calcular potencia \n 7-calcular raíz cuadrada \n 8-salir"));
}

alert("Finalizado programa, enter para cerrarlo");