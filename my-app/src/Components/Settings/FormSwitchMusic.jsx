import { Form } from 'react-bootstrap';

export const FormSwitchMusic = (props) => {
    const id = `${props.label}-switch`
    return (
        <Form className="mb-3">
            <Form.Check
                className="mb-2"
                type="switch"
                id={id}
                label={props.label}
            />
            <Form.Group controlId="formBasicRangeCustom">
                <Form.Label>{props.label} volume</Form.Label>
                <Form.Control type="range" custom />
            </Form.Group>
        </Form>
    )
}