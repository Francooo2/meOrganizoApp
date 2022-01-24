import { validate, inputsLoginStatus, exitMessage, nav } from './functions.js'

nav()

const btnLogin           = document.getElementById('btnlogin')
const formLogin          = document.getElementById('formLogin')
const inputLoginEmail    = document.getElementById('loginEmail')
const inputLoginPassword = document.getElementById('loginPassword')
const parentMessage      = document.getElementById('parentMessageLogin')
const alertMessage       = document.getElementById('alertMessageLogin')

validate(inputLoginEmail, 'validLoginEmail', 'iconLoginEmail', 'correo', 'Texto debe llevar formato de correo.', '')
validate(inputLoginPassword, 'ruleLoginOne', 'iconLoginPassword', 'password', 'Entre 8 y 16 carácteres', '', 'ruleLoginTwo', 'ruleLoginThree', 'Al menos 1 dígito', 'Al menos 1 minúscula y 1 mayúscula')
exitMessage('iconExit', 'parentMessageLogin')

btnLogin.addEventListener('click', (e) => {
    if(inputsLoginStatus.loginEmailStatus && inputsLoginStatus.loginPasswordStatus) {
        formLogin.submit()
    } else {
        parentMessage.classList.toggle('hide')
        alertMessage.textContent = 'correo y/o contraseña sin formato requerido.'
    }
})