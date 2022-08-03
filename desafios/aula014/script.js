function verificar() {
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) { 
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else { 
        var fsex   = document.getElementsByName('radsex')
        var idade  = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') //criando um elemento pelo JS
        img.setAttribute('id', 'foto') //colocando id em foto pelo JS
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10 ) {
                //Criança
                img.setAttribute('src','imagens/kid-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','imagens/jovem-m.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src','imagens/adulto-m.png')
            } else {
                //Idoso(a)
                img.setAttribute('src','imagens/idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10 ) {
                //Criança
                img.setAttribute('src','imagens/kid-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','imagens/jovem-f.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src','imagens/adulto-f.png')
            } else {
                //Idoso(a)
                img.setAttribute('src','imagens/idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) //adicionar elemento
    }
}