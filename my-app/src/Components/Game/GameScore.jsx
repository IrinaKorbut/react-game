import game from './Game.module.scss';

export const GameScore = (props) => {
// debugger
    return (
        <div className={game.score}>
           Your current score: {props.score}
        </div>       
    )
}