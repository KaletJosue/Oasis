const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    rest: true
})

sr.reveal('.container', { delay: 100, origin: 'top' });

var login = document.getElementById("login")

login.addEventListener('click', () => {
    alert("Estamos trabajando en actualizaciones")
})