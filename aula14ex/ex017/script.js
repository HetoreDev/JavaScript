function tabuada(){
    var num = document.getElementById('num')
    var tab = document.getElementById('tab')

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        tab.innerHTML = ''
        var n = Number(num.value)
        for(var i = 1; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`
            tab.appendChild(item)// método que adiciona dentro do objeto um "filho" no caso um option dentro do select
        }
    
    }

}
