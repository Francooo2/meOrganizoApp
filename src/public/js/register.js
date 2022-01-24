import { validate, matchPassword, inputsRegisterStatus, exitMessage, nav } from './functions.js'

nav()

const inputRegisterName          = document.getElementById('registerName')
const inputRegisterEmail         = document.getElementById('registerEmail')
const inputRegisterPassword      = document.getElementById('registerPassword')
const inputRegisterPasswordMatch = document.getElementById('passwordConfirm')
const btnRegister                = document.getElementById('btnregister')
const formRegister               = document.getElementById('formRegister')
const parentMessage              = document.getElementById('parentMessageRegister')
const alertMessage               = document.getElementById('alertMessageRegister')

validate(inputRegisterName, 'validRegisterName', 'iconRegisterName', 'nombre', 'Texto requerido, no debe llevar números o simbolos.', '')
validate(inputRegisterEmail, 'validRegisterEmail', 'iconRegisterEmail', 'correo', 'Texto debe llevar formato de correo.', '')
validate(inputRegisterPassword, 'ruleone', 'iconRegisterPassword', 'password', 'Entre 8 y 16 carácteres', '', 'ruletwo', 'rulethree', 'Al menos 1 dígito', 'Al menos 1 minúscula y 1 mayúscula')
matchPassword(inputRegisterPasswordMatch, inputRegisterPassword, 'validPass', 'iconRegisterPasswordConfirm', 'Esta contraseña debe ser igual a la anterior.', '')
exitMessage('iconExit', 'parentMessageRegister')

btnRegister.addEventListener('click', (e) => {
    e.preventDefault()
    if(inputsRegisterStatus.registerNameStatus && inputsRegisterStatus.registerEmailStatus && inputsRegisterStatus.registerPasswordStatus && inputsRegisterStatus.passwordConfirmStatus) {
        formRegister.submit()      
    } else {
        parentMessage.classList.toggle('hide')
        alertMessage.textContent = 'correo y/o contraseña sin formato requerido.'
    }
})