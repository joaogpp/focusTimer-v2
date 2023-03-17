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
  btnRemoveTime
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  timeEnd: sounds.timeEnd
})

Events({controls, timer, sounds})

