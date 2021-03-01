const CLICK_HANDLER_CELL = '123'

let scoreData = JSON.parse(localStorage.getItem('scoreData')) ? JSON.parse(localStorage.getItem('scoreData')) : [];

export let initialScoreState = {
    showModal: false,
    scoreData: scoreData
}


export const scoreReducer = (state = initialScoreState, action) => {
    switch (action.type) {
        case CLICK_HANDLER_CELL:
            return state;
        default:
            return state;
    }
}

