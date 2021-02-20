import { GameCell } from './GameCell';

export function renderGameField(size) {
    const gameMatrix = []
    for (let i = 0; i < size; i++) {
        const arr = Array(size).fill(0)
        const arrNumbers = arr.map(function (item) {
            return item + Math.floor(Math.random() * 9) + 1
        });
        gameMatrix.push(arrNumbers);
    }
    return gameMatrix;
}

export function clickHandler() {

}