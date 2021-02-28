import { GameField } from './GameField';
import { GameButtonGroupFooter } from './buttons/GameButtonGroupFooter';
import { GameButtonGroupHeader } from './buttons/GameButtonGroupHeader';

import game from './Game.module.scss';

export const GameContainer = (props) => {
// debugger
    return (
        <div className={game.wrapper}>
            <div className={game.main}>     
                    <GameButtonGroupHeader state={ props.state } dispatch={ props.dispatch }/> 
                    <GameField state={ props.state } dispatch={ props.dispatch } />
                    <GameButtonGroupFooter dispatch={ props.dispatch }/>
            </div>
        </div>       
    )
}