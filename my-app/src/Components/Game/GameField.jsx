import { GameCell } from './GameCell';
import game from './Game.module.scss';

export const GameField = (props) => {
    const cellElements = props.state.cellsData.map(array => (
        array.map( cell => <GameCell 
            size={ props.state.size }
            value={cell.value} 
            data={cell.data} 
            activeClass={cell.activeClass} 
            disableClass={cell.disableClass} 
            helpClass={cell.helpClass} 
            circleClass={cell.circleClass} 
            dispatch={ props.dispatch } /> )
    ))

    return (
        <div className={game.field}>
            { cellElements }
        </div>
    )
}