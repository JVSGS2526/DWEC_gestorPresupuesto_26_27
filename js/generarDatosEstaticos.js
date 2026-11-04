import * as gPWeb from "./gestionPresupuestoWeb.js";
import * as gP from "./gestionPresupuesto.js";

gP.actualizarPresupuesto(1500);
gPWeb.mostrarDatoEnId("presupuesto", gP.mostrarPresupuesto());

let g1 = new gP.CrearGasto("Compra carne", 23.44, "2021-10-06", "casa", "comida")
let g2 = new gP.CrearGasto("Compra fruta y verdura", 14.25, "2021-09-06", "supermercado", "comida")
let g3 = new gP.CrearGasto("Bonobús", 18.60, "2020-05-26", "transporte")
let g4 = new gP.CrearGasto("Gasolina", 60.42, "2021-10-08", "transporte", "gasolina")
let g5 = new gP.CrearGasto("Seguro hogar", 206.45, "2021-09-26", "casa", "seguros")
let g6 = new gP.CrearGasto("Seguro coche", 195.78, "2021-10-06", "transporte", "seguros")

gP.anyadirGasto(g1)
gP.anyadirGasto(g2)
gP.anyadirGasto(g3)
gP.anyadirGasto(g4)
gP.anyadirGasto(g5)
gP.anyadirGasto(g6)
