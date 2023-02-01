let lucas = { nome: 'Lucas', idade: 20, sexo: 'M', peso: 60, engordar(p=0){ 
console.log('Engordou')
this.peso += p
}}
lucas.engordar(2)
console.log(`${lucas.nome} pesa ${lucas.peso} Kg`)