'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnClose = document.querySelector('.close-modal')
const btnOpen = document.querySelector('.show-modal')

const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden');
}

btnOpen.addEventListener('click', openModal)
btnClose.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal)


document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        closeModal()
    }
})

//cerrar el modal, tecleando lo que sea