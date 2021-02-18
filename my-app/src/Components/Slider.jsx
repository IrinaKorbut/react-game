import { Rules_page } from './Rules_page'
import { Carousel } from 'react-bootstrap';
import './Slider.scss'

export const Slider = () => {
    return (
        <Carousel className='slider'>
            <Carousel.Item interval={100000} className='slider__item'>
                <Rules_page title='First'/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={100000} className='slider__item'>
                <Rules_page title='Second'/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={100000} className='slider__item'>
                <Rules_page title='Third'/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}