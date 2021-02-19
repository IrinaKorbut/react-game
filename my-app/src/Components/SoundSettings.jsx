import { Container, Jumbotron } from 'react-bootstrap';
import { FormSwitch } from './FormSwitch';
import './SoundSettings.scss'

export const SoundSettings = () => {
    return (
        <Container >
            <Jumbotron style={{width: '50%', margin: '0 auto'}} bg="dark" variant="dark" className=" bg-secondary text-white">
                <FormSwitch label='Music'/>
                <FormSwitch label='Sound'/>
            </Jumbotron>
        </Container>
    )
}