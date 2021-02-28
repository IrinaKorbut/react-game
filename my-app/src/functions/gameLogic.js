import { initialState } from "../redux/gameReducer";
import { getAvailableMove } from "./finishGame";

export let setGameSize = (size) => {
    // debugger;
    initialState.size = size;
}

export let generateCellsData = () => {
    // debugger;

    const size = initialState.size;
    const gameMatrix = []
    const gameNumberMatrix = [];    
    for (let i = 0; i < size; i++) {
        const gameNumberArr = [];
        const arr = Array(size).fill({})
        const arrCells = arr.map(function (item, index) {
            let valueCell = Math.floor(Math.random() * 9) + 1;
            gameNumberArr.push(valueCell);
            const cellObj =  {
                i: i,
                j: index,
                value: valueCell,
                data: `${i}${index}`,
                activeClass: false,
                disableClass: false,
                helpClass: false,
            };
            return cellObj;
        });
        gameMatrix.push(arrCells);
        gameNumberMatrix.push(gameNumberArr)
    }
    initialState.cellsData = gameMatrix;
    initialState.numberMatrix = gameNumberMatrix;
}

export let isThereIsFirstNumber = (state) => {
    return !!state.firstNumber;
};

export let setFirstNumber = (state, cell) => {
    state.firstNumber = cell
};

export let setSecondNumber = (state, cell) => {
    state.secondNumber = cell;
};

export let clearNumber = (state) => {
    // debugger;
    if (state.firstNumber) {
        state.firstNumber.activeClass = !state.firstNumber.activeClass;
        state.firstNumber = null;
    }
    if (state.secondNumber) {
        state.secondNumber.activeClass = !state.secondNumber.activeClass;    
        state.secondNumber = null;
    }      
};

export let isAbleCrossNumbers = (state) => {
    // debugger;
    if (state.firstNumber.value === state.secondNumber.value 
        || state.firstNumber.value + state.secondNumber.value === 10) {
            return true;
        }
}

export let crossNumber = (numberMatrix, cell) => {
    // debugger;
        cell.disableClass = true;
        numberMatrix[cell.i][cell.j] = 0;
}

export let isElementLocatedCloseEachOther = (state) => {
    let firstNumber = state.firstNumber;
    let secondNumber = state.secondNumber;
    if (firstNumber.i === secondNumber.i) {
        let i = firstNumber.i;
        let firstIndex = Math.min(firstNumber.j, secondNumber.j) + 1;
        let lastIndex = Math.max(firstNumber.j, secondNumber.j);
        // debugger;
        for (; firstIndex < lastIndex; firstIndex += 1) {
            if (state.numberMatrix[i][firstIndex] !== 0) {
                return false;
            }
        }
        return true;
    }
    if (firstNumber.j === secondNumber.j) {
        let j = firstNumber.j;
        let firstIndex = Math.min(firstNumber.i, secondNumber.i) + 1;
        let lastIndex = Math.max(firstNumber.i, secondNumber.i);
        // debugger;
        for (; firstIndex < lastIndex; firstIndex += 1) {
            if (state.numberMatrix[firstIndex][j] !== 0) {
                return false;
            }
        }
        return true;
    }    
}

export let recordMove = (state) => {
    state.doneMoves.push([state.firstNumber, state.secondNumber])
}

export let cancelMove = (state) => {
    // debugger;
    if (state.doneMoves.length) {
        let lastMoveFirstNumber = state.doneMoves[state.doneMoves.length - 1][0]
        let lastMoveSecondNumber = state.doneMoves[state.doneMoves.length - 1][1]

        state.numberMatrix[lastMoveFirstNumber.i][lastMoveFirstNumber.j] = lastMoveFirstNumber.value;
        state.numberMatrix[lastMoveSecondNumber.i][lastMoveSecondNumber.j] = lastMoveSecondNumber.value;

        state.cellsData[lastMoveFirstNumber.i][lastMoveFirstNumber.j].disableClass = false;
        state.cellsData[lastMoveSecondNumber.i][lastMoveSecondNumber.j].disableClass = false;

        state.doneMoves.pop();
    }
    
}


export let showMove = (state) => {
    // debugger;
    let coordinatesAvailableMove = getAvailableMove(state); 
    if (coordinatesAvailableMove) {
        state.cellsData[coordinatesAvailableMove[0]][coordinatesAvailableMove[1]].helpClass = true;
        state.cellsData[coordinatesAvailableMove[2]][coordinatesAvailableMove[3]].helpClass = true;   
    }     
}

export let clearAllCellFromHelpClass = (state) => {
    // debugger;
    for (let i = 0; i < state.cellsData.length; i++) {
        state.cellsData[i].forEach((cellData) => {
            cellData.helpClass = false;
        })
    }    
}
