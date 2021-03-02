// import { getAvailableMove } from "./finishGame";
// import { displayCurrentMove, crossNumber } from "./gameLogic";


export let changeCellsDesign = (state) => {
    console.log(state.cellsData)
    state.cellsData.forEach((cellsArray) => {
        cellsArray.forEach((cell) => {
            cell.circleClass = (state.cellsDesign === 'Circle')
        })
    })
}

export let putUserScoreToScoreState = (gameState, scoreState, userName, score) => {
    // debugger;
    const scoreData = {
        userName: userName,
        score: score,
        sizeTitle: gameState.sizeTitle,
        numbersRangeTitle: gameState.numbersRangeTitle
    }
    scoreState.scoreData.push(scoreData);
    localStorage.setItem('scoreData', JSON.stringify(scoreState.scoreData))
}

export let deleteVariableFromLocalStorage = (variable) => {
    localStorage.removeItem(variable)
}

export let compareUsersScore = (a, b) => {
    if (a.score < b.score) {
        return -1;
    }
    if (a.score > b.score) {
        return 1;
    }
    return 0;
}

// let crossNumber = (numberMatrix, cell) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             cell.disableClass = true;
//             numberMatrix[cell.i][cell.j] = 0;
//             resolve();
//         }, 200);
//     });
// }

// export let displayCurrentMove = (state, i, j) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             state.cellsData[i][j].activeClass = !state.cellsData[i][j].activeClass;
//             resolve();
//         }, 200);
//     });
// }

// async function showAnimationAutoPlay(state, coordinatesAvailableMove) {
//     await displayCurrentMove(state, coordinatesAvailableMove[0], coordinatesAvailableMove[1]);
//     await crossNumber(state.numberMatrix, state.cellsData[coordinatesAvailableMove[0]][coordinatesAvailableMove[1]])
//     await crossNumber(state.numberMatrix, state.cellsData[coordinatesAvailableMove[2]][coordinatesAvailableMove[3]])
// }

// export async function autoPlayGame(state) {
//     if (!getAvailableMove(state)) {
//         return;
//     }
//     const coordinatesAvailableMove = getAvailableMove(state);
//     await showAnimationAutoPlay(state, coordinatesAvailableMove);
//     autoPlayGame(state)
// }

