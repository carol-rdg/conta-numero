function contar() {
    var inicio = document.getElementById('txi')
    var fim = document.getElementById('txf')
    var passo = document.getElementById('txp')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[Erro] dados incompletos')
    } else {
        res.innerHTML = 'contando: '
        //guardando variável e transformando em número
        var i = Number(inicio.value) 
        var f = Number(fim.value)
        var p = Number(passo.value)

        if( i < f ) //contagem crescente
        for (let c = i; c <= f; c += p) { 
            res.innerHTML += ` ${c} \u{1F449} `
        } 
        else { //contagem decrescente
           for (let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F519} `
           }
        }res.innerHTML += `\u{1F3C1}`
    } 

}



