const home = document.querySelector('.content')
const cookie = document.querySelector('.open')
const btnLuck = document.querySelector('#close')
const btnReset = document.querySelector('#luckyAgain')

btnLuck.addEventListener('click', trade)
btnReset.addEventListener('click', trade)

document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter' && home.classList.contains('hide')) {
    trade()
  }
})


function trade() {
  home.classList.toggle('hide')
  cookie.classList.toggle('hide')
}