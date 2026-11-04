function mostrarDatoEnId (idElemento, valor){
    
 document.getElementById(idElemento).textContent = valor;

}

function mostrarGastoWeb (idElemento,gasto){
    let divGasto = document.createElement("div")
    divGasto.className = "gasto";
    document.getElementById(idElemento).append(divGasto)


    let divGastoDesc = document.createElement("div")
    divGastoDesc.className ="gasto-descripcion"
    divGastoDesc.textContent = gasto.descripcion
    divGasto.append(divGastoDesc)


    let divGastoFecha = document.createElement("div")
    divGastoFecha.className ="gasto-fecha"
    divGastoFecha.textContent = gasto.fecha
    divGasto.append(divGastoFecha)
   
   
    let divGastoValor = document.createElement("div")
    divGastoValor.className ="gasto-valor"
    divGastoValor.textContent = gasto.valor
    divGasto.append(divGastoValor)


    let divGastoEtiq = document.createElement("div")
    divGastoEtiq.className ="gasto-etiquetas"
    divGasto.append(divGastoEtiq)


    array.forEach(gasto => {
        let spanEtiquetas = document.createElement("span")
        spanEtiquetas.className ="gasto-etiquetas-etiqueta"
        spanEtiquetas.textContent = gasto.etiqueta
        divGastoEtiq.append(spanEtiquetas)

    });

}

function mostrarGastosAgrupadosWeb(){

}







export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}