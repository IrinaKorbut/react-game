import game from './Game.module.scss';
import { clickHandlerCellActionCreator } from '../../redux/gameReducer';



export const GameCell = (props) => {
    let clickHandlerCell = (event) => {
        let currentEvent = event;
        props.dispatch(clickHandlerCellActionCreator(currentEvent))
    }

    let isActiveClass = props.activeClass ? game.active : '';
    let isDisableClass = props.disableClass ? game.disable : '';

    return (
        <div 
            className={`${game.cell} ${isActiveClass} ${isDisableClass}`} 
            onClick={ clickHandlerCell } 
            data={ props.data }>
                { props.value }
        </div>
    )
}