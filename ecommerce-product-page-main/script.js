const cart = []
var soma = 0

function clickBotaoAdicionar(){
    let quantidade = document.getElementById('quantidade')
    console.log(quantidade)
    soma = soma + 1

    if (soma < 0){
        soma = 0 
        quantidade.innerHTML = `${soma}`  
    } else {
        quantidade.innerHTML = `${soma}`
    }   
}