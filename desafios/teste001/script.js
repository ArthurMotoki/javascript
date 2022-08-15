function carregar() {
    var sem  = document.getElementById('hora')
    var data = new Date()
    var hora = data.getDay()

    switch(hora) {
        case 0:
            sem.innerHTML = `<h2>Hoje é Domingo</h2>`
            break
        case 1: 
            sem.innerHTML = `<h2>Hoje é Segunda-feira</h2>`
            break
        case 2:
            sem.innerHTML = `<h2>Hoje é Terça-feira</h2>`
            break
        case 3: 
            sem.innerHTML = `<h2>Hoje é Quarta-feira</h2>`
            break
        case 4:
            sem.innerHTML = `<h2>Hoje é Quinta-feira</h2>`
            break
        case 5: 
            sem.innerHTML = `<h2>Hoje é Sexta-feira</h2>`
            break
        case 6: 
            sem.innerHTML = `<h2>Hoje é Sábado</h2>`
            break
        default:
            sem.innerHTML('[Erro] Dia invalido')
            break
    }
}

function calc() {
    var peso = document.getElementById('txtpeso')
    var alt  = document.getElementById('txtaltura')
    var info = document.getElementById('info')
    var res  = document.getElementById('res')
    var p    = Number(txtpeso.value)
    var a    = Number(txtaltura.value)
    var resp = p / (a * a)
    res.innerHTML = `Resultado é ${resp}`
    if (resp < 18.5) {
        res.innerHTML = `<p>De acordo com a Organização Mundial da Saúde, seu IMC está abaixo do recomendado para a sua altura.</p>`
    } else if (resp >= 18.5) {
        res.innerHTML = `<p>De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura.</p>`
    } else if (resp >= 25) {
        res.innerHTML = `<p>De acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura.</p>` 
    } else if (resp >= 30 ) {
        res.innerHTML = `<p>Obesidade Grau 1</p>`
    } else if (resp >= 35) {
        res.innerHTML = `<p>Obesidade Grau 2</p>`
    } else if (resp >= 40) {
        res.innerHTML = `<p>Obedisade Grau 3</p>`
    }
    info.innerHTML = `<p>O IMC é calculado dividindo o peso (em kg) pela altura ao quadrado (em m), de acordo com a seguinte fórmula: IMC = peso / (altura x altura).
    <br>
    O resultado de IMC é dado em kg/m2.</p>`
}

