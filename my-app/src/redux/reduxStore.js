import { createStore, combineReducers } from 'redux'
import { gameReducer } from './gameReducer'

let reducers = combineReducers({
    game: gameReducer,
});

export let store = createStore(reducers);