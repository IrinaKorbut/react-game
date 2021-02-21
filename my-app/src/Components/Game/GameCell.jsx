import game from './Game.module.scss';
import { clickHandler } from './helpGameFunctions';


export const GameCell = (props) => {
    return (
        <div className={game.cell} onClick={clickHandler} data={props.data}>
            {props.value}
        </div>
    )
}