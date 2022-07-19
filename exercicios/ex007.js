function somar() {
    var tn1soma = document.getElementById('txtn1soma')
    var tn2soma = document.getElementById('txtn2soma')
    var rsoma   = document.getElementById('rsoma')
    var n1soma  = Number(tn1soma.value)
    var n2soma  = Number(tn2soma.value)
    var soma    = n1soma + n2soma
    rsoma.innerHTML = `A soma entre ${n1soma} e ${n2soma} é igual a ${soma}.`
} 

function subtrair() {
    var tn1sub     = document.getElementById('txn1sub')
    var tn2sub     = document.getElementById('txn2sub')
    var rsub       = document.getElementById('rsub')
    var n1sub      = Number(tn1sub.value)
    var n2sub      = Number(tn2sub.value)
    var sub        = n1sub - n2sub
    rsub.innerHTML =`A subtração entre ${n1sub} e ${n2sub} é igual a ${sub}.`
}