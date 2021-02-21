import { GameContainer } from './GameContainer'

export const Game = (props) => {

    return (
        <GameContainer state={ props.game }/>
    )
}