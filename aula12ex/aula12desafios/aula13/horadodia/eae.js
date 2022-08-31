function carregar() {

    var msg = window.document.getElementById('txt')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 16
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <  12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#E9DCBA'
        //BOM DIA!!
    } else if (hora >= 12 && hora < 18 ) {
        img.src = 'fototarde.png'
        document.body.style.background = '#734C0D'
        //BOA TARDE!
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#5E4462'
        //BOA NOITE!
    }
        
}