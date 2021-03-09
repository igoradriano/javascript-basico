let res = window.document.getElementById("res")
let num = document.getElementById("txti")
let tab = document.getElementById('seltab')
let lista = []

function adicionar(){
    
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
                res.innerHTML = `` //apagar o resultado final, pois adicionei mais um elemento
            }else{
                window.alert("O valor já foi adicionado! Tente outro valor")
            }
        }else{
            window.alert("Valor é inválido ou já encontrado na lista")
        }
            
    }
    num.value = ``   //para apagar o valor do campo numeros assim que inserir
    num.focus();   //para colocar o cursos no campo de inserir numeros 
}


function finalizar(){
    if(lista.length == 0){
        window.alert("Adicione valores antes de finalizar!")
    }else{
        let tam = Number(lista.length)
        let maior = lista[0]
        let menor = lista[0]
        for (let pos in lista){
            if (lista[pos] > maior){
                maior = lista[pos]
            }
            if (lista[pos] < menor){
                menor = lista[pos]
            }
        }
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
    

}