export let changeCellsDesign = (state) => {
    console.log(state.cellsData)
    state.cellsData.forEach((cellsArray) => {
        cellsArray.forEach((cell) => {
            cell.circleClass = (state.cellsDesign === 'Circle')
        })
    })
}

export let putUserScoreToScoreState = (scoreState, userName, score) => {
    debugger;
    const scoreData = {
        userName: userName,
        score: score
    }
    scoreState.scoreData.push(scoreData);
    localStorage.setItem('scoreData', JSON.stringify(scoreState.scoreData))
}