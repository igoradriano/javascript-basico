let res = window.document.getElementById("res")
let num = document.getElementById("txti")
let tab = document.getElementById('seltab')
let lista = []

function adicionar(){
    res.innerHTML = ``
    if (num.value.length == 0) {
        window.alert("Por favor, digite um número!")
    }else {
        let n = Number(num.value)
        let c = lista.indexOf(n)
        if (( n <= 100) & ( n >=1)){
            if (c == -1){
                lista.push(n)
                let item = document.createElement('option')
                item.text = `Valor ${n} adicionado`
                tab.appendChild(item)
            }else{
                window.alert("O valor já foi adicionado! Tente outro valor")
            }
        }else{
            window.alert("Valor é inválido ou já encontrado na lista")
        }
            
    }
}


function finalizar(){
    let tam = Number(lista.length)
    let maior = Math.max(lista)
    let menor = Math.min(lista)
    let soma = 0
    for (i in lista){
        soma += lista[i]
    }
    let media = (soma/tam)
    res.innerHTML = `<p>Ao todo, temos ${tam} números cadastrados!</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

}