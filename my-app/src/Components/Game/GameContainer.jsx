import { GameField } from './GameField';

import game from './Game.module.scss';

export const GameContainer = (props) => {

    return (
        <div className={game.wrapper}>
            <div className={game.main}>     
                    <GameField cellsData={ props.state.cellsData } dispatch={ props.dispatch } />
            </div>
        </div>       
    )
}