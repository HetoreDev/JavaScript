function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }

}

console.log(`O valor do fatorial é ${fatorial(5)}`)

// Muito importante, aplicação de uma função com formato recursivo, chamo a própria função dentro dela mesma