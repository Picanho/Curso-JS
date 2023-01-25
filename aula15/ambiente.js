let num = [5, 8, 2, 9, 3];
num.sort()
num.push(1)
// for (let pos = 0;pos < num.length; pos++) {
//     console.log(`a posição ${pos} tem o valor ${num[pos]}`)
// }

// console.log(num)

// for(let pos in valores) {
//     console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
// }   ESSA E A FORMA MAIS FACIL E GOSTOSA
console.log(num)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`o primeiro valor do vetor e ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor n foi encontrado')
} else {
    console.log(`o valor esta na posicao ${pos}`)
}