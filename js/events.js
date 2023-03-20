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
  btnLight,
  btnNight,
  inputRange,
  body,
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
      controls.hiddenInput()
      inputRange[0].classList.remove('hidden')

      if(body.classList.contains('dark')) {
        controls.removeActiveDark()
        controls.removeActiveClass()
        btnForest.classList.add('active-dark')
      }

      if(body.classList.contains('dark') == false) {
        controls.removeActiveDark()
        controls.removeActiveClass()
        btnForest.classList.add('active')
      }

      sounds.playForest()
      sounds.disableCoffee()
      sounds.disableFire()
      sounds.disableRain()
    })
    
    btnRain.addEventListener('click', () => {

      controls.hiddenInput()
      inputRange[1].classList.remove('hidden')

      if(body.classList.contains('dark')) {
        controls.removeActiveDark()
        controls.removeActiveClass()
        btnRain.classList.add('active-dark')
      }

      if(body.classList.contains('dark') == false) {
        controls.removeActiveDark()
        controls.removeActiveClass()
        btnRain.classList.add('active')
      }

      sounds.playRain()
      sounds.disableCoffee()
      sounds.disableFire()
      sounds.disableForest()
    })
    
    btnCoffee.addEventListener('click', () => {

      controls.hiddenInput()
      inputRange[2].classList.remove('hidden')

      if(body.classList.contains('dark')) {
          controls.removeActiveDark()
          controls.removeActiveClass()
          btnCoffee.classList.add('active-dark')
      }

      if(body.classList.contains('dark') == false) {
        controls.removeActiveDark()
        controls.removeActiveClass()
        btnCoffee.classList.add('active')
      }

      sounds.playCoffee()
      sounds.disableFire()
      sounds.disableForest()
      sounds.disableRain()
    })
    
    btnFire.addEventListener('click', () => {

      controls.hiddenInput()
      inputRange[3].classList.remove('hidden')

      if(body.classList.contains('dark')) {
        controls.removeActiveDark()
        controls.removeActiveClass()
        btnFire.classList.add('active-dark')
      }

      if(body.classList.contains('dark') == false) {
        controls.removeActiveDark()
        controls.removeActiveClass()
        btnFire.classList.add('active')
      }
    
      sounds.playFire()
      sounds.disableCoffee()
      sounds.disableForest()
      sounds.disableRain()
    })

    btnLight.addEventListener('click', () => {
      btnLight.classList.add('hide')
      btnNight.classList.remove('hide')

      controls.handleMode()
    })

    btnNight.addEventListener('click', () => {
      btnNight.classList.add('hide')
      btnLight.classList.remove('hide')
      
      controls.handleMode()
    })

    for(let i = 0; i < inputRange.length; i++) {
      inputRange[i].addEventListener('change', () => {
        sounds.audios[i].volume = inputRange[i].value / 100
      })
    }
}