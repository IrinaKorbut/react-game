import game from './Game.module.scss';
import { clickHandlerCellActionCreator } from '../../redux/gameReducer';



export const GameCell = (props) => {
    // debugger;
    let clickHandlerCell = (event) => {
        let currentEvent = event;
        props.dispatch(clickHandlerCellActionCreator(currentEvent))
    }

    const gameSize = props.state.size;
    const cellSizeStyle = 100 / gameSize;

    const cellStyle = {
        width: `${cellSizeStyle}%`,
        height: `${cellSizeStyle}%`,        
    };

    let isActiveClass = props.activeClass ? game.active : '';
    let isDisableClass = props.disableClass ? game.disable : '';
    let isHelpClass = props.helpClass ? game.help : '';

    return (
        <div             
            className={`${game.cell} ${isActiveClass} ${isDisableClass} ${isHelpClass}`} 
            style={ cellStyle }
            onClick={ clickHandlerCell } 
            data={ props.data }>
                { props.value }
        </div>
    )
}