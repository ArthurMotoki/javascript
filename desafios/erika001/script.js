function  base() {
    var msg  = document.getElementById('msg')
    var img  = document.getElementById('img')
    var dtn  = document.getElementById('dtn')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    var min  = data.getMinutes()
    msg.innerHTML = `Agora são exatos ${hora}:${min}!`
    if (hora >= 5 && hora <= 12) {
        //Dia
        img.src = 'img/manha-(1).jpg'
        document.body.style.backgroundColor = '#68C2FF'
        dtn.innerHTML = 'Bom dia, Flor do dia!'
    } else if (hora >= 13 && hora <= 18) {
        //Tarde
        img.src = 'img/tarde.png'
        document.body.style.backgroundColor = '#AA7CA2'
        dtn.innerHTML = 'Boa tarde, minha Princesa!'
    } else if (hora >= 19 && hora <= 23) {
        //Noite
        img.src = 'img/noite.jpg'
        document.body.style.backgroundColor = '#18495C'
        dtn.innerHTML = 'Boa noite, meu doce de coco!'
    } else {
        //Madru
        img.src = 'img/madru.jpg'
        document.body.style.backgroundColor = '#ffbfd9'
        dtn.innerHTML = 'Vai dormir! Boa noite meu amor.'
    }

}


