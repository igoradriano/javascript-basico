let amigo = {nome:"Igor",
endereço:"Rua Antônia Alvez",
idade:26, 
peso:95, 
engordar(p=0){
    console.log("Engordou")
    this.peso += p
}}


amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

for(i=1;i<=12;i++){
    amigo.engordar(5)
    console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
}