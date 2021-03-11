function fatorial(n=0){
    for(var fatorial = 1; n > 1; n--){
        fatorial*=n
    }
    return fatorial
}

console.log(`O valor do fatorial é ${fatorial(5)}`)