import { cards } from "./js/cards.js"
import { controls } from "./js/controls.js"
import {
  btnTree,
  btnCloud,
  btnShop,
  btnFire,
  adForest,
  adRain,
  adShop,
  adFire,
  iptForest,
  iptRain,
  iptShop,
  iptFire,
  play,
  stop,
  plus,
  minus,
  minuts,
  seconds,
  page,
  mode,
  light,
  dark,
  btnCard

} from './js/elements.js'

const page = document.querySelector('.page')
const mode = document.querySelector('.light-dark-mode')
const light = document.querySelector('.light-mode')
const dark = document.querySelector('.dark-mode')
const btnCard = document.querySelector('.cards')


mode.addEventListener('click', () => {
  page.classList.toggle('dark')
  light.classList.toggle('hide')
  dark.classList.toggle('hide')
  btnCard.classList.toggle('dark')


})


const updateDisplay = (min, seg) => {
  min = min === undefined ? minuts.textContent : min
  seg = seg === undefined ? seconds.textContent : seg
  minuts.textContent = String(min).padStart(2, '0')
  seconds.textContent = String(seg).padStart(2, '0')
}

const eventCards = cards({ page })
const eventTimer = controls({ minuts, seconds, updateDisplay })

/* EVENT TIMER */

play.addEventListener('click', () => {
  eventTimer.countdown()
})
stop.addEventListener('click', () => {
  eventTimer.stop()
})
plus.addEventListener('click', () => {
  eventTimer.plus()
})
minus.addEventListener('click', () => {
  eventTimer.minus()
})


/* CARDS EVENTS */

/* one click para disparar evento*/
btnTree.addEventListener('click', () => {
  eventCards.activeCard(btnTree, adForest, iptForest, '#18c718')
  btnTree.classList.add('green')
})

btnCloud.addEventListener('click', () => {
  eventCards.activeCard(btnCloud, adRain, iptRain, '#1838c7')
  btnCloud.classList.add('blue')
})

btnShop.addEventListener('click', () => {
  eventCards.activeCard(btnShop, adShop, iptShop, '#c78118')
  btnShop.classList.add('orange')
})

btnFire.addEventListener('click', () => {
  eventCards.activeCard(btnFire, adFire, iptFire, '#c71818')
  btnFire.classList.add('red')
})

/* double click desfazer evento */
btnTree.addEventListener('dblclick', () => {
  eventCards.resetCard(btnTree, adForest, iptForest)
  btnTree.classList.remove('green')
})

btnCloud.addEventListener('dblclick', () => {
  eventCards.resetCard(btnCloud, adRain, iptRain)
  btnCloud.classList.remove('blue')
})

btnShop.addEventListener('dblclick', () => {
  eventCards.resetCard(btnShop, adShop, iptShop)
  btnShop.classList.remove('orange')
})

btnFire.addEventListener('dblclick', () => {
  eventCards.resetCard(btnFire, adFire, iptFire)
  btnFire.classList.remove('red')
})