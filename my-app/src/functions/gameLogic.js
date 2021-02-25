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
            // valueCell = indexRandom === index ? 0 : valueCell;
            // let isDisableClass = (valueCell === 0);

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



