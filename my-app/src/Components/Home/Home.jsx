import { Container, Jumbotron } from 'react-bootstrap';
import home from './Home.module.scss'

export const Home = () => {
    return (
        <div className={home.wrapper}>
            <Container >
                <Jumbotron style={{ margin: '40px auto', background: 'rgba(0, 0, 0, 0)' }} className="text-white">
                    <h1>Hi!</h1>
                    <p className={home.paragraph}>Hi! 
                        I want to introduce to you my first application on react. It is a game NumberAma. I thing that almost all pupels play in this game on lessons. :)
                        You don't need any special knowledge and skills to play it. But it can be so interesting.
                        The aim of this game get as less score as you can.
                        All rules of this game you can find on "How to play" page.
                        Also there are page of records in which you can see score all your games. But to save your score you should write your nickName after finish game in prompt window. (Sure, I know that this window is not good, but I had not enough free time to implement all features).
                        Also you can open game field fullscreen by button in right top corner or by Z hot-key. To return usual display touch Esc.
                    </p>
                    <p className={home.paragraph}>I hope you will enjoy it.</p>
                    <p className={home.paragraph}>Have a good day :)</p>
                </Jumbotron>
            </Container>
        </div>
    )
}