import { Container, Image } from 'react-bootstrap';
import './Footer.scss'
import logo_rsSchool from './../../assets/images/rs_school_js.svg'

export const Footer = () => {
    return (
        <Container fluid className='footer fixed-bottom'>
            <Container className='footer__container'>
                <div className='about-author'>
                    Irina Korbut
                </div>
                <div className='logo'>
                    <Image src={logo_rsSchool} fluid />
                </div>
                <div className='year'>2021</div>
            </Container>
        </Container>
    )
}