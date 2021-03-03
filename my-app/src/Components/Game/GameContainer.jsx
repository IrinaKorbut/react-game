import { GameField } from './GameField';
import { GameButtonGroupFooter } from './buttons/GameButtonGroupFooter';
import { GameButtonGroupHeader } from './buttons/GameButtonGroupHeader';
import { GameScore } from './GameScore';
import { Button} from 'react-bootstrap';


import { FullScreen, useFullScreenHandle } from "react-full-screen";

import game from './Game.module.scss';

export const GameContainer = (props) => {
    // debugger
    const handle = useFullScreenHandle();

    return (
        
            <div className={game.wrapper}>
                <FullScreen  handle={handle} className={game.fullScreen}>
                    <div className={game.main} >
                        <Button onClick ={handle.enter} variant="secondary" size="sm" className={game.fullScreenButton}>
                            <i class="material-icons">open_in_full</i>
                        </Button>
                        <GameButtonGroupHeader state={props.state} dispatch={props.dispatch} />
                        <GameScore score={props.state.currentScore} />
                        <GameField state={props.state} dispatch={props.dispatch} />
                        <GameButtonGroupFooter dispatch={props.dispatch} />
                    </div>
                </FullScreen>
            </div>
        

    )
}