import { initialState } from "../redux/gameReducer";

export let setGameSize = (size) => {
    initialState.size = size;
}

export let generateCellsData = () => {
    const size = initialState.size;
    const gameMatrix = []
    for (let i = 0; i < size; i++) {
        const arr = Array(size).fill({})
        const arrCells = arr.map(function (item, index) {
            return {
                i: i,
                j: index,
                value: Math.floor(Math.random() * 9) + 1,
                data: `${i}${index}`,
                activeClass: false,
            }
        });
        gameMatrix.push(arrCells);
    }
    initialState.cellsData = gameMatrix;
}

export function isThereIsFirstNumber(state) {
    return !!state.firstNumber;
};

export function setFirstNumber(state, cell) {
    state.firstNumber = cell
};

export function setSecondNumber(state, cell) {
    state.secondNumber = cell;
};

export function clearNumber(state) {
    if (state.firstNumber) {
        state.firstNumber.activeClass = !state.firstNumber.activeClass;
        state.firstNumber = null;
    }
    if (state.secondNumber) {
        state.secondNumber.activeClass = !state.secondNumber.activeClass;    
        state.secondNumber = null;
    }       
};

