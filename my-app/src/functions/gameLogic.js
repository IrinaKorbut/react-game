import { initialState } from "../redux/gameReducer";

export let setGameSize = (size) => {
    initialState.size = size;
}

export let generateCellsData = () => {
    const size = initialState.size;
    const gameMatrix = []
    const gameNumberMatrix = [];    
    for (let i = 0; i < size; i++) {
        const gameNumberArr = [];
        const arr = Array(size).fill({})
        const arrCells = arr.map(function (item, index) {
            let valueCell = Math.floor(Math.random() * 9) + 1;

            // let indexRandom = Math.floor(Math.random() *4) + 1;
            // valueCell = indexRandom === index ? -1 : valueCell;
            // let isDisableClass = (valueCell === -1);

            gameNumberArr.push(valueCell);
            const cellObj =  {
                i: i,
                j: index,
                value: valueCell,
                data: `${i}${index}`,
                activeClass: false,
                disableClass: false,
            };
            return cellObj;
        });
        gameMatrix.push(arrCells);
        gameNumberMatrix.push(gameNumberArr)
    }
    initialState.cellsData = gameMatrix;
    initialState.numberMatrix = gameNumberMatrix;
    console.log(initialState.numberMatrix)
    console.log(initialState.cellsData)
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

