function contar() {
    let inicio = document.getElementById('initxt')
    let fim = document.getElementById('fimtxt')
    let passo = document.getElementById('pastxt')
    let res = document.getElementById('res')

    if (inicio.value.length == 0) {
        alert('[ERRO] Verifique INÍCIO e tente novamente.')
    } else if (passo.value == 0) {
        alert('[ERRO] Verifique PASSO e tente novamente.')
    } else {        
        res.innerHTML = `Contando: `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) {
            //Contagem progressiva
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449} `
            }
        } else if (i > f) {
            //Contagem regeressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449} `
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}