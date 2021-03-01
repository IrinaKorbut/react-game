import { initialScoreState } from './scoreReducer'
import {
    isThereIsFirstNumber, setFirstNumber, setSecondNumber,
    clearNumber, setGameSize, generateCellsData, isAbleCrossNumbers,
    crossNumber, isElementLocatedCloseEachOther, recordMove, cancelMove,
    showMove, clearAllCellFromHelpClass
} from "../functions/gameLogic";
import { getAvailableMove, countScore } from "../functions/finishGame";
import { changeCellsDesign, putUserScoreToScoreState, deleteVariableFromLocalStorage } from "../functions/helpFunctions";

const CLICK_HANDLER_CELL = 'CLICK_HANDLER_CELL';
const CLICK_CANCEL_MOVE = 'CLICK_CANCEL_MOVE';
const CLICK_SHOW_MOVE = 'CLICK_SHOW_MOVE';
const CLICK_HANDLE_FIELD = 'CLICK_HANDLE_FIELD';
const CLICK_HANDLE_CELLS_DESIGN = 'CLICK_HANDLE_CELLS_DESIGN';
const CLICK_HANDLE_NUMBERS_RANGE = 'CLICK_HANDLE_NUMBERS_RANGE';
const CLICK_NEW_GAME = 'CLICK_NEW_GAME';

let initialStateDefault = {
    size: 6, // по  дефолту
    sizeTitle: 'Field size',
    cellsDesign: 'Cells design',
    numbersRange: 9,
    numbersRangeTitle: 'Numbers',
    cellsData: [],
    numberMatrix: [],
    firstNumber: null,
    secondNumber: null,
    doneMoves: [],
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
                // debugger;
                if (!getAvailableMove(state)) {
                    // debugger;
                    let score = countScore(state)
                    setTimeout(() => {
                        let userName;
                        if (score) {
                            userName = prompt(`Your score is: ${score}. Enter your name to save your score:`, 'Player');
                        } else {
                            userName = prompt(`You win! Your score is: ${score}. Enter your name to save your score:`, 'Winner');
                        }
                        putUserScoreToScoreState(initialScoreState, userName, score);
                    })
                    // debugger;
                    //show modal window         

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
        case CLICK_NEW_GAME:
            deleteVariableFromLocalStorage('initialStateLocalStorage');
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

export const clickNewGameActionCreator = () => {
    return {
        type: CLICK_NEW_GAME,
    }
}

