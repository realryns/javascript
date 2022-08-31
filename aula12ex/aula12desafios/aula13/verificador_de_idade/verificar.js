function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')    
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotobebem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'fotojovemm.png')
                //Jovem
            } else {
                img.setAttribute('src', 'fotoidosom.png')
                //Idoso
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fotobebef.png')
                //Criança
            } else if (idade < 21) {
                img.setAttribute('src', 'fotojovemf.png')
                //Jovem
            } else {
                img.setAttribute('src', 'fotoadultof.png')
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gen} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}