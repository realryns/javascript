function contar() {
    var inicio = document.getElementById('initxt')
    var fim = document.getElementById('fimtxt')
    var passo = document.getElementById('pastxt')

    if (inicio.value.length == 0) {
        alert('[ERRO] Verifique INÍCIO e tente novamente.')
    } else if (fim.value < inicio.value) {
        alert('[ERRO] Verifique FIM e tente novamente.')
    } else if (passo.value == 0) {
        alert('[ERRO] Verifique PASSO e tente novamente.')
    } else {
        var res = document.getElementById('res')
        res.innerHTML = 'Olá'

        while (inicio <= fim) {
            console.log(`${fim} + ${passo}`)
        }
    }
}