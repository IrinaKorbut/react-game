import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

export const GameButtonGroup = (props) => {

    return (
        <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-2" size="sm" aria-label="First group">
                <Button variant="secondary">Cancel move</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-2" size="sm" aria-label="Second  group">
                <Button variant="secondary">Show move</Button>
            </ButtonGroup>
            <ButtonGroup size="sm" aria-label="Third  group">
                <Button variant="secondary">Start New Game</Button>
            </ButtonGroup>
        </ButtonToolbar>
    )
}