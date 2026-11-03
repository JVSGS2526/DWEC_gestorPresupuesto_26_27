function mostrarDatoEnId (idElemento, valor){

    document.getElementById(idElemento).textContent = valor;
}

function mostrarGastoWeb (idElemento,gasto){
    let divGasto = document.createElement("div")
    divGasto.classList.add("gasto")
    document.getElementById(idElemento).append(divGasto)


    let divGastoDesc = document.createElement("div")
    divGastoDesc.classList.add("gasto-descripcion")
    divGastoDesc.textContent = gasto.descripcion
    divGasto.append(divGastoDesc)


    let divGastoFecha = document.createElement("div")
    divGastoFecha.classList.add("gasto-fecha")
    divGastoFecha.textContent = gasto.fecha
    divGasto.append(divGastoFecha)
   
   
    let divGastoValor = document.createElement("div")
    divGastoValor.classList.add("gasto-valor")
    divGastoValor.textContent = gasto.valor
    divGasto.append(divGastoValor)



    let divGastoEtiq = document.createElement("div")
    divGastoEtiq.classList.add("gasto-etiquetas")
    divGasto.append(divGastoEtiq)



    array.forEach(gasto => {
        let spanEtiquetas = document.createElement("span")
        spanEtiquetas.classList.add("gasto-etiquetas-etiqueta")
        spanEtiquetas.textContent = gasto.etiqueta
        divGastoEtiq.append(spanEtiquetas)

    });
    



}









export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}