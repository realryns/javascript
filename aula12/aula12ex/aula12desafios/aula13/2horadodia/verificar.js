function verificar() {
    var data = new Date()
    var hora = data.getHours()
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
    } else if (hora < 18) {
        img.src = 'fototarde.png'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#563D5F'
    }
}