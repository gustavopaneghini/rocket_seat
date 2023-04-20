import { controls } from "./controls.js";
import { audio } from "./audioControls.js";
import {
  minuts,
  seconds,
  play,
  pause,
  plus,
  minus,
  coffeAudio,
  fire,
  forest,
  rain,
  timeOut,
  tree,
  cloud,
  coffeShop,
  firaplace
} from './elements.js'

const filesong = audio()
const buttonTimer = controls({
  timeOut,
  minuts,
  seconds,
  updateDisplay
})

function updateDisplay(minutos, segundos) {
  minutos = minutos === undefined ? minuts.textContent : minutos
  segundos = segundos === undefined ? seconds.textContent : segundos

  minuts.textContent = String(minutos).padStart(2, '0')
  seconds.textContent = String(segundos).padStart(2, '0')
}


tree.addEventListener('click', () => {
  tree.classList.toggle('tree')
  filesong.togglePlay(forest)
})
cloud.addEventListener('click', () => {
  cloud.classList.toggle('cloud')
  filesong.togglePlay(rain)
})
coffeShop.addEventListener('click', () => {
  coffeShop.classList.toggle('coffee')
  filesong.togglePlay(coffeAudio)
})
firaplace.addEventListener('click', () => {
  firaplace.classList.toggle('fire')
  filesong.togglePlay(fire)
})


play.addEventListener('click', () => {
  buttonTimer.interval()
  buttonTimer.countdown()
})

pause.addEventListener('click', () => {
  buttonTimer.interval()
})

plus.addEventListener('click', () => {
  buttonTimer.increment()
})

minus.addEventListener('click', () => {
  buttonTimer.decrement()
})

