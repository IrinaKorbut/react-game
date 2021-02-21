const Game = {
    firstNumber: null,
    secondNumber: null,
}

export function renderGameField(size) {
    const gameMatrix = []
    for (let i = 0; i < size; i++) {
        const arr = Array(size).fill({})
        const arrNumbers = arr.map(function (item, index) {
            return {
                i: i,
                j: index,
                value: Math.floor(Math.random() * 9) + 1,
                data: `${i}${index}`
            }
        });
        gameMatrix.push(arrNumbers);
    }
    return gameMatrix
}

function isThereIsFirstNumber() {
    return !!Game.firstNumber;
}

function setFirstNumber(i, j) {
        Game.firstNumber = {
            i: i,
            j: j
        }
}

function setSecondNumber(i, j) {
    Game.secondNumber = {
        i: i,
        j: j
    }
}

function toggleActiveCellClass(cell) {
    cell.classList.toggle('active')
}

export function clickHandler(event) {
    console.log(event.target)
    console.log(event.target.getAttribute('data'))
    const id = event.target.getAttribute('data');
    const i = id[0];
    const j = id[1];
    if (isThereIsFirstNumber()) {
        setSecondNumber(i, j);
    } else {
        setFirstNumber(i, j);
        toggleActiveCellClass(event.target)
    }
}