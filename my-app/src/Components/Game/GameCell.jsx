import game from './Game.module.scss';
import { clickHandlerCellActionCreator } from '../../redux/gameReducer';



export const GameCell = (props) => {
    let clickHandlerCell = (event) => {
        let currentEvent = event;
        props.dispatch(clickHandlerCellActionCreator(currentEvent))
    }

    return (
        <div 
            className={`${game.cell} ${props.activeClass ? game.active : ''}`} 
            onClick={ clickHandlerCell } 
            data={ props.data }>
                { props.value }
        </div>
    )
}