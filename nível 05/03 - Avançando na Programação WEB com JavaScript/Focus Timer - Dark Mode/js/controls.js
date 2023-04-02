export function controls({
  minuts, seconds, updateDisplay
}) {
  let timeOut;
  const countdown = () => {
    clearTimeout(timeOut)
    timeOut = setTimeout(() => {
      let numberMin = Number(minuts.textContent)
      let numberSeg = Number(seconds.textContent)
      let isFinished = numberMin == 0 & numberSeg == 0

      if (numberSeg <= 0) {
        numberSeg = 60
        --numberMin
      }

      if (isFinished) {
        return
      }
      updateDisplay(numberMin, numberSeg - 1)

      countdown()
    }, 1000)
  }

  const stop = () => {
    clearTimeout(timeOut);
    updateDisplay('25', '00')
  }

  const plus = () => {
    let numberMin = Number(minuts.textContent)
    let numberSeg = Number(seconds.textContent)
    updateDisplay(numberMin + 5, numberSeg)
  }

  const minus = () => {
    let numberMin = Number(minuts.textContent) - 5
    if (numberMin <= 0) {
      numberMin = 0
    }
    updateDisplay(numberMin)
  }

  return {
    countdown,
    stop,
    plus,
    minus
  }
}