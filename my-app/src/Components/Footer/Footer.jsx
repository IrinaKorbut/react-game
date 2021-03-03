import { Container, Image, Nav } from 'react-bootstrap';
import footer from './Footer.module.scss'
import logo_rsSchool from './../../assets/images/rs_school_js.svg'
import telegramIcon from './../../assets/images/telegram.svg'
import skypeIcon from './../../assets/images/skype.svg'
import emailIcon from './../../assets/images/email.svg'
import gitHubIcon from './../../assets/images/github_icon.svg'
import YouTubeIcon from './../../assets/images/YouTube.svg'

export const Footer = () => {
    return (
        <Container fluid className={`${footer.footer} fixed-bottom`}>
            <Container className={footer.container}>
                <Nav className={footer.contactsContainer}
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                > 
                <div className={footer.contactsTitle}>My contacts:</div>
                    <Nav.Item className={footer.contactItem}>
                        <Nav.Link className={footer.link} href="tg://resolve?domain=<irisharomka>">
                            <Image className={footer.icon} src={telegramIcon} fluid />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={footer.contactItem}>
                        <Nav.Link className={footer.link} href="skype:e.korbuti">
                            <Image className={footer.icon} src={skypeIcon} fluid />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={footer.contactItem}>
                        <Nav.Link className={footer.link} href="mailto:irisharomka96@gmail.com">
                            <Image className={footer.icon} src={emailIcon} fluid />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={footer.contactItem}>
                        <Nav.Link className={footer.link} href="https://github.com/IrinaKorbut">
                            <Image className={footer.icon} src={gitHubIcon} fluid />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={footer.contactItem}>
                        <Nav.Link className={footer.link} href="https://studio.youtube.com/channel/UCzUy2hCDxaepouPTvKNceug">
                            <Image className={footer.icon} src={YouTubeIcon} fluid />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav className={footer.contactsContainer}
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                > 
                    <Nav.Item className={footer.logo}>
                        <Nav.Link className={footer.link} href="https://rs.school/">
                            <Image className={footer.logo} src={logo_rsSchool} fluid />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className='year'>2021</div>
            </Container>
        </Container>
    )
}