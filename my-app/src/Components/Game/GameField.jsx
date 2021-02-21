import { GameCell } from './GameCell';
import game from './Game.module.scss';
import { renderGameField } from './helpGameFunctions';

const size = 10;

export const GameField = () => {

    const Game = {
        firstNumber: null,
        secondNumber: null,
    }

    const cellsData = renderGameField(size);
    
    const cellElements = cellsData.map(array => (
        array.map( cell => <GameCell value={cell.value} data={cell.data}/> )
    ))

    return (
        <div className={game.field}>
            {cellElements}
        </div>
    )
}