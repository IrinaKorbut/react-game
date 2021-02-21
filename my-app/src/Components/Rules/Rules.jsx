import { Container, Jumbotron } from 'react-bootstrap';

export const Rules = () => {
    return (
        <div className="wrapper">
            <Container >
                <Jumbotron style={{ margin: '0 auto', background: 'rgba(0, 0, 0, 0)' }} className="text-white">
                    <h1>Play</h1>
                    <p>The object is to clear the board by selecting numbers that match or that add to ten. Numbers match vertically or horizontally and must be contiguous. For example, a 2 and an 8 add to 10, and so can be eliminated if they are adjacent to each other either horizontally or vertically. Similar for 1 – 9, 3 – 7, etc., as well as 4 – 4, 5 – 5, etc. There can be black space between the numbers; the rule is that there cannot be another number between them.</p>
                    <h1>Controls</h1>
                    <p>Select numbers by touching them. The first number you touch will turn grey. When you touch a matching number, assuming they are eliminable, they will be blacked out.</p>
                    <h1>Undo</h1>
                    <p>You are allowed to Undo only the previous elimination, so proceed cautiously.You can Undo a Check if your previous move was not to Clear.</p>
                    <h1>Restart</h1>
                    <p>If the situation gets too dire, New Game lets you begin again</p>
                </Jumbotron>            
            </Container>
        </div>
    )
}