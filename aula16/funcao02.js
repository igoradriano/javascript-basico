function soma(n1=0,n2=0){  //se n1 não for passado ele é igual a 0
    return n1 + n2
}

console.log(soma(5))
console.log(soma(5,2))


//-----------------------------------------------------------------------
//variável pode receber uma funcao
let v = function(x){
    return x*2
}

console.log(v(5))
//------------------------------------------------------------------------
function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c --){
        fat *=c
    }
    return fat
}

console.log(fatorial(5))

//-------------------------------------------------------------------------
//Recursivamente
function fatorial2(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial2(5))