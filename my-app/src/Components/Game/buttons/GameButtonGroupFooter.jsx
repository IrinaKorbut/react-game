import React, { useEffect, useRef } from 'react'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { clickCancelMoveActionCreator, clickShowMoveActionCreator, 
    clickNewGameActionCreator, clickAutoPlayActionCreator } from '../../../redux/gameReducer';

import buttonGroupFooter from './ButtonGroupFooter.module.scss';

function useKey(key, callBack) {
    // debugger;
    const callbackRef = useRef(callBack);
    useEffect(() => {
        callbackRef.current = callBack
    })
    useEffect(() => {
        function handle(event) {
            if (event.code === key) {
                callbackRef.current(event)
            }
        }
        document.addEventListener('keypress', handle);
        return () => document.removeEventListener('keypress', handle)
    }, [key])
}

export const GameButtonGroupFooter = (props) => {

    let clickCancelMove = () => {
        props.dispatch(clickCancelMoveActionCreator())
    }

    let clickShowMove = () => {
        props.dispatch(clickShowMoveActionCreator())
    }

    let clickNewGame = () => {
        props.dispatch(clickNewGameActionCreator())
    }

    let clickAutoPlay = () => {
        props.dispatch(clickAutoPlayActionCreator())
    }

    useKey("Enter", clickNewGame)
    useKey("Space", clickCancelMove)
    useKey("KeyQ", clickShowMove)

    return (
        <ButtonToolbar className={ buttonGroupFooter.customToolBar } aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-2 ml-2 mb-2" size="sm" aria-label="First group">
                <Button 
                    variant="secondary"
                    onClick={ clickCancelMove }
                >Undo</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2 ml-2 mb-2" size="sm" aria-label="Second  group">
                <Button 
                    variant="secondary"
                    onClick={ clickShowMove }
                >Show move</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2 ml-2 mb-2" size="sm" aria-label="Third  group">
                <Button 
                    variant="secondary" 
                    onClick={ clickNewGame }
                >New Game</Button>
            </ButtonGroup>
            {/* <ButtonGroup className="mr-2 ml-2 mb-2" size="sm" aria-label="Third  group">
                <Button 
                    variant="secondary" 
                    onClick={ clickAutoPlay }
                >Autoplay</Button>
            </ButtonGroup> */}
        </ButtonToolbar>
    )
}