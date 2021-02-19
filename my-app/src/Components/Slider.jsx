import { RulesPage } from './RulesPage'
import { Carousel } from 'react-bootstrap';

export const Slider = () => {
    return (
        <Carousel style={{height: '80%' }}  bg="dark" variant="dark">
            <Carousel.Item style={{ width: '100%', height: '100%' }} interval={100000}>
                <RulesPage 
                title='Play' 
                text='The object is to clear the board by selecting numbers that match or that add to ten. Numbers match vertically or horizontally and must be contiguous. For example, a 2 and an 8 add to 10, and so can be eliminated if they are adjacent to each other either horizontally or vertically. Similar for 1 – 9, 3 – 7, etc., as well as 4 – 4, 5 – 5, etc. There can be black space between the numbers; the rule is that there cannot be another number between them.'
                />
            </Carousel.Item>
            <Carousel.Item interval={100000}>
                <RulesPage 
                title='Controls' 
                text='Select numbers by touching them. The first number you touch will turn grey. When you touch a matching number, assuming they are eliminable, they will be blacked out.'
                />
                <RulesPage 
                title='Undo' 
                text='You are allowed to Undo only the previous elimination, so proceed cautiously.You can Undo a Check if your previous move was not to Clear.'
                />
            </Carousel.Item>
            <Carousel.Item interval={100000}>
                <RulesPage 
                title='Restart' 
                text='If the situation gets too dire, New Game lets you begin again'
                />
            </Carousel.Item>
        </Carousel>
    )
}