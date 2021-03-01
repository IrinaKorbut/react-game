import { initialScoreState } from './scoreReducer'
import {
    isThereIsFirstNumber, setFirstNumber, setSecondNumber,
    clearNumber, setGameSize, generateCellsData, isAbleCrossNumbers,
    crossNumber, isElementLocatedCloseEachOther, recordMove, cancelMove,
    showMove, clearAllCellFromHelpClass
} from "../functions/gameLogic";
import { getAvailableMove, countScore } from "../functions/finishGame";
import { changeCellsDesign, putUserScoreToScoreState } from "../functions/helpFunctions";

const CLICK_HANDLER_CELL = 'CLICK_HANDLER_CELL';
const CLICK_CANCEL_MOVE = 'CLICK_CANCEL_MOVE';
const CLICK_SHOW_MOVE = 'CLICK_SHOW_MOVE';
const CLICK_HANDLE_FIELD = 'CLICK_HANDLE_FIELD';
const CLICK_HANDLE_CELLS_DESIGN = 'CLICK_HANDLE_CELLS_DESIGN';
const CLICK_HANDLE_NUMBERS_RANGE = 'CLICK_HANDLE_NUMBERS_RANGE';

let gameSize = localStorage.getItem('gameSize') ? localStorage.getItem('gameSize') : 6;
let gameSizeTitle = localStorage.getItem('gameSizeTitle') ? localStorage.getItem('gameSizeTitle') : 'Field size';
let gameCellsDesign = localStorage.getItem('gameCellsDesign') ? localStorage.getItem('gameCellsDesign') : 'Cells design';
let gameNumbersRange = localStorage.getItem('gameNumbersRange') ? localStorage.getItem('gameNumbersRange') : 9;
let gameNumbersRangeTitle = localStorage.getItem('gameNumbersRangeTitle') ? localStorage.getItem('gameNumbersRangeTitle') : 'Numbers';
let gameCellsData = JSON.parse(localStorage.getItem('gameCellsData')) ? JSON.parse(localStorage.getItem('gameCellsData')) : [];
let gameNumberMatrix = localStorage.getItem('gameNumberMatrix') ? localStorage.getItem('gameNumberMatrix') : [];
let gameFirstNumber = localStorage.getItem('gameFirstNumber') ? localStorage.getItem('gameFirstNumber') : null;
let gameSecondNumber = localStorage.getItem('gameSecondNumber') ? localStorage.getItem('gameSecondNumber') : null;
let gameDoneMoves = JSON.parse(localStorage.getItem('gameDoneMoves')) ? JSON.parse(localStorage.getItem('gameDoneMoves')) : [];

let initialStateDefault = {
    size: gameSize, // по  дефолту
    sizeTitle: gameSizeTitle,
    cellsDesign: gameCellsDesign,
    numbersRange: gameNumbersRange,
    numbersRangeTitle: gameNumbersRangeTitle,
    cellsData: gameCellsData,
    numberMatrix: gameNumberMatrix,
    firstNumber: gameFirstNumber,
    secondNumber: gameSecondNumber,
    doneMoves: gameDoneMoves,
}
export let initialState = JSON.parse(localStorage.getItem('initialStateLocalStorage')) 
    ? JSON.parse(localStorage.getItem('initialStateLocalStorage')) 
    : initialStateDefault;

if (!JSON.parse(localStorage.getItem('initialStateLocalStorage'))) {
    setGameSize(6);
    generateCellsData();
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_HANDLER_CELL:
            if (Number(action.event.target.innerText) === 0) {
                return state;
            }
            const id = action.event.target.getAttribute('data');
            const i = Number(id[0]);
            const j = Number(id[1]);
            // check is there first number and  current number shouldn't be firs number
            if (isThereIsFirstNumber(state) && (i !== state.firstNumber.i || j !== state.firstNumber.j)) {
                setSecondNumber(state, state.cellsData[i][j]);
                state.cellsData[i][j].activeClass = !state.cellsData[i][j].activeClass;
                // debugger;
                if (isAbleCrossNumbers(state) && isElementLocatedCloseEachOther(state)) {
                    // debugger;
                    crossNumber(state.numberMatrix, state.firstNumber);
                    crossNumber(state.numberMatrix, state.secondNumber);
                    recordMove(state);
                }
                clearNumber(state);
                if (!getAvailableMove(state)) {
                    console.log('scoreLS', JSON.parse(localStorage.getItem('scoreData')))
                    let score = countScore(state)
                    // debugger;
                    //show modal window                  
                    const userName = prompt(`Game over. Your score is: ${score}. Enter your name to save your score:`, 'Bob');
                    putUserScoreToScoreState(initialScoreState, userName, score);     
                    console.log('state', state)
                    console.log('ScoreState', initialScoreState)     
                    console.log('scoreLS', JSON.parse(localStorage.getItem('scoreData')))

                }                
                //check is finish game
            } else {
                if (!isThereIsFirstNumber(state)) {
                    setFirstNumber(state, state.cellsData[i][j]);
                    state.cellsData[i][j].activeClass = !state.cellsData[i][j].activeClass;
                } else {
                    clearNumber(state);
                }
            }
            clearAllCellFromHelpClass(state);          
            localStorage.setItem('initialStateLocalStorage', JSON.stringify(state))
            return state;
        case CLICK_CANCEL_MOVE:
            cancelMove(state);
            localStorage.setItem('initialStateLocalStorage', JSON.stringify(state))
            return state;
        case CLICK_SHOW_MOVE:
            showMove(state);
            localStorage.setItem('initialStateLocalStorage', JSON.stringify(state))
            return state;
        case CLICK_HANDLE_FIELD:
            setGameSize(Number(action.event.target.innerText.split('x')[0]));
            generateCellsData();
            state.sizeTitle = action.event.target.innerText;
            localStorage.setItem('initialStateLocalStorage', JSON.stringify(state))
            return state;
        case CLICK_HANDLE_CELLS_DESIGN:
            state.cellsDesign = action.event.target.innerText;
            changeCellsDesign(state);
            localStorage.setItem('initialStateLocalStorage', JSON.stringify(state))
            return state;
        case CLICK_HANDLE_NUMBERS_RANGE:
            state.numbersRange = Number(action.event.target.innerText[2]);
            state.numbersRangeTitle = action.event.target.innerText;
            generateCellsData();
            localStorage.setItem('initialStateLocalStorage', JSON.stringify(state))
            return state;
        default:
            localStorage.setItem('initialStateLocalStorage', JSON.stringify(state))
            return state;
    }
}

export const clickHandlerCellActionCreator = (currentEvent) => {
    return {
        type: CLICK_HANDLER_CELL,
        event: currentEvent
    }
}

export const clickCancelMoveActionCreator = () => {
    return {
        type: CLICK_CANCEL_MOVE,
    }
}

export const clickShowMoveActionCreator = () => {
    return {
        type: CLICK_SHOW_MOVE,
    }
}

export const clickHandleFieldSize = (currentEvent) => {
    return {
        type: CLICK_HANDLE_FIELD,
        event: currentEvent
    }
}

export const clickHandleCellsDesign = (currentEvent) => {
    return {
        type: CLICK_HANDLE_CELLS_DESIGN,
        event: currentEvent
    }
}

export const clickHandleNumbersRange = (currentEvent) => {
    return {
        type: CLICK_HANDLE_NUMBERS_RANGE,
        event: currentEvent
    }
}