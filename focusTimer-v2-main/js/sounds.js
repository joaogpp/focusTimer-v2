
export default function () {
  const buttonPressForest = new Audio('../sounds/floresta.wav')
  const buttonPressRain = new Audio('../sounds/chuva.wav')
  const buttonPressCoffee = new Audio('../sounds/cafeteria.wav')
  const buttonPressFire = new Audio('../sounds/lareira.wav')
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  function playForest() {
    buttonPressForest.play()
  }

  function disableForest(){
    buttonPressForest.pause()
  }

  function playRain() {
    buttonPressRain.play()
  }

  function disableRain() {
    buttonPressRain.pause()
  }

  function playCoffee() {
    buttonPressCoffee.play()
  }

  function disableCoffee() {
    buttonPressCoffee.pause()
  }

  function playFire() {
    buttonPressFire.play()
  }

  function disableFire() {
    buttonPressFire.pause()
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    playForest,
    disableForest,
    playRain,
    disableRain,
    playCoffee,
    disableCoffee,
    playFire,
    disableFire,
    pressButton,
    timeEnd
  }
}