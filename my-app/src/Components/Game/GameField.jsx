import { GameCell } from './GameCell';
import game from './Game.module.scss';

export const GameField = (props) => {
    const cellElements = props.cellsData.map(array => (
        array.map( cell => <GameCell 
            value={cell.value} 
            data={cell.data} 
            activeClass={cell.activeClass} 
            dispatch={ props.dispatch } /> )
    ))

    return (
        <div className={game.field}>
            { cellElements }
        </div>
    )
}