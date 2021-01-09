document.addEventListener('DOMContentLoaded', function(){

    const btn = document.querySelector('#btn')
    const txt = document.querySelector('#texto')

    btn.onclick = function(e) {
        e.preventDefault()
        txt.innerHTML = 'Minha Primeira Extensão Chrome'
    }

})