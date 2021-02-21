import { GameCell } from './GameCell';
import game from './Game.module.scss';
// import { renderGameField } from './helpGameFunctions';

// const size = 10;

export const GameField = (props) => {

    const Game = {
        firstNumber: null,
        secondNumber: null,
    }
    
    const cellElements = props.cellsData.map(array => (
        array.map( cell => <GameCell value={cell.value} data={cell.data}/> )
    ))

    return (
        <div className={game.field}>
            {cellElements}
        </div>
    )
}