export function audio() {
  
  function togglePlay(audioName) {
    if (audioName.paused) {
      audioName.play()
    } else {
      audioName.pause()
    }
  }

  return {
    togglePlay
  }
}