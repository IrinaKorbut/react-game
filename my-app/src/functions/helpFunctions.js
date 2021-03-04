import { useEffect, useRef } from 'react'


export let changeCellsDesign = (state) => {
    state.cellsData.forEach((cellsArray) => {
        cellsArray.forEach((cell) => {
            cell.circleClass = (state.cellsDesign === 'Circle')
        })
    })
}

export let putUserScoreToScoreState = (gameState, scoreState, userName, score) => {
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

export function useKey(key, callBack) {   
    const callbackRef = useRef(callBack);
    useEffect(() => {
        callbackRef.current = callBack
    })
    useEffect(() => {
        function handle(event) {
            if (event.code === key) {
                callbackRef.current(event)
            }
        }
        document.addEventListener('keypress', handle);
        return () => document.removeEventListener('keypress', handle)
    }, [key])
}