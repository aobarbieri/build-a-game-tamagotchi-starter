console.log('js:loaded')

/*----- constants -----*/
/* Initial data states 
animation names
image assets paths
*/

const state = {
    
}
/*----- state variables -----*/
//state is the data that will change while the game is running



let boredom
let hunger
let sleepiness

// Icebox features (age cycle for tama)
let age
let cycles

let timer // setInterval id
let interval // count of cycles

/*----- cached elements  -----*/
const boredomStaEl = document.querySelector('#boredom-stat')
const hungerStatEl= document.querySelector('#hunger-stat')
const sleepyStatEl = document.querySelector('#sleepiness-stat')

// TODO: add cache for game message string once added to game

const gameBtnEls = document.querySelectorAll('#controller button')

// TODO: add cache for restart button after game over

/*----- event listeners -----*/


/*----- functions -----*/
init() //start the game when js loads

function init() {
    
    age = 0;
    cycles = 0;
    
    interval = 5000;
    timer = setInterval(runGame, interval);

    console.log('game has started')

    // it will also call render () -> dom updates (trigger all render helper function -> updating stats)
    render()
}

function runGame() {
    console.log('game is running')
}

function render() {
    console.log('rendering game')
}