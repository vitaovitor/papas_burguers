let tabela = document.querySelector('#tabela-reserva')

tabela.addEventListener('dblclick', function (evento){
    evento.target.parentNode.classList.add('fadeOut')

    setTimeout(function(){
        evento.target.parentNode.remove()
    }, 500)
})