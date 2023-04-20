import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

//DESAFIO:: Remover a barra com erro quando começar a a digitar no INPUT
const inputText = document.querySelector('input')

inputText.addEventListener('keydown', closeAlert)

function closeAlert(event) {
    if (event.key) {
        AlertError.close()
    }
}
/* RESOLUÇÃO :: RocketSeat */
inputHeight.oninput = () => { AlertError.close() }
inputWeight.oninput = () => { AlertError.close() }
