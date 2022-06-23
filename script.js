const btn = document.getElementById('btn-id')
const container = document.getElementById('container')
const jogo = document.getElementById('jogo')
const app = document.getElementById('app')
const img_jogo = document.getElementById('jogo-img')
const img_app = document.getElementById('app-img')

btn.addEventListener('click', () => {
    container.classList.toggle('container')
    container.classList.toggle('mostrar')
})

jogo.addEventListener('click', () => {
    img_jogo.classList.toggle('imagens')
    img_jogo.classList.toggle('imagens-show')
})

app.addEventListener('click', () => {
    img_app.classList.toggle('imagens')
    img_app.classList.toggle('imagens-show')
})










