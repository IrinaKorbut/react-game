import { Container, Jumbotron } from 'react-bootstrap';
import { FormSwitch } from './FormSwitch';
import './SoundSettings.scss'

export const SoundSettings = () => {
    return (
        <div className="wrapper">
            <div className="main">        
                <Container >
                    <Jumbotron style={{ margin: '0 auto', background: 'rgba(0, 0, 0, 0)'}}  variant="dark" className="text-white">
                        <FormSwitch label='Music'/>
                        <FormSwitch label='Sound'/>
                    </Jumbotron>
                </Container>
            </div>
        </div>        
    )
}