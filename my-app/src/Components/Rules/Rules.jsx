import { Container, Jumbotron } from 'react-bootstrap';
import rules from './Rules.module.scss'

export const Rules = () => {
    return (
        <div className={rules.wrapper}>
            <Container >
                <Jumbotron style={{ margin: '0 auto', background: 'rgba(0, 0, 0, 0)' }} className="text-white">
                    <h3>Play</h3>
                    <p>The object is to clear the board by selecting numbers that match or giv after sum needed number. Numbers match vertically or horizontally and must be contiguous. For example, a 2 plus 8 equal 10, and so can be eliminated if they are adjacent to each other either horizontally or vertically. Similar for 1 – 9, 3 – 7, etc., as well as 4 – 4, 5 – 5, etc. There can be black space between the numbers; the rule is that there cannot be another number between them.</p>
                    <h3>Levels</h3>
                    <p>You can choose field size and range of numbers and appear of cells in dropdowns. When you choose another numbers range then needed sum also change. For instance, for 1-3 range sum which you will allowed to eliminable become 4; for 1-4 range sum which you will allowed to eliminable become 5 and so on.</p>
                    <h3>Controls</h3>
                    <p>Select numbers by touching them. The first number you touch will turn purple. When you touch a matching number, assuming they are eliminable, they will be blacked out.</p>
                    <h3>Undo</h3>
                    <p>You are allowed to Undo your steps touch "Undo".</p>
                    <h3>Help</h3>
                    <p>If you can't find next step you can touch "Show move" and  next numbers allowed to eliminableand will glow green.</p>
                    <h3>Restart</h3>
                    <p>To restart you should touch "New Game".</p>
                    <h3>Hot keys</h3>
                    <p>Enter - start new game.</p>
                    <p>Space - cancel move.</p>
                    <p>Q - show next step.</p>
                </Jumbotron>            
            </Container>
        </div>
    )
}