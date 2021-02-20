import { GameCell } from './GameCell';

export function renderGameField(size) {
    const gameMatrix = []
    for (let i = 0; i < size; i++) {
        const arr = Array(size).fill({})
        const arrNumbers = arr.map(function (item, index) {
            return {
                i: i,
                j: index,
                value: Math.floor(Math.random() * 9) + 1
            }

        });
        gameMatrix.push(arrNumbers);
    }
    return gameMatrix
}

export function clickHandler() {

}