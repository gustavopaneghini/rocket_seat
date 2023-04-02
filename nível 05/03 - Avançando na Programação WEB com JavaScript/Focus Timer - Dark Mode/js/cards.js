
export function cards({ page }) {

  function activeCard( audioName, input) {
    audioName.play()
    volumeCTRL(audioName, input)
  }

  function resetCard(btn, audioName, input) {
    audioName.pause()
    volumeCTRL(audioName, input)
    btn.classList.remove('white')
  }

  function volumeCTRL(audioName, inputName) {
    inputName.addEventListener('input', () => {
      audioName.volume = inputName.value
    })
  }

  return {
    activeCard,
    resetCard,
  }
}
