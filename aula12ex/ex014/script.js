function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#d4b77c'
    } else if (hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#d1c4c6'
    }   else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#5e4b78'
    }
}