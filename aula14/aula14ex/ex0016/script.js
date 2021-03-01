function contar(){
    let inicio = window.document.getElementById("txti")
    let fim= window.document.getElementById("txtf")
    var passo = window.document.getElementById("txtp")
    let res = window.document.getElementById("res")
    //condição para não existencia de entrada
    if(inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0){ 
        window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)   //Transformando em número
        let f = Number(fim.value)
        let p = Number(passo.value)

        
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }
    }
  
}
