function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados novamente!")
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = " "
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/bebe-m.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'img/jovem-m.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'img/adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'img/idoso-m.png') 
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/bebe-f.png')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'img/jovem-f.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'img/adulto-f.png')
            } else {
                // idoso
                img.setAttribute('src', 'img/idoso-f.png') 
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}