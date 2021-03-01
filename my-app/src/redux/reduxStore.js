import { createStore, combineReducers } from 'redux'
import { gameReducer } from './gameReducer'
import { scoreReducer } from './scoreReducer'

let reducers = combineReducers({
    game: gameReducer,
    score: scoreReducer,
});

export let store = createStore(reducers);