import { isThereIsFirstNumber, setFirstNumber, setSecondNumber, 
    clearNumber, setGameSize, generateCellsData, generateNumberMatrix } from "../functions/gameLogic";

const CLICK_HANDLER_CELL = 'CLICK_HANDLER_CELL';

export let initialState = {
    size: 10, // по  дефолту
    cellsData: [],
    numberMatrix: [],
    firstNumber: null,
    secondNumber: null,
}

setGameSize(4);
generateCellsData();

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_HANDLER_CELL:
            if (Number(action.event.target.innerText) === -1) {
                return state;
            }
            const id = action.event.target.getAttribute('data');
            const i = Number(id[0]);
            const j = Number(id[1]);
            
            if (isThereIsFirstNumber(state) && (i !==  state.firstNumber.i || j !==  state.firstNumber.j)) {
                setSecondNumber(state, state.cellsData[i][j]);
                state.cellsData[i][j].activeClass = !state.cellsData[i][j].activeClass;
                clearNumber(state);
            } else {
                if (!isThereIsFirstNumber(state)) {
                    setFirstNumber(state, state.cellsData[i][j]);        
                    state.cellsData[i][j].activeClass = !state.cellsData[i][j].activeClass;
                } else {
                    clearNumber(state);
                }
            }  
            return state;
        default:
            return state;
    }
}

export const clickHandlerCellActionCreator = (currentEvent) => {
    return {
        type: CLICK_HANDLER_CELL,
        event: currentEvent
    }
}