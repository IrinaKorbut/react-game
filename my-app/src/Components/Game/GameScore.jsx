import game from './Game.module.scss';

export const GameScore = (props) => {
    return (
        <div className={game.score}>
           Your current score: {props.score}
        </div>       
    )
}