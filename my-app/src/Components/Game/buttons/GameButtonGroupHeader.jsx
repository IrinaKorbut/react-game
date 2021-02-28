import { ButtonToolbar, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { clickHandleFieldSize, clickHandleCellsDesign } from '../../../redux/gameReducer';


export const GameButtonGroupHeader = (props) => {

    let handleFieldSize = (currentEvent) => {
        props.dispatch(clickHandleFieldSize(currentEvent));
    }

    let handleCellsDesign = (currentEvent) => {
        props.dispatch(clickHandleCellsDesign(currentEvent));
    }

    // let clickShowMove = () => {
    //     props.dispatch(clickShowMoveActionCreator())
    // }

    return (
        <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-2" size="sm" aria-label="First group">
                <DropdownButton variant="secondary" className="mr-2" 
                    size="sm" as={ButtonGroup} title={props.state.sizeTitle} id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1" onClick={ handleFieldSize } >6x6</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={ handleFieldSize } >8x8</Dropdown.Item>
                    <Dropdown.Item eventKey="3" onClick={ handleFieldSize } >10x10</Dropdown.Item>
                </DropdownButton>
          {/* <select onChange={ handleFieldSize }>
            <option value="">Game field...</option>
            <option value="6" >6x6</option>
            <option value="8" >8x8</option>
            <option value="10" >10x10</option>
          </select> */}
            </ButtonGroup>
            <ButtonGroup className="mr-2" size="sm" aria-label="First group">
                {/* <DropdownButton variant="secondary" className="mr-2" size="sm" as={ButtonGroup} title="Range of numbers" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="4" value="3">1-3</Dropdown.Item>
                    <Dropdown.Item eventKey="5" value="4">1-4</Dropdown.Item>
                    <Dropdown.Item eventKey="6" value="5">1-5</Dropdown.Item>
                    <Dropdown.Item eventKey="7" value="6">1-6</Dropdown.Item>
                    <Dropdown.Item eventKey="8" value="7">1-7</Dropdown.Item>
                    <Dropdown.Item eventKey="9" value="8">1-8</Dropdown.Item>
                    <Dropdown.Item eventKey="10" value="9">1-9</Dropdown.Item>
                </DropdownButton> */}
            <select >
                <option value="">Numbers</option>
                <option value="3">1-3</option>
                <option value="4">1-4</option>
                <option value="5">1-5</option>
                <option value="6">1-6</option>
                <option value="7">1-7</option>
                <option value="8">1-8</option>
                <option value="9">1-9</option>
            </select>
            </ButtonGroup>
            <ButtonGroup className="mr-2" size="sm" aria-label="First group">
                <DropdownButton variant="secondary" className="mr-2" 
                    size="sm" as={ButtonGroup} title={props.state.cellsDesign} id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="11" onClick={ handleCellsDesign }>Circle</Dropdown.Item>
                    <Dropdown.Item eventKey="12" onClick={ handleCellsDesign }>Square</Dropdown.Item>
                </DropdownButton>
            {/* <select >
                <option value="">Cells type</option>
                <option value="circle">Circle</option>
                <option value="square">Square</option>
            </select> */}
            </ButtonGroup>
        </ButtonToolbar>
    )
}