import { ButtonToolbar, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { clickCancelMoveActionCreator, clickShowMoveActionCreator } from '../../../redux/gameReducer';


export const GameButtonGroupHeader = (props) => {

    let clickCancelMove = () => {
        props.dispatch(clickCancelMoveActionCreator())
    }

    let clickShowMove = () => {
        props.dispatch(clickShowMoveActionCreator())
    }

    return (
        <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-2" size="sm" aria-label="First group">
                <DropdownButton variant="secondary" className="mr-2" size="sm" as={ButtonGroup} title="Field size" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">6x6</Dropdown.Item>
                    <Dropdown.Item eventKey="2">8x8</Dropdown.Item>
                    <Dropdown.Item eventKey="3">10x10</Dropdown.Item>
                </DropdownButton>

                <DropdownButton variant="secondary" className="mr-2" size="sm" as={ButtonGroup} title="Range of numbers" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">1-3</Dropdown.Item>
                    <Dropdown.Item eventKey="2">1-4</Dropdown.Item>
                    <Dropdown.Item eventKey="3">1-5</Dropdown.Item>
                    <Dropdown.Item eventKey="4">1-6</Dropdown.Item>
                    <Dropdown.Item eventKey="5">1-7</Dropdown.Item>
                    <Dropdown.Item eventKey="6">1-8</Dropdown.Item>
                    <Dropdown.Item eventKey="7">1-9</Dropdown.Item>
                </DropdownButton>

                <DropdownButton variant="secondary" className="mr-2" size="sm" as={ButtonGroup} title="Cells design" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">Circle</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Square</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
        </ButtonToolbar>
    )
}