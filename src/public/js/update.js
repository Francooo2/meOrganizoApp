import { nav } from './functions.js'

nav()

const select       = document.getElementById('priority')
const btnUpdate    = document.getElementById('btnupdate')
const optionSelect = priority.options[priority.selectedIndex].text

if (optionSelect === 'Alta') {
    let op1 = document.createElement('option')
    let op2 = document.createElement('option')
    op1.value = 'Media'
    op1.innerText = 'Media'
    op2.value = 'Baja'
    op2.innerText = 'Baja'
    select.appendChild(op1)
    select.appendChild(op2)
}
if (optionSelect === 'Media') {
    let op1 = document.createElement('option')
    let op2 = document.createElement('option')
    op1.value = 'Alta'
    op1.innerText = 'Alta'
    op2.value = 'Baja'
    op2.innerText = 'Baja'
    select.appendChild(op1)
    select.appendChild(op2)
}
if (optionSelect === 'Baja') {
    let op1 = document.createElement('option')
    let op2 = document.createElement('option')
    op1.value = 'Media'
    op1.innerText = 'Media'
    op2.value = 'Alta'
    op2.innerText = 'Alta'
    select.appendChild(op1)
    select.appendChild(op2)
}