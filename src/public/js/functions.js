const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

export const inputsLoginStatus = {
    loginEmailStatus: false,
    loginPasswordStatus: false
}

export const inputsRegisterStatus = {
    registerNameStatus    : false,
    registerEmailStatus   : false,
    registerPasswordStatus: false,
    passwordConfirmStatus : false
}

export function nav() {
    const btn = document.getElementById('btn')
    const menu = document.getElementById('menu')

    btn.addEventListener("click", () => {
        menu.classList.toggle('show')
    })
}

export function validate(input, idParagraph, idIcon, expressionRegex, text1, text2, idParagraph2, idParagraph3, text3, text4) {
    const paragraph = document.getElementById(idParagraph)
    const paragraph2 = document.getElementById(idParagraph2)
    const paragraph3 = document.getElementById(idParagraph3)
    const icon = document.getElementById(idIcon)
    const expression = expresiones[expressionRegex]

    input.addEventListener('keyup', (e) => {
        if (expression.test(e.target.value)) {
            ok(input, paragraph, icon, text2, paragraph2, paragraph3)
        } else {
            error(input, paragraph, icon, text1, paragraph2, text3, text4, paragraph3)
        }
    })
}

export function matchPassword(input, inputCompare, idParagraph, idIcon, text1, text2) {
    const paragraph = document.getElementById(idParagraph)
    const icon = document.getElementById(idIcon)

    input.addEventListener('keyup', (e) => {
        if (e.target.value === inputCompare.value) {
            ok(input, paragraph, icon, text2)
        } else {
            error(input, paragraph, icon, text1)
        }
    })
}

export function ok(inputStatus, paragraph, icon, text, paragraph2, paragraph3) {
    paragraph.textContent = text
    if (paragraph2) {
        paragraph2.textContent = text
    }
    if (paragraph3) {
        paragraph3.textContent = text
    }
    icon.style.display = 'inline'
    icon.style.color = 'green'

    if (window.location.href.substring(window.location.href.lastIndexOf('/') + 1, window.location.href.length) === 'login')
        inputsLoginStatus[inputStatus.id + 'Status'] = true
    else if (window.location.href.substring(window.location.href.lastIndexOf('/') + 1, window.location.href.length) === 'register') {
        inputsRegisterStatus[inputStatus.id + 'Status'] = true
    }
}

export function error(inputStatus, paragraph, icon, text, paragraph2, text2, text3, paragraph3) {
    icon.style.display = 'inline'
    icon.style.color = 'red'
    paragraph.textContent = text
    if (paragraph2) {
        paragraph2.textContent = text2
    }
    if (paragraph3) {
        paragraph3.textContent = text3
    }

    if (window.location.href.substring(window.location.href.lastIndexOf('/') + 1, window.location.href.length) === 'login')
        inputsLoginStatus[inputStatus.id + 'Status'] = false
    else if (window.location.href.substring(window.location.href.lastIndexOf('/') + 1, window.location.href.length) === 'register') {
        inputsRegisterStatus[inputStatus.id + 'Status'] = false
    }

}

export function exitMessage(idMessage, idParent) {
    const icon = document.getElementById(idMessage)
    const parent = document.getElementById(idParent)

    icon.addEventListener('click', (e) => {
        parent.classList.toggle('hide')
    })
}

export function statusChecks(checks) {
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].parentElement.parentElement.childNodes[13].textContent === 'Terminado') {
            checks[i].checked = 1
        } else {
            checks[i].checked = 0
        }
    }
}

export function colorsPriority(cellsPriority) {
    for (let i = 0; i < cellsPriority.length; i++) {
        if (cellsPriority[i].textContent === 'Alta') {
            cellsPriority[i].style.backgroundColor = 'rgb(255, 74, 74)'
        } else if (cellsPriority[i].textContent === 'Media') {
            cellsPriority[i].style.backgroundColor = 'rgb(212, 212, 74)'
        } else if (cellsPriority[i].textContent === 'Baja') {
            cellsPriority[i].style.backgroundColor = 'lightgreen'
        }
    }
}

export function colorStatus(cellsStatus) {
    for (let i = 0; i < cellsStatus.length; i++) {
        if (cellsStatus[i].textContent === 'Pendiente') {
            cellsStatus[i].style.backgroundColor = 'rgb(255, 74, 74)'
        }  else if (cellsStatus[i].textContent === 'Terminado') {
            cellsStatus[i].style.backgroundColor = 'lightgreen'
        }
    }
}