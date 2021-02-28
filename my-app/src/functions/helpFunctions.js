export let changeCellsDesign = (state) => {
    console.log(state.cellsData)
    state.cellsData.forEach((cellsArray) => {
        cellsArray.forEach((cell) => {
            cell.circleClass = (state.cellsDesign === 'Circle')
        })
    })
}