const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnAddTime = document.querySelector('.addTime')
const btnRemoveTime = document.querySelector('.removeTime')

const btnForest = document.querySelector('.forest')
const btnRain = document.querySelector('.rain')
const btnMarket = document.querySelector('.market')
const btnFire = document.querySelector('.fire')

const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')

let minutes = Number(minutesDisplay.textContent)
let seconds = 0

let timerTimeout

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function countdown() {

  let minutes = minutesDisplay.textContent
  let seconds = secondsDisplay.textContent

  timerTimeout = setTimeout(() => {

    if (minutes <= 0 && seconds <= 0) {
      resetControls()
      return
    }
    
    if(seconds <= 0) {
      seconds = 3

      --minutes
    }

    updateDisplay(minutes, seconds - 1)
  
    countdown()
  }, 1000)
}

function resetControls() {
  btnPause.classList.add('hide')
  btnPlay.classList.remove('hide')
}

function pause() {
  
  btnPause.classList.add('hide')
  btnPlay.classList.remove('hide')

  clearTimeout(timerTimeout)


}

function addTime() {
  let newMinutes

  newMinutes += 5

  return newMinutes
}

btnPlay.addEventListener('click', () => {  

  btnPlay.classList.add('hide')
  btnPause.classList.remove('hide')
  countdown()
})

btnPause.addEventListener('click', pause)

btnStop.addEventListener('click', () => {
  pause()
  updateDisplay(minutes, seconds)
})

btnAddTime.addEventListener('click', () => {

  let minutes = Number(minutesDisplay.textContent)

  updateDisplay(String(minutes + 5), seconds)
})