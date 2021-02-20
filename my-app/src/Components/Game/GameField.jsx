import { GameCell } from './GameCell';
import game from './Game.module.scss';
import { renderGameField } from './helpGameFunctions';

const size = 10;
export const GameField = () => {
    return (
        <div className={game.field}>
            {
                renderGameField(size).map(item => (
                    item.map(item => (
                        <GameCell value={item} />
                    ))
                ))
            }
        </div>
    )
}