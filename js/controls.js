export default function ({
  btnPause,
  btnPlay,
  btnAddTime,
  btnRemoveTime
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

  return {
    reset,
    pause,
    disableControls
  }

}