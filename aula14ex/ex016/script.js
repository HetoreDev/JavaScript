function contar(){
var x = document.getElementById('txtinicio')
var y = document.getElementById('txtfim')
var z = document.getElementById('txtpasso')
var res = document.getElementById('res')

    if(x.value.lenght == 0 || y.value.lenght == 0 || z.value.lenght == 0){
            res.innerHTML = "Verifique os parâmentros e tente novamente"
    }else{
        var inicio = Number(x.value)
        var fim = Number(y.value)
        var passo = Number(z.value)
             
        if(passo <= 0){
            window.alert("Passo inválido. Considerando PASSO 1")
            passo = 1
        }

        if(inicio < fim){
            for(; inicio <= fim; inicio += passo){
                res.innerHTML += `${inicio}\u{1F449}` 
            }
        }else{
            for(; inicio >= fim; inicio -= passo){
                res.innerHTML += `${inicio}\u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`// Unicode Emoji List - Trará a tabela com todos os códigos dos emoji disponíveis    
    }
            
        
}