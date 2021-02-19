function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.getElementById("res")
    var img = window.document.getElementById("imagem")
    
    
    if(fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert("Erro! Verifique os dados e tente novamente!")
    }else{
        var fsexo = window.document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero =''
        var img = document.createElement('img')  //tag img criada dinamicamente
        img.setAttribute('id', 'foto')  //colocando dinamicamente um id = foto para a tag img
        if (fsexo[0].checked){   //verificando se a primeira tag radio esta marcada
            gênero = "Homem"
            if (idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', "criancamenino.png")  //seta os atributos do img com um novo src e seu valor
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', "jovem.png")
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', "homem.png")
            }else{
                //idoso
                img.setAttribute('src', "idoso.png")
            }
        }else{
            gênero = "Mulher"
            if (idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', "criancamenina.png")
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', "garota.png")
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', "mulher.png")
            }else{
                //idoso
                img.setAttribute('src', "idosa.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)    //adiciona abaixo do texto a variavel imagem
    }
}

