const minuts = document.querySelector('.minuts');
const seconds = document.querySelector('.seconds');

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')

let coffeAudio = new Audio('./audio/coffee_shop.wav')
let fire = new Audio('./audio/fireplace.wav')
let forest = new Audio('./audio/forest.wav')
let rain = new Audio('./audio/rain.wav')

let timeOut;

const tree = document.querySelector('#tree')
const cloud = document.querySelector('#cloud')
const coffeShop = document.querySelector('#coffee')
const firaplace = document.querySelector('#fire')

export {
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
}