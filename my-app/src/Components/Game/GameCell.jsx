// import { GameCell } from './Components/Game/GameCell';
import game from './Game.module.scss';
import { clickHandler } from './helpGameFunctions';


export const GameCell = (props) => {
    return (
        <div className={game.cell} onClick={clickHandler}>
            {props.value}
        </div>
    )
}