import {    
  btnPlay,
  btnPause,
  btnStop,
  btnAddTime,
  btnRemoveTime,
  btnForest,
  btnRain,
  btnMarket,
  btnFire,
  minutesDisplay,
  secondsDisplay,
} from './elements.js'

let initialMinutes = minutesDisplay.textContent

let timerTimeout

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
      resetControls()
      return
    }

    if (seconds <= 0) {
      seconds = 2
      --minutes
    }


    updateDisplay(minutes, seconds - 1)

    countdown()

  }, 1000)
}

function resetControls() {
  btnPause.classList.add('hide')
  btnPlay.classList.remove('hide')
  btnAddTime.classList.remove('hide')
  btnRemoveTime.classList.remove('hide')
  
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

function resetTimer() {
  resetControls()
  pause()
  updateDisplay(initialMinutes, '0')
}


btnPlay.addEventListener('click', () => {
  btnPlay.classList.add('hide')
  btnPause.classList.remove('hide')
  btnRemoveTime.classList.add('hide')
  btnAddTime.classList.add('hide')
  countdown()
})

btnPause.addEventListener('click', () => {
  btnPause.classList.add('hide')
  btnPlay.classList.remove('hide')
  pause()
})

btnAddTime.addEventListener('click', () => {
  addTime()
})

btnRemoveTime.addEventListener('click', () => {
  removeTime()
})

btnStop.addEventListener('click', () => {
  resetTimer()
})