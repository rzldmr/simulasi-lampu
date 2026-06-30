let on1 = false
let on2 = false
let on3 = false
let on4 = false

const btnToggle = document.getElementById('btnToggle1')
const lampu1 = document.getElementById('lampu1')
const lampu2 = document.getElementById('lampu2')
const lampu3 = document.getElementById('lampu3')
const lampu4 = document.getElementById('lampu4')
const lampu5 = document.getElementById('lampu5')

btnToggle1.addEventListener('click', function () {
    if (on1 == false) {
        btnToggle1.classList.remove('bi-toggle2-off')
        btnToggle1.classList.add('bi-toggle2-on')
        lampu1.src = 'lampu-nyala.png'
        lampu2.src = 'lampu-nyala.png'
        lampu3.src = 'lampu-nyala.png'
        lampu4.src = 'lampu-nyala.png'
        btnToggle1.style.color = 'green'
        on1 = true
    } else {
        btnToggle1.classList.remove('bi-toggle2-on')
        btnToggle1.classList.add('bi-toggle2-off')
        lampu1.src = 'lampu-mati.png'
        lampu2.src = 'lampu-mati.png'
        lampu3.src = 'lampu-mati.png'
        lampu4.src = 'lampu-mati.png'
        btnToggle1.style.color = 'red'
        on1 = false
    }
})

btnToggle2.addEventListener('click', function () {
    if (on2 == false) {
        btnToggle2.classList.remove('bi-toggle2-off')
        btnToggle2.classList.add('bi-toggle2-on')
        lampu5.src = 'lampu-nyala.png'
        btnToggle2.style.color = 'green'
        on2 = true
    } else {
        btnToggle2.classList.remove('bi-toggle2-on')
        btnToggle2.classList.add('bi-toggle2-off')
        lampu5.src = 'lampu-mati.png'
        btnToggle2.style.color = 'red'
        on2 = false
    }
})

btnToggle3.addEventListener('click', function () {
    if (on3 == false) {
        btnToggle3.classList.remove('bi-toggle2-off')
        btnToggle3.classList.add('bi-toggle2-on')
        lampu6.src = 'lampu-nyala.png'
        lampu7.src = 'lampu-nyala.png'
        btnToggle3.style.color = 'green'
        on3 = true
    } else {
        btnToggle3.classList.remove('bi-toggle2-on')
        btnToggle3.classList.add('bi-toggle2-off')
        lampu6.src = 'lampu-mati.png'
        lampu7.src = 'lampu-mati.png'
        btnToggle3.style.color = 'red'
        on3 = false
    }
})

btnToggle4.addEventListener('click', function () {
    if (on4 == false) {
        btnToggle4.classList.remove('bi-toggle2-off')
        btnToggle4.classList.add('bi-toggle2-on')
        lampu8.src = 'lampu-nyala.png'
        lampu9.src = 'lampu-nyala.png'
        lampu10.src = 'lampu-nyala.png'
        lampu11.src = 'lampu-nyala.png'
        btnToggle4.style.color = 'green'
        on4 = true
    } else {
        btnToggle4.classList.remove('bi-toggle2-on')
        btnToggle4.classList.add('bi-toggle2-off')
        lampu8.src = 'lampu-mati.png'
        lampu9.src = 'lampu-mati.png'
        lampu10.src = 'lampu-mati.png'
        lampu11.src = 'lampu-mati.png'
        btnToggle4.style.color = 'red'
        on4 = false
    }
})