import game from './Game.module.scss';
import { clickHandlerCellActionCreator } from '../../redux/gameReducer';



export const GameCell = (props) => {
    let clickHandlerCell = (event) => {
        let currentEvent = event;
        props.dispatch(clickHandlerCellActionCreator(currentEvent))
    }
    // debugger;
    let isActiveClass = props.activeClass ? game.active : '';
    let isDisableClass = props.disableClass ? game.disable : '';
    let isHelpClass = props.helpClass ? game.help : '';
// debugger;
    return (
        <div 
            className={`${game.cell} ${isActiveClass} ${isDisableClass} ${isHelpClass}`} 
            onClick={ clickHandlerCell } 
            data={ props.data }>
                { props.value }
        </div>
    )
}