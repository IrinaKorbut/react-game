import { ButtonToolbar, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { clickHandleFieldSize, clickHandleCellsDesign, clickHandleNumbersRange } from '../../../redux/gameReducer';

export const GameButtonGroupHeader = (props) => {

    let handleFieldSize = (currentEvent) => {
        props.dispatch(clickHandleFieldSize(currentEvent));
    }

    let handleCellsDesign = (currentEvent) => {
        props.dispatch(clickHandleCellsDesign(currentEvent));
    }

    let handleNumbersRange = (currentEvent) => {
        props.dispatch(clickHandleNumbersRange(currentEvent));
    }

    return (
        <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-2" size="sm" aria-label="First group">
                <DropdownButton variant="secondary" className="mr-2" 
                    size="sm" as={ButtonGroup} title={props.state.sizeTitle} id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1" onClick={ handleFieldSize } >6x6</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={ handleFieldSize } >8x8</Dropdown.Item>
                    <Dropdown.Item eventKey="3" onClick={ handleFieldSize } >10x10</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
            <ButtonGroup className="mr-2" size="sm" aria-label="First group">
                <DropdownButton variant="secondary" className="mr-2" size="sm" 
                    as={ButtonGroup} title={props.state.numbersRangeTitle} id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="4" onClick={ handleNumbersRange } >1-3</Dropdown.Item>
                    <Dropdown.Item eventKey="5" onClick={ handleNumbersRange } >1-4</Dropdown.Item>
                    <Dropdown.Item eventKey="6" onClick={ handleNumbersRange } >1-5</Dropdown.Item>
                    <Dropdown.Item eventKey="7" onClick={ handleNumbersRange } >1-6</Dropdown.Item>
                    <Dropdown.Item eventKey="8" onClick={ handleNumbersRange } >1-7</Dropdown.Item>
                    <Dropdown.Item eventKey="9" onClick={ handleNumbersRange } >1-8</Dropdown.Item>
                    <Dropdown.Item eventKey="10" onClick={ handleNumbersRange } >1-9</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
            <ButtonGroup className="mr-2" size="sm" aria-label="First group">
                <DropdownButton variant="secondary" className="mr-2" 
                    size="sm" as={ButtonGroup} title={props.state.cellsDesign} id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="11" onClick={ handleCellsDesign }>Circle</Dropdown.Item>
                    <Dropdown.Item eventKey="12" onClick={ handleCellsDesign }>Square</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
        </ButtonToolbar>
    )
}