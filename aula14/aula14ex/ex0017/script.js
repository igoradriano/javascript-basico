function tabuada(){
    let num = document.getElementById("txtn")
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert("Por favor, digite um número!")
    }else {
        let n = Number(num.value)
        c = 1
        tab.innerHTML = ''   //limpando o elemento select
        while (c <= 10){
            let item = document.createElement('option')
            item.text =`${n} X ${c} = ${n*c}`
            item.value = `tab${c}` //adicionando o value a cada item
            tab.appendChild(item) //Adicionando os options ao elemento selec 
            c++
        }
    }
}