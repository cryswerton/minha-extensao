document.addEventListener('DOMContentLoaded', function(){

    const btn = document.querySelector('#btn')
    const txt = document.querySelector('#texto')

    btn.onclick = function(e) {
        e.preventDefault()
        txt.innerHTML = '<p>Essa é a minha primeira extensão do Google Chrome</p>'
    }

})