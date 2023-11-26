const trigger = document.querySelector('#compliment')
const alertEl = document.querySelector('#alert-compliment')
const alertOk = document.querySelector('#button-ok-compliment')

function onTriggerClick () {
    alertEl.classList.add('show')
}

function onAlertOkClick () {
    alertEl.classList.remove('show')
}

const alert2 = document.querySelector('#decipher')
const alertEl2 = document.querySelector('#alert-decipher')
const alertOk2 = document.querySelector('#button-ok-decipher')


function onTriggerClick2 () {
    alertEl2.classList.add('show')
}

function onAlertOkClick2 () {
    alertEl2.classList.remove('show')
}

alertOk.addEventListener('click', onAlertOkClick)
trigger.addEventListener('click', onTriggerClick)


alertOk2.addEventListener('click', onAlertOkClick2)
alert2.addEventListener('click', onTriggerClick2 )
