//Variables útiles
var precio_base = 2000;

var edad_18 = 0.1;
var edad_25 = 0.2;
var edad_50 = 0.3;

var casado_18 = 0.1;
var casado_25 = 0.2;
var casado_50 = 0.3;

var hijos_recargo = 0.2;

var recargo = 0;
var recargo_total = 0;

var precio_final = 0;

var nombre;
var edad;
var casado;
var edad_conyuge;
var hijos;
var cantidad_hijos;

//Función para calcular el recargo por propiedades
function calcularRecargoPropiedades(propiedades) {
    return precio_base * 0.35 * propiedades;
}

//Función para calcular el recargo por ingresos
function calcularRecargoIngresos(ingresos) {
    return ingresos * 0.05;
}

//Función para solicitar datos y realizar cotización
function cotizar() {
    nombre = prompt("Ingrese su nombre, por favor");
    if (nombre === null || nombre.trim() === "") return; // Si el usuario cancela o no ingresa nada, salimos de la cotización
    edad = parseInt(prompt("¿Cuantos años tiene? Ingrese solamente números "));
    casado = prompt("¿Está casado actualmente?");
    if (casado.toUpperCase() === "SI") {
        edad_conyuge = parseInt(prompt("¿Que edad tiene su esposo/a?"));
    }
    hijos = prompt("¿Tiene hijos o hijas?");
    if (hijos.toUpperCase() === "SI") {
        cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"));
    } else {
        cantidad_hijos = 0;
    }

    // Aquí se pueden agregar solicitudes de datos adicionales, como propiedades e ingresos

    // Calcular recargos por edad
    if (edad >= 18 && edad < 25) {
        recargo = precio_base * edad_18;
        recargo_total += recargo;
    } else if (edad >= 25 && edad < 50) {
        recargo = precio_base * edad_25;
        recargo_total += recargo;
    } else if (edad >= 50) {
        recargo = precio_base * edad_50;
        recargo_total += recargo;
    }

    // Calcular recargos por edad del cónyuge
    if (casado.toUpperCase() === "SI") {
        if (edad_conyuge >= 18 && edad_conyuge < 25) {
            recargo = precio_base * casado_18;
            recargo_total += recargo;
        } else if (edad_conyuge >= 25 && edad_conyuge < 50) {
            recargo = precio_base * casado_25;
            recargo_total += recargo;
        } else if (edad_conyuge >= 50) {
            recargo = precio_base * casado_50;
            recargo_total += recargo;
        }
    }

    // Calcular recargo por hijos
    recargo = precio_base * hijos_recargo * cantidad_hijos;
    recargo_total += recargo;

    // Aquí se pueden calcular y sumar recargos adicionales, como por propiedades e ingresos

    precio_final = precio_base + recargo_total;

    // Resultado
    alert("Para el asegurado " + nombre);
    alert("El recargo total será de: " + recargo_total);
    alert("El precio será de: " + precio_final);

    recargo_total = 0; // Reiniciar recargo_total para la próxima cotización
}

// Ciclo para realizar múltiples cotizaciones hasta que el usuario ingrese "Salir"
while (true) {
    cotizar();
    var continuar = prompt("¿Desea realizar otra cotización? (Ingrese 'Salir' para finalizar)");
    if (continuar.toUpperCase() === "SALIR") {
        break;
    }
}
