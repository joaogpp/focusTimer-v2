import {    
  btnPlay,
  btnPause,
  btnAddTime,
  btnRemoveTime,
  btnForest,
  btnRain,
  btnCoffee,
  btnFire,
  minutesDisplay,
  secondsDisplay,
  body,
  span,
  sectionControls,
  btnSounds,
  inputRange
} from './elements.js'

import Controls from './controls.js'

import Timer from './timer.js'

import Sounds from './sounds.js'

import Events from './events.js'

const sounds = Sounds({
  btnForest,
  btnRain,
  btnCoffee,
  btnFire
})

const controls = Controls({
  btnPlay,
  btnPause,
  btnAddTime,
  btnRemoveTime,
  btnCoffee,
  btnForest,
  btnRain,
  btnFire,
  body,
  span,
  sectionControls,
  btnSounds,
  inputRange
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  timeEnd: sounds.timeEnd
})

Events({controls, timer, sounds})

