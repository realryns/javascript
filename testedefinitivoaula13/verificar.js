function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os seus dados e tente novamente.')
    } else {

        var fsex = document.getElementsByName('radsex')
        var gen = ''
        var idade = ano - Number(fano.value)
        var res = document.getElementById('res')
        var img = document.createElement('img')

        if (fsex[0].checked) {
            gen = 'Homem'

            if (idade <= 6) {
                img.setAttribute('src', 'imagens/fotobebem.png')
            } else if (idade <= 18) {
                img.setAttribute('src', 'imagens/fotojovemm.png')
            } else if (idade <= 59) {
                img.setAttribute('src', 'imagens/fotoadultom.png')
            } else {
                img.setAttribute('src', 'imagens/fotoidosom.png')
            }

        } else if (fsex[1].checked) {
            gen = 'Mulher'

            if (idade <= 6) {
                img.setAttribute('src', 'imagens/fotobebef.png')
            } else if (idade <= 18) {
                img.setAttribute('src', 'imagens/fotojovemf.png')
            } else if (idade <= 59) {
                img.setAttribute('src', 'imagens/fotoadultof.png')
            } else {
                img.setAttribute('src', 'imagens/fotoidosof.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `<p>Foi detectado ${gen} de ${idade} anos.</p>`
        res.appendChild(img)
        }
    }