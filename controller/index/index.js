var palanca = document.querySelector('.theme-switch__checkbox')
var body = document.body

palanca.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
})