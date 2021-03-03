let num = [1,2,3,8,9,3]

console.log(`Nosso vetor é o ${num}`)

//Acrescentando valores

num[3] = 6666  //posi;áo específica
console.log(`Nosso vetor é o ${num}`)
num.push(333)  //posicao específica
console.log(`Nosso vetor é o ${num}`)
console.log(`${num.length}`)
console.log(num.sort())

for(let i=0; i<num.length;i++){
    console.log(`${i+1} valor: ${num[i]}`)
}

for(let i in num){
    console.log(num[i])
}

let c = num.indexOf(77)
console.log(c)


//Podemos utilizar condicoes para indexOF


if (c==-1){
    console.log("O valor não foi encontrado!")
}else{
    console.log(`O valor encontra-se na posição ${c}`)
}