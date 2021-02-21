// import { renderGameField } from './../Components/Game/helpGameFunctions';
import cellStyle from './../Components/Game/Game.module.scss'

export let state = {
    game: {
        size: 10, // по  дефолту
        cellsData: [],
        firstNumber: null,
        secondNumber: null,
    }

}

function setGameSize(size) {
    state.game.size = size;
}

function generateCellsData() {
    const size = state.game.size;
    const gameMatrix = []
    for (let i = 0; i < size; i++) {
        const arr = Array(size).fill({})
        const arrNumbers = arr.map(function (item, index) {
            return {
                i: i,
                j: index,
                value: Math.floor(Math.random() * 9) + 1,
                data: `${i}${index}`,
                activeClass: false,
            }
        });
        gameMatrix.push(arrNumbers);
    }
    state.game.cellsData = gameMatrix;
}

function isThereIsFirstNumber() {
    return !!state.game.firstNumber;
}

function setFirstNumber(cell) {
        state.game.firstNumber = cell
}

function setSecondNumber(cell) {
    state.game.secondNumber = cell;
}

function toggleActiveCellClass(cell) {
    cell.classList.toggle(`${cellStyle.active}`)
}

function removeActiveClasses() {

}

function clearNumber() {
    state.game.firstNumber = null;
    state.game.secondNumber = null;
    removeActiveClasses();
}

export function clickHandler(event) {
    console.log('event', event.target)
    const id = event.target.getAttribute('data');
    const i = id[0];
    const j = id[1];
    if (isThereIsFirstNumber()) {
        setSecondNumber(state.game.cellsData[i][j]);
        state.game.cellsData[i][j].activeClass = !state.game.cellsData[i][j].activeClass;

        console.log('*****second tab*****');
        console.log('firstNumber', state.game.firstNumber);
        console.log('secondNumber', state.game.secondNumber);

        clearNumber();

        console.log('*****after clearing*****')
        console.log('firstNumber', state.game.firstNumber);
        console.log('secondNumber', state.game.secondNumber);

    } else {
        setFirstNumber(state.game.cellsData[i][j]);        
        state.game.cellsData[i][j].activeClass = !state.game.cellsData[i][j].activeClass;
        
        console.log('*****first tab*****');
        console.log('firstNumber', state.game.firstNumber);
        console.log('secondNumber', state.game.secondNumber);
    }
    // state.game.cellsData[i][j].activeClass = !state.game.cellsData[i][j].activeClass;
    // toggleActiveCellClass(event.target)
    // console.log('cellsData[i][j]', state.game.cellsData[i][j]);
    
}


setGameSize(10);
generateCellsData();