import { Container } from 'react-bootstrap';
import { GameField } from './GameField';

import game from './Game.module.scss';

export const GameContainer = () => {
    return (
        <div className={game.wrapper}>
            <div className={game.main}>     
                    <GameField />
            </div>
        </div>       
    )
}