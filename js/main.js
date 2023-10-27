/*----- constants -----*/
/* Initial data states 
animation names
image assets paths
*/

const INIT_STATE = {
	boredom: 0,
	hunger: 0,
	sleepiness: 0,
}
/*----- state variables -----*/
//state is the data that will change while the game is running

let state

// let boredom
// let hunger
// let sleepiness

// Icebox features (age cycle for tama)
let age
let cycles

let timer // setInterval id
let interval // count of cycles

/*----- cached elements  -----*/
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepyStatEl = document.querySelector('#sleepiness-stat')

// TODO: add cache for game message string once added to game

const gameBtnEls = document.querySelectorAll('#controller button')

// TODO: add cache for restart button after game over

/*----- event listeners -----*/

/*----- functions -----*/
init() //start the game when js loads

function init() {
	state = { ...INIT_STATE }

	age = 0
	cycles = 0

	interval = 5000
	timer = setInterval(runGame, interval)

	console.log('game has started')

	// it will also call render () -> dom updates (trigger all render helper function -> updating stats)
	render()
}

function runGame() {
	updateStats()
	render()
}

function render() {
	// any features which might update the dom (the ui) -> will be called by render
	renderStats()
}

function renderStats() {
	boredomStatEl.textContent = state.boredom
	hungerStatEl.textContent = state.hunger
	sleepyStatEl.textContent = state.sleepiness
}

function updateStats() {
	for (key in state) {
		// let randomAmount = Math.floor(Math.random() * 3)
		// let currentValue = state[key]
		// state[key] = currentValue + randomAmount
        // console.log(key, state[key], randomAmount)
        
        updateStat(key, Math.floor(Math.random()*3))
	}
}

function updateStat(stat, value) {

    if (state[stat] + value >= 0) {
        stat[state] += value
    } else { 
        state[stat] = 0
    }

}