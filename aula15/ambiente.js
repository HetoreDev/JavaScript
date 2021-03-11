var num = [4,8,3,7,2,0,7]
// num[7] = 6
// num.push(9) - A função push() acrescenta no vetor mais uma posição na última colocação, e com o valor informado, valoriza esta última vaga 

console.log(`O vetor tem o se guintes elementos: ${num}`)
console.log(`E ele possui ${num.length} posições`)

for(var i = 0; i < num.length; i++){
    console.log(`O número ${num[i]} está na posição de índice ${i}`)
}

console.log(`\nBuscando a posição do valor 0 dentro do vetor, posição: ${num.indexOf(0)}\n`)

console.log(`\nDepois de organizado pelo método sort() ele ficará assim:\n${num.sort()}`)


for(var i = 0; i < num.length; i++){
    console.log(`O número ${num[i]} está na posição de índice ${i}`)
}

// For each em JavaScript
console.log(`\nJá usando o Foreach o vetor ficará assim:\n`)
for(var i in num){
    console.log(`O número ${num[i]} está na posição de índice ${i}`)
}

// Usando o indexOf() para localizar, quando não localiza, retorna -1
var pos = 0
console.log(`\nBuscando a posição do valor 20 dentro do vetor, posição: ${pos = num.indexOf(8)}`)
if(pos == -1){
    console.log(`o valor não foi encontrado dentro do vetor`)
}else{
    console.log(`o valor foi encontrado na posição ${pos}`)
}