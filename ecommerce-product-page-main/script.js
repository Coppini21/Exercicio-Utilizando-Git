var soma = 0
var somaLocalStorage = 0
var meuStorage = window.localStorage

function clickBotaoAdicionar(){
    let quantidade = document.getElementById('quantidade')
    soma = soma + 1

    if (soma < 0){
        soma = 0 
        quantidade.innerHTML = `${soma}`
    } else {
        quantidade.innerHTML = `${soma}`
    }   
}

function clickBotaoEliminar(){
    let quantidade = document.getElementById('quantidade')
    soma = soma - 1

    if (soma < 0){
        soma = 0 
        quantidade.innerHTML = `${soma}`
    } else {
        quantidade.innerHTML = `${soma}`
    }   
}

function clickBotaoAddCart(){
    var quantidadeCarrinho = document.getElementById("quantidadeCarrinho")
 
    if (soma > 0) {
        somaLocalStorage = soma
        meuStorage.setItem('ValorTotal-Produto-Tenis', JSON.stringify(somaLocalStorage * 125))
        quantidadeCarrinho.style.display = 'flex'
        quantidadeCarrinho.innerHTML = somaLocalStorage
    }else{
        quantidadeCarrinho.style.display = 'none'
        localStorage.clear()
    }
}


window.addEventListener("click", function(event) {
    let openCart = document.getElementById('divDescricaoProdutoCart')

    if (!openCart.contains(event.target)){
        if (openCart.style.display == 'block'){
            openCart.style.display = 'none'
        }
    }
})

function openCart(event){
    let openCart = document.getElementById('divDescricaoProdutoCart')

        openCart.style.display = 'block'
        event.stopPropagation();   
}
