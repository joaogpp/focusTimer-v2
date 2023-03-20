export default function ({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  timeEnd,
}) {

  let timerTimeout
  let initialMinutes = minutesDisplay.textContent

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  
  function countdown() {
    timerTimeout = setTimeout(() => {
  
      let minutes = minutesDisplay.textContent
      let seconds = secondsDisplay.textContent
  
      let isFinished = minutes <= 0 && seconds <= 0
  
  
      if(isFinished) {
        timeEnd()
        resetControls()
        updateDisplay(initialMinutes, '0')
        return
      }
  
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
  
      updateDisplay(minutes, seconds - 1)
  
      countdown()
  
    }, 1000)
  }
  
  function pause() {
    clearTimeout(timerTimeout)  
  }
  
  function addTime() {
    let newMinutes = Number(minutesDisplay.textContent)
    updateDisplay(newMinutes + 1, secondsDisplay.textContent)
  }
  
  function removeTime() {
    let newMinutes = Number(minutesDisplay.textContent)
  
    if(newMinutes > 0) {
      updateDisplay(newMinutes - 1, '0')
    }
  }
  
  function reset() {
    resetControls()
    pause()
    updateDisplay(initialMinutes, '0')
  }

  return {
    updateDisplay,
    countdown,
    pause,
    addTime,
    removeTime,
    reset,
  }
}
