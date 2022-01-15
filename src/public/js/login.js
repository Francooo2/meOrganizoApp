import { validate, inputsLoginStatus } from './functions.js'

const   btnLogin                   = document.getElementById('btnlogin')
const   formLogin                  = document.getElementById('formLogin')
const   inputLoginEmail            = document.getElementById('loginEmail')
const   inputLoginPassword         = document.getElementById('loginPassword')

validate(inputLoginEmail, 'validLoginEmail', 'iconLoginEmail', 'correo', 'Texto debe llevar formato de correo.', '')
validate(inputLoginPassword, 'ruleLoginOne', 'iconLoginPassword', 'password', 'Entre 8 y 16 carácteres', '', 'ruleLoginTwo', 'ruleLoginThree', 'Al menos 1 dígito', 'Al menos 1 minúscula y 1 mayúscula')

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(inputsLoginStatus)
    if(inputsLoginStatus.loginEmailStatus && inputsLoginStatus.loginPasswordStatus) {
        formLogin.submit()
    }
})