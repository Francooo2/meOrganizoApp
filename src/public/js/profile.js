(function () {
    let updateDate = function () {
        let date = new Date()
        let days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
        let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        let numberDay = date.getDate().toString()
        let numberMonth = date.getMonth().toString()
        let wordDay = days[date.getDay()]
        let wordMonth = months[date.getMonth()]
        let year = date.getFullYear()
        const paragraphOne = document.getElementById('dateone')
        const paragraphTwo = document.getElementById('datetwo')

        if (numberDay.length === 1) {
            numberDay = `0${numberDay}`
        }

        paragraphOne.textContent = `${wordDay} ${numberDay} de ${wordMonth} de ${year}`
        paragraphTwo.textContent = formatAMPM(date).toString()
    }

    updateDate()
    let interval = setInterval(updateDate, 1000)
}())
function formatAMPM(date) {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12;
    hours = hours ? hours : 12
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    let strTime = hours + ' : ' + minutes + ' : ' + seconds + '   ' + ampm
    return strTime
}