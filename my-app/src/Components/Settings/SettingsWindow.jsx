import { Container, Jumbotron } from 'react-bootstrap';
import { FormSwitchMusic } from './FormSwitchMusic';
import { FormSwitchSound } from './FormSwitchSound';
import settings from './SoundSettings.module.scss'

export const SettingsWindow = () => {
    // debugger
    return (
        <div className={settings.wrapper}>
            <div className={settings.main}>        
                <Container >
                    <Jumbotron style={{ margin: '0 auto', background: 'rgba(0, 0, 0, 0)'}}  variant="dark" className="text-white">
                        <FormSwitchMusic label='Music'/>
                        <FormSwitchSound label='Sound'/>
                    </Jumbotron>
                </Container>
            </div>
        </div>        
    )
}