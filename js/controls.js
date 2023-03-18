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
  btnSounds
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

  function handleMode() {

    body.classList.toggle('dark')
    
    for(let i = 0; i < span.length; i++){
      span[i].classList.toggle('dark')
    }
    
    sectionControls.classList.toggle('dark')

    for(let i = 0; i < btnSounds.length; i++){
      btnSounds[i].classList.toggle('dark')
    }
  }

  return {
    reset,
    pause,
    disableControls,
    removeActiveClass,
    handleMode
  }

}