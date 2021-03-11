var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []        

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

/* Maneira inteligente de "percorrer vetor e verificar a existência de um valor dentro dele, -1 -> NÃO ENCONTROU"
 if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
*/

function inLista(n, l=[]){
   
    for(var i in l){
        if(n == l[i]){
            return true
        }else{
            return false
        }
    }

}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(num.value)
        
        //lista.innerHTML = null
        //for(var i in valores){ 
            var item = document.createElement('option')
            item.text = `O valor ${num.value} foi adicionado.`//${valores[i]}
            lista.appendChild(item)
            res.innerHTML = ''
        //}

    }else{
        window.alert(`Valor inválido ou já encontrado na lista.`)
    }
    num.value = '' // remove o valor inserido do input 
    num.focus() // chama o focus novamente para ele

}


function finalizar(){
    
    if(valores.length == 0){
        window.alert(`Insira valores antes de finalizar!`)
    }else{
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        
        for(var i in valores){
            soma+=Number(valores[i])

            if(valores[i] > maior){
                maior = valores[i]
            }
            if(valores[i] < menor){
                menor = valores[i]
            }
        }

        media = soma / total
        
        res.innerHTML = ''
        res.innerHTML += `<P>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores deu ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores foi ${media}.</p>`
    }
}

function limpar(){
    valores = []
    num.value = ''
    lista.value = ''
    res.value = ''
    res.innerHTML = null
    lista.innerHTML = null
    num.focus()
}

