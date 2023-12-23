const historial = []
class operacion{
    constructor(simbolo, numeroA, numeroB, resultado){

        this.simbolo = simbolo;
        this.numeroA = numeroA
        this.numeroB = numeroB
        this.resultado = resultado
    }
}

function sumar() {
    let numeroA = parseInt(prompt("Ingrese primer numero"))
    while (Number.isNaN (numeroA)) {
        numeroA = parseInt(prompt("Ingrese primer numero"))
    }  ; 
    let numeroB = parseInt(prompt("Ingrese el otro numero"))
    while (Number.isNaN (numeroB)){ 
        numeroB = parseInt(prompt("Ingrese el otro numero"))
    };
    let resultado = numeroA + numeroB;
    alert(numeroA + " + " + numeroB + " = " + resultado)

    const operacion = new Operacion (" + ", numeroA, numeroB, resultado)

    historial.push(operacion);
}

function restar() {
    let numeroA = parseInt(prompt("Ingrese primer numero"))
    while (Number.isNaN (numeroA)) {
        numeroA = parseInt(prompt("Ingrese primer numero"))
    }  ;
    let numeroB = parseInt(prompt("Ingrese el otro numero"))
    while (Number.isNaN (numeroB)){ 
        numeroB = parseInt(prompt("Ingrese el otro numero"))
    };
    let resultado = numeroA - numeroB;
    alert(numeroA + " - " + numeroB + " = " + resultado)
    const operacion = new Operacion (" - ", numeroA, numeroB, resultado)

    historial.push(operacion);
}

function multiplicar() {
    let numeroA = parseInt(prompt("Ingrese primer numero"))
    while (Number.isNaN (numeroA)) {
        numeroA = parseInt(prompt("Ingrese primer numero"))
    }  ;
    let numeroB = parseInt(prompt("Ingrese el otro numero"))
    while (Number.isNaN (numeroB)){ 
        numeroB = parseInt(prompt("Ingrese el otro numero"))
    };
    let resultado = numeroA * numeroB;
    alert(numeroA + " * " + numeroB + " = " + resultado)
    const operacion = new Operacion (" * ", numeroA, numeroB, resultado)

    historial.push(operacion);
}

function dividir() {
    let numeroA = parseInt(prompt("Ingrese primer numero"))
    while (Number.isNaN (numeroA)) {
        numeroA = parseInt(prompt("Ingrese primer numero"))
    }  ;
    let numeroB = parseInt(prompt("Ingrese el otro numero"))
    while (Number.isNaN (numeroB)){ 
        numeroB = parseInt(prompt("Ingrese el otro numero"))
    };
    let resultado = numeroA / numeroB;
    alert(numeroA + " / " + numeroB + " = " + resultado)
    const operacion = new Operacion (" / ", numeroA, numeroB, resultado)

    historial.push(operacion);
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

function verHistorial() { 
    const simbolo = prompt ("elija un simbolo para filtar historial : \n + sumas \n - restas \n * multiplicacion \n / division")

    const filtrado = historial.filter((elemento)=> {

        return operacion.simbolo == simbolo
    })

    let mensaje = "";
    filtrado.forEach((operacion)=> {
        mensaje = mensaje + operacion.numeroA + operacion.simbolo + operacion.numeroB + " = " + operacion.resultado
    
            })
       alert(mensaje);
     }
let opcion = parseInt(prompt("Elija una opción: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-calcular promedio \n 6-calcular potencia \n 7-calcular raíz cuadrada \n 8-Ver Historial \n 9-salir"));

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
        case 8:
            verHistorial()
            break;
        default:
            alert("Opcion incorrecta");
            break;
    }

   let opcion = parseInt(prompt("Elija una opción: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-calcular promedio \n 6-calcular potencia \n 7-calcular raíz cuadrada\n 8-Ver Historial \n 9-salir"));
}

alert("Finalizado programa, enter para cerrarlo")
console.log(historial);