import { nav, exitMessage, colorStatus, colorsPriority, statusChecks } from './functions.js'

nav()

exitMessage('iconExit', 'parentMessageRegister')

const task           = document.getElementById('task')
const date           = document.getElementById('date')
const buttonAdd      = document.getElementById('btnTask')
const buttonOrder    = document.getElementById('btnOrder')
const formTask       = document.getElementById('formtask')
const trQuantity     = document.getElementsByTagName('tr')
const parentMessage  = document.getElementById('parentMessageRegister')
const alertMessage   = document.getElementById('alertMessageRegister')
const checks         = document.getElementsByClassName('check')
const cellsPriority  = document.getElementsByClassName('priority')
const cellsStatus    = document.getElementsByClassName('status')
let   arrayRowsCells = []
let   arrayObjects   = []
let   order          = { Alta: 1, Media: 2, Baja: 3 };

colorStatus(cellsStatus)
colorsPriority(cellsPriority)
statusChecks(checks)

for (let i = 0; i < checks.length; i++) {
    checks[i].addEventListener('change', (e) => {
        if (e.target.parentElement.parentElement.childNodes[13].textContent === 'Pendiente') {
            e.target.parentElement.parentElement.childNodes[13].textContent = 'Terminado'
            let lastSlash = e.target.parentElement.parentElement.childNodes[11].firstChild.href.lastIndexOf('/')
            let referenceUrl = e.target.parentElement.parentElement.childNodes[11].firstChild.href
            let idRegister = referenceUrl.substring(lastSlash + 1, referenceUrl.length)
            colorStatus(cellsStatus)

            postDataOne(`http://localhost:5000/module/updatestatusone/${idRegister}`)
            async function postDataOne(url) {
                const response = await fetch(url, {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer',
                })
            }

        } else {
            e.target.parentElement.parentElement.childNodes[13].textContent = 'Pendiente'

            let lastSlash = e.target.parentElement.parentElement.childNodes[11].firstChild.href.lastIndexOf('/')
            let referenceUrl = e.target.parentElement.parentElement.childNodes[11].firstChild.href
            let idRegister = referenceUrl.substring(lastSlash + 1, referenceUrl.length)
            colorStatus(cellsStatus)

            postDataTwo(`http://localhost:5000/module/updatestatustwo/${idRegister}`)
            async function postDataTwo(url) {
                const response = await fetch(url, {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer',
                })
            }
        }
    })

}

buttonAdd.addEventListener('click', (e) => {
    e.preventDefault()

    if (date.value === '' || task.value === '') {
        parentMessage.classList.toggle('hide')
        alertMessage.textContent = 'Favor rellenar todos los campos.'
        return
    }

    formTask.submit()

})

buttonOrder.addEventListener('click', () => {
    sortTable(trQuantity, arrayRowsCells, arrayObjects, order)
})

function sortTable(tr, array1, arrayObject2, order) {
    array1 = []
    arrayObject2 = []

    for (let i = 1; i < tr.length; i++) {
        array1 = []
        for (let cell of tr[i].cells) {
            if (cell.innerText !== '') {
                array1.push(cell.innerText)
            } else if (cell.innerHTML && cell.cellIndex >= 4) {
                array1.push(`${cell.innerHTML}`)
            } else if (cell.cellIndex === 6) {
                array1.push(`${cell.innerText}`)
            }
        }
        arrayObject2.push({
            prioridad: array1[0],
            tarea: array1[1],
            fecha: array1[2],
            edit: array1[3],
            delete: array1[4],
            status: array1[5]
        })
    }

    arrayObject2.sort((
        (a, b) => order[a.prioridad] - order[b.prioridad]
    ))

    for (let i = 1; i < tr.length; i++) {

        for (let cell of tr[i].cells) {
            if (cell.cellIndex === 1) {
                cell.innerText = arrayObject2[i - 1].prioridad
            } else if (cell.cellIndex === 2) {
                cell.innerText = arrayObject2[i - 1].tarea
            } else if (cell.cellIndex === 3) {
                cell.innerText = arrayObject2[i - 1].fecha
            } else if (cell.cellIndex === 4) {
                cell.innerHTML = arrayObject2[i - 1].edit
            } else if (cell.cellIndex === 5) {
                cell.innerHTML = arrayObject2[i - 1].delete
            } else if (cell.cellIndex === 6) {
                cell.innerText = arrayObject2[i - 1].status
            }
        }
    }

    statusChecks(checks)
    colorsPriority(cellsPriority)
    colorStatus(cellsStatus)

}