var palanca = document.querySelector('.theme-switch__checkbox')
var body = document.body

palanca.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
})

// scroll

window.addEventListener('scroll', function() {
    var card1 = document.querySelector('.card:first-child')
    var card2 = document.querySelector('.card:nth-child(2)')
    var card3 = document.querySelector('.card:last-child')

    let posicionObj1 = card1.getBoundingClientRect().top
    let posicionObj2 = card2.getBoundingClientRect().top
    let posicionObj3 = card3.getBoundingClientRect().top

    let tamanoPantalla = this.window.innerHeight / 3.5

    if ((posicionObj1 - 400) < tamanoPantalla) {
        card1.classList.add('active')
    }

    if ((posicionObj2 - 400) < tamanoPantalla) {
        card2.classList.add('active')
    }

    if ((posicionObj3 - 400) < tamanoPantalla) {
        card3.classList.add('active')
    }
})