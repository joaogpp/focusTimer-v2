export default function ({
  btnPause,
  btnPlay,
  btnAddTime,
  btnRemoveTime,
  btnCoffee,
  btnFire,
  btnForest,
  btnRain,
  body,
  sectionControls,
  span,
  btnSounds,
  inputRange,
}) {

  function reset() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
    btnAddTime.classList.remove('hide')
    btnRemoveTime.classList.remove('hide')
  }

  function pause() {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }

  function disableControls() {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    btnRemoveTime.classList.add('hide')
    btnAddTime.classList.add('hide')
  }

  function removeActiveClass() {
    btnCoffee.classList.remove('active')
    btnFire.classList.remove('active')
    btnRain.classList.remove('active')
    btnForest.classList.remove('active')
  }

  function removeActiveDark() {
    btnCoffee.classList.remove('active-dark')
    btnFire.classList.remove('active-dark')
    btnRain.classList.remove('active-dark')
    btnForest.classList.remove('active-dark')
  }


  function hiddenInput() {
    for(let i = 0; i < inputRange.length; i++){
      inputRange[i].classList.add('hidden')
    }
  }

  function handleMode() {

    body.classList.toggle('dark')
    
    for(let i = 0; i < span.length; i++){
      span[i].classList.toggle('dark')
    }
    
    sectionControls.classList.toggle('dark')

    for(let i = 0; i < btnSounds.length; i++){
      btnSounds[i].classList.toggle('dark')
    }

    for(let i = 0; i < btnSounds.length; i++) {
      if(btnSounds[i].classList.contains('active')) {
        let item = i
        removeActiveClass()
        btnSounds[item].classList.add('active-dark')
      } else if(btnSounds[i].classList.contains('active-dark')) {
        let itemdark = i
        removeActiveDark()
        btnSounds[itemdark].classList.add('active')
      }
    }
  }

  return {
    reset,
    pause,
    disableControls,
    removeActiveClass,
    handleMode,
    hiddenInput,
    removeActiveDark
  }

}