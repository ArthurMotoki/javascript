function contar() {
    let ini    = document.getElementById('txti')
    let fim    = document.getElementById('txtf')
    let passo  = document.getElementById('txtp')
    let res    = document.getElementById('res')
    
    if (ini.value == 0 || fim.value == 0 || passo.value == 0) {
        window.alert('[ERRO]')
        res.innerText = ('Impossível contar!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) { 
            //contagem progressiva
           for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} 	\u{1F4A8} ` //colocando emoji no JS.Ex :U+1F4AB para \u{F4AB}
            } 
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p)
            res.innerHTML += `${c} 	\u{1F4A8} `
        }
        res.innerHTML += `\u{1F4A4} `
    }
        
}