import { Card } from 'react-bootstrap';

export const RulesPage = (props) => {
    return (
        <Card style={{ width: '70%', height: '100%' }} bg="secondary" text="white" border="secondary" className="mx-auto">
            <Card.Body>
                <Card.Title className="mb-5">{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}