const trigger = document.querySelector('.alert-trigger')
const alertEl = document.querySelector('.alert')
const alertOk = document.querySelector('.alert-ok')

function onTriggerClick () {
    alertEl.classList.add('show')
}

function onAlertOkClick () {
    alertEl.classList.remove('show')
}

const alert2 = document.querySelector('.new-alert')
const alertEl2 = document.querySelector('.alert2')
const alertOk2 = document.querySelector('.alert-ok2')

console.log(alert2, alertEl2, alertOk2)


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
