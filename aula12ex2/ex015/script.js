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
        if (fsexo[0].checked){
            gênero = "Homem"
        }else{
            gênero = "Mulher"
        }
        res.innerHTML = `Deterctamos ${gênero} com ${idade} anos.`
    }


}

