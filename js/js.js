let moon = document.getElementById('moon')
let stars = document.getElementById('stars')
let mountainsBehind = document.getElementById('mountains_behind')
let mountainsFront = document.getElementById('mountains_front')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let header = document.querySelector('header')

window.addEventListener('scroll', function() {
    let value = window.scrollY
    stars.style.left = value * 0.25 + 'px'
    moon.style.top = value * 1.05 + 'px'
    mountainsBehind.style.top = value * 0.5 + 'px'
    mountainsFront.style.top = value * 0 + 'px'
    text.style.marginRight = value * 4 + 'px'
    text.style.marginTop = value * 1.5 + 'px'
    btn.style.marginTop = value * 1.5 + 'px'
    header.style.top = value * 0.5 + 'px'
})