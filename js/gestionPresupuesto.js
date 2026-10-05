'use strict';
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0
let gastos = [];
let idGasto = 0;

// Función para actualizar el presupuesto
function actualizarPresupuesto(nuevoPresupuesto) {
    // TODO
    if (typeof nuevoPresupuesto === "number" && nuevoPresupuesto >= 0) {
        presupuesto = nuevoPresupuesto;
        return presupuesto;
    } else {
        console.error("Error: El valor introducido no es un número válido o es negativo.");
        return -1;
    }


}

// Función para mostrar el presupuesto actual
function mostrarPresupuesto() {
    // TODO
    return `Tu presupuesto actual es de ${presupuesto} €`;
    
}

 // Función constructora para crear un gasto
function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    {

        this.descripcion = descripcion;

        this.valor = 0;
        if (esNumeroNoNegativo(valor)) {
            this.valor = valor;
        }
    
        this.mostrarGasto = function () {
            return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
        };

        this.mostrarGastoCompleto = function () {
            let texto = `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\n`;
            texto += `Fecha: ${new Date(this.fecha).toLocaleString()}\n`;
            texto += "Etiquetas:\n";
            for (const etiqueta of this.etiquetas) {
                texto += `- ${etiqueta}\n`;
            }
            return texto;
        };
    
        this.actualizarDescripcion = function (nuevaDescripcion) {
            this.descripcion = nuevaDescripcion;
        };
    
        this.actualizarValor = function (nuevoValor) {
            if (esNumeroNoNegativo(nuevoValor)) {
                this.valor = nuevoValor;
            }
        };
        this.actualizarFecha = function (nuevaFecha) {
            if (esFechaValida(nuevaFecha)) {
                this.fecha = Date.parse(nuevaFecha);
            }
        };
 
        this.anyadirEtiquetas = function (...nuevasEtiquetas) {
            for (const etiqueta of nuevasEtiquetas) {
                if (!this.etiquetas.includes(etiqueta)) {
                    this.etiquetas.push(etiqueta);
                }
            }
        };

        this.borrarEtiquetas = function (...etiquetasABorrar) {
            this.etiquetas = this.etiquetas.filter(
                (etiqueta) => !etiquetasABorrar.includes(etiqueta)
            );
        };
    
        // Inicialización de fecha y etiquetas
        this.fecha = Date.now();
        if (esFechaValida(fecha)) {
            this.fecha = Date.parse(fecha);
        }
    
        this.etiquetas = [];
        this.anyadirEtiquetas(...etiquetas);

    }

}

// Función para listar los gastos almacenados en el array de gastos
function listarGastos() {
    return gastos;
}

//función para añadir un gasto al array de gastos, asignándole un id único y devolviendo dicho id
function anyadirGasto(gasto) {
    if (gasto instanceof CrearGasto) {
        gasto.id = idGasto++;
        gastos.push(gasto);
        return gasto.id;
    }
}

// Función para borrar un gasto del array de gastos dado su id
function borrarGasto(id) {
    const index = gastos.findIndex((gasto) => gasto.id === id);
    if (index !== -1) {
        gastos.splice(index, 1);
        return true;
    }
    return false;
}

function calcularTotalGastos() {}
function calcularBalance() {}

// Comprueba que el valor sea un número válido y no negativo
function esNumeroNoNegativo(valor) {
    return typeof valor === "number" && !isNaN(valor) && valor >= 0;
}
// Comprueba que la fecha sea una cadena de texto válida que pueda ser parseada a un objeto Date
function esFechaValida(fecha) {
    return typeof fecha === "string" && !isNaN(Date.parse(fecha));
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}
