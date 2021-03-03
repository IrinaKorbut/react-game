import { gameReducer } from './gameReducer'

export let store = {

    _state: {
        game: {
            size: 10, 
            cellsData: [],
            firstNumber: null,
            secondNumber: null,
        }
    
    },
    _callSubscriber() {
        alert('state was changed')
    },
    
    getState() {
        return this._state;
    },        
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.game = gameReducer(this._state.game, action);
        
        this._callSubscriber(this._state);
    },
    
    setGameSize(size) {
        this._state.game.size = size;
    },
    
    generateCellsData() {
        const size = this._state.game.size;
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
        this._state.game.cellsData = gameMatrix;
    },

}

store.setGameSize(10);
store.generateCellsData();