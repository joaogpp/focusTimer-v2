import {
  btnPlay,
  btnPause,
  btnStop,
  btnAddTime,
  btnRemoveTime,
  btnForest,
  btnRain,
  btnCoffee,
  btnFire,
} from './elements.js'

export default function ({
  controls,
  timer,
  sounds,
}) {

  btnPlay.addEventListener('click', () => {
    sounds.pressButton()
    controls.disableControls()
    timer.countdown()
  })
  
  btnPause.addEventListener('click', () => {
    sounds.pressButton()
    controls.pause()
    timer.pause()
  })
  
  btnAddTime.addEventListener('click', () => {
    sounds.pressButton()
    timer.addTime()
  })
  
  btnRemoveTime.addEventListener('click', () => {
    sounds.pressButton()
    timer.removeTime()
  })
  
  btnStop.addEventListener('click', () => {
    sounds.pressButton()
    timer.reset()
  })
  
  btnForest.addEventListener('click', () => {
    sounds.playForest()
    sounds.disableCoffee()
    sounds.disableFire()
    sounds.disableRain()
  })
  
  btnRain.addEventListener('click', () => {
    sounds.playRain()
    sounds.disableCoffee()
    sounds.disableFire()
    sounds.disableForest()
  })
  
  btnCoffee.addEventListener('click', () => {
    sounds.playCoffee()
    sounds.disableFire()
    sounds.disableForest()
    sounds.disableRain()
  })
  
  btnFire.addEventListener('click', () => {
    sounds.playFire()
    sounds.disableCoffee()
    sounds.disableForest()
    sounds.disableRain()
  })
}