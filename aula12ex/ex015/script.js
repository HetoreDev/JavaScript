function verificar(){
    var data = new Date()
    var ano =  data.getFullYear() 
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    }else{
        var fSex = document.getElementsByName('radsex')// 0 - Masculino / 1 - Feminino
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')// Cria dinamicamente a tag img que logo abaixo será chamada no res que é uma div

        if(fSex[0].checked){
            if(idade > 0 && idade < 13){
                img.setAttribute('src', '/aula12ex/ex015/imagens/menino.png')
                gênero = 'Menino'
            }else if(idade < 19){
                img.setAttribute('src', '/aula12ex/ex015/imagens/rapaz.png')
                gênero = 'Rapaz'
            }else if(idade < 65){
                img.setAttribute('src', '/aula12ex/ex015/imagens/homem.png')
                gênero = 'Homem'
            }else{
                img.setAttribute('src', '/aula12ex/ex015/imagens/idoso.png')
                gênero = 'Idoso'
            }
        }else if (fSex[1].checked){
            if(idade > 0 && idade < 13){
                img.setAttribute('src', '/aula12ex/ex015/imagens/menina.png')
                gênero = 'Menina'
            }else if(idade < 19){
                img.setAttribute('src', '/aula12ex/ex015/imagens/moca.png')
                gênero = 'Moça'
            }else if(idade < 65){
                img.setAttribute('src', '/aula12ex/ex015/imagens/mulher.png')
                gênero = 'Mulher'
            }else{
                img.setAttribute('src', '/aula12ex/ex015/imagens/idosa.png')
                gênero = 'Idosa'
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // Adiciona uma criança* para a tag Div de nome res
    }

}   
