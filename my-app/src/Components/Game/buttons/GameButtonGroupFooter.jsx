import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { clickCancelMoveActionCreator, clickShowMoveActionCreator } from '../../../redux/gameReducer';


export const GameButtonGroupFooter = (props) => {

    let clickCancelMove = () => {
        props.dispatch(clickCancelMoveActionCreator())
    }

    let clickShowMove = () => {
        props.dispatch(clickShowMoveActionCreator())
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
                <Button variant="secondary">Start New Game</Button>
            </ButtonGroup>
        </ButtonToolbar>
    )
}