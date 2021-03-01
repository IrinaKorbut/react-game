import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { clickCancelMoveActionCreator, clickShowMoveActionCreator, clickNewGameActionCreator } from '../../../redux/gameReducer';


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


    return (
        <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-2" size="sm" aria-label="First group">
                <Button 
                    variant="secondary"
                    onClick={ clickCancelMove }
                >Cancel move</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2" size="sm" aria-label="Second  group">
                <Button 
                    variant="secondary"
                    onClick={ clickShowMove }
                >Show move</Button>
            </ButtonGroup>
            <ButtonGroup size="sm" aria-label="Third  group">
                <Button variant="secondary" onClick={ clickNewGame }>New Game</Button>
            </ButtonGroup>
        </ButtonToolbar>
    )
}