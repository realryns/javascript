function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = ano - Number(fano.value)
        var fsex = document.getElementsByName('radsex')
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 5) {
                img.setAttribute('src', 'fotobebem.png')
            } else if (idade >=6 && idade < 18) {
                img.setAttribute('src', 'fotojovemm.png')
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', 'fotoadultom.png')
            } else {
                img.setAttribute('src', 'fotoidosom.png')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 5) {
                img.setAttribute('src', 'fotobebef.png')
            } else if (idade >=6 && idade < 18) {
                img.setAttribute('src', 'fotojovemf.png')
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src', 'fotoadultof.png')
            } else {
                img.setAttribute('src', 'fotoidosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gen} com ${idade} anos.</p>`
        res.appendChild(img)
        
    }   


}