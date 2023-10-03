function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0  && hora < 12) {
        //BOM DIA
        img.src = 'img/manha.png'
        document.body.style.background = '#AC8C25'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'img/tarde.png'
        document.body.style.background = '#D5D3D2'
    } else {
        // BOA NOITE
        img.src = 'img/noite.png'
        document.body.style.background = '#322944'
    }
}