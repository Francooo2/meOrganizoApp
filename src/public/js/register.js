import { validate, matchPassword, inputsRegisterStatus } from './functions.js'

const inputRegisterName          = document.getElementById('registerName')
const inputRegisterEmail         = document.getElementById('registerEmail')
const inputRegisterPassword      = document.getElementById('registerPassword')
const inputRegisterPasswordMatch = document.getElementById('passwordConfirm')
const btnRegister                = document.getElementById('btnregister')
const formRegister               = document.getElementById('formRegister')

validate(inputRegisterName, 'validRegisterName', 'iconRegisterName', 'nombre', 'Texto requerido, no debe llevar números o simbolos.', '')
validate(inputRegisterEmail, 'validRegisterEmail', 'iconRegisterEmail', 'correo', 'Texto debe llevar formato de correo.', '')
validate(inputRegisterPassword, 'ruleone', 'iconRegisterPassword', 'password', 'Entre 8 y 16 carácteres', '', 'ruletwo', 'rulethree', 'Al menos 1 dígito', 'Al menos 1 minúscula y 1 mayúscula')
matchPassword(inputRegisterPasswordMatch, inputRegisterPassword, 'validPass', 'iconRegisterPasswordConfirm', 'Esta contraseña debe ser igual a la anterior.', '')

btnRegister.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(inputsRegisterStatus)
    if(inputsRegisterStatus.registerNameStatus && inputsRegisterStatus.registerEmailStatus && inputsRegisterStatus.registerPasswordStatus && inputsRegisterStatus.passwordConfirmStatus) {
        formRegister.submit()      
    }
})