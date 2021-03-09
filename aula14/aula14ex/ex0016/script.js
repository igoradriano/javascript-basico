function contar(){
    let inicio = window.document.getElementById("txti")
    let fim= window.document.getElementById("txtf")
    var passo = window.document.getElementById("txtp")
    let res = window.document.getElementById("res")
    //condição para não existencia de entrada
    if((inicio.value.length == 0) || (fim.value.length == 0) || (passo.value.length == 0)){ 
        res.innerHTML = "Impossível contar!"
        //window.alert('[ERRO] Faltam dados!')
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)   //Transformando em número
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert("Passo inválido! Considerando Passo 1!")
            p = 1
        }

        if (i < f){
            //CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // CONTAGE REGRESSIVA
            for(let c = i; c >=f; c-= p)
                res.innerHTML += `${c} \u{1F449}`
        }  
        res.innerHTML += `\u{1F3C1}` 
    }
}
