import game from './Game.module.scss';
import { clickHandlerCellActionCreator } from '../../redux/gameReducer';



export const GameCell = (props) => {
    // debugger;
    let clickHandlerCell = (event) => {
        let currentEvent = event;
        props.dispatch(clickHandlerCellActionCreator(currentEvent))
    }

    const gameSize = props.size;
    const cellSizeStyle = 100 / gameSize;

    const cellStyle = {
        width: `${cellSizeStyle}%`,
        height: `${cellSizeStyle}%`,        
    };
    // debugger;
    let isActiveClass = props.activeClass ? game.active : '';
    let isDisableClass = props.disableClass ? game.disable : '';
    let isHelpClass = props.helpClass ? game.help : '';
    let isCircleClass = props.circleClass ? game.cellCircle : '';

    return (
        <div className={game.cellContainer}
            style={ cellStyle }
        >
            <div             
            className={`${game.cell} ${isActiveClass} ${isDisableClass} ${isHelpClass} ${isCircleClass}`} 
            
            onClick={ clickHandlerCell } 
            data={ props.data }>
                { props.value }
            </div>
        </div>        
    )
}