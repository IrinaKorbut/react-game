import { GameField } from './GameField';
import { GameButtonGroup } from './buttons/GameButtonGroup';

import game from './Game.module.scss';

export const GameContainer = (props) => {

    return (
        <div className={game.wrapper}>
            <div className={game.main}>     
                    <GameField cellsData={ props.state.cellsData } dispatch={ props.dispatch } />
                    <GameButtonGroup dispatch={ props.dispatch }/>
            </div>
        </div>       
    )
}