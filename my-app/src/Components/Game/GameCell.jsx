import game from './Game.module.scss';
import { clickHandler } from './../../redux/state';


export const GameCell = (props) => {
    return (
        <div 
            className={`${game.cell} ${props.activeClass ? game.active : ''}`} 
            onClick={clickHandler} 
            data={props.data}>
                {props.value}
        </div>
    )
}