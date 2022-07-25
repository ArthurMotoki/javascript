function carregar() {
    var msg  = document.getElementById('msg')
    var img  = document.getElementById('imagem')
    var data = new Date()   
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!!!
        img.src = 'img/manha.png'
        document.body.style.background = '#9beeff'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#fca432'
        //BOA TARDE!!!    
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#183147'
        //BOA NOITE
    }
}



