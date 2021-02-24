
const CLICK_HANDLER_CELL = 'CLICK_HANDLER_CELL';

function isThereIsFirstNumber(state) {
    return !!state.firstNumber;
};

function setFirstNumber(state, cell) {
    state.firstNumber = cell
};

function setSecondNumber(state, cell) {
    state.secondNumber = cell;
};

function clearNumber(state) {
    if (state.firstNumber) {
        state.firstNumber.activeClass = !state.firstNumber.activeClass;
        state.firstNumber = null;
    }
    if (state.secondNumber) {
        state.secondNumber.activeClass = !state.secondNumber.activeClass;    
        state.secondNumber = null;
    }       
};

let initialState = {
    size: 10, // по  дефолту
    cellsData: [],
    firstNumber: null,
    secondNumber: null,
}


let setGameSize = (size) => {
    initialState.size = size;
}

let generateCellsData = () => {
    const size = initialState.size;
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
    initialState.cellsData = gameMatrix;
}

setGameSize(10);
generateCellsData();

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_HANDLER_CELL:
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