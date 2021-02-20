import { Container, Image } from 'react-bootstrap';
import footer from './Footer.module.scss'
import logo_rsSchool from './../../assets/images/rs_school_js.svg'

export const Footer = () => {
    return (
        <Container fluid className={`${footer.footer} fixed-bottom`}>
            <Container className={footer.container}>
                <div className='about-author'>
                    Irina Korbut
                </div>
                <div className={footer.logo}>
                    <Image src={logo_rsSchool} fluid />
                </div>
                <div className='year'>2021</div>
            </Container>
        </Container>
    )
}