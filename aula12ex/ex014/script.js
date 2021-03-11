function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 9    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = "/aula12ex/ex014/imagens/fotodia.png"
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = "/aula12ex/ex014/imagens/fototarde.png"
        document.body.style.background = '#b9846f'
    }else{
        //BOA NOITE
        img.src = "/aula12ex/ex014/imagens/fotonoite.png"
        document.body.style.background = '#362b49'
    }
}
