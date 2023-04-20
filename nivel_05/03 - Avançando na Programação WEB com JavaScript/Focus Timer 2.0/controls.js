export function controls({ timeOut, minuts, seconds, updateDisplay }) {
  
  function countdown() {
    

    timeOut = setTimeout(() => {

      let minutos = Number(minuts.textContent)
      let segundos = Number(seconds.textContent)
      let isFinished = minutos == 0 && segundos == 0

      if (segundos <= 0) {
        segundos = 60
        --minutos
      }
      if (isFinished) {
        return
      }

      updateDisplay(minutos, segundos - 1)

      countdown()
    }, 1000)

  }

  function interval() {
    clearTimeout(timeOut)
  }

  function increment() {
    let incremento = Number(minuts.textContent) + 5;
    updateDisplay(incremento)
  }

  function decrement() {
    let decremento = Number(minuts.textContent) - 5
    if (decremento <= 0) {
      decremento = 0
    }
    updateDisplay(decremento)
  }

  return {
    countdown,
    interval,
    increment,
    decrement,

  }
}