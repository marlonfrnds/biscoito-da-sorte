const screenOne = document.querySelector('.screenOne')
const screenTwo = document.querySelector('.screenTwo')
const btnFortuneCookie = document.querySelector('#btnFortuneCookie')
const btnTryAgain = document.querySelector('#btnTryAgain')

btnFortuneCookie.addEventListener('click', handleTryAgain)
btnTryAgain.addEventListener('click', handleResetClick)

function handleTryAgain() {
    toggleScreen()
}

function handleResetClick() {
    toggleScreen()
}

function toggleScreen() {
    screenOne.classList.toggle('hide')
    screenTwo.classList.toggle('hide')
}