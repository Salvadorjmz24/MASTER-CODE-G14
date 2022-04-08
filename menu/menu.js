'use strict'

const navCheckbox = document.querySelector('nav__checkbox')
const navToggle = document.querySelector('nav__toggle')
const open = document.querySelector('openA')
const close = document.querySelector('close')
const menu = document.querySelector('nav__menu')

const openA = function () {
    navCheckbox.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const nav__toggle = function () {
    navCheckbox.classList.add('hidden')
    navToggle.classList.add('hidden');
}

open.addEventListener('click', open)
close.addEventListener('click', close);

navToggle.addEventListener('click', close)


document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        close()
    }
})

