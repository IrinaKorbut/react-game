import './App.scss';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Home/Home';
import { Game } from './Components/Game/Game';
import { Rules } from './Components/Rules/Rules';
import { Settings } from './Components/Settings/Settings';
import { Statistic } from './Components/TableStatistic/Statistic';
import React, {useEffect, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// function useKey(key, callBack) {
//   // debugger;
//   const callbackRef = useRef(callBack);
//   useEffect(() => {
//     callbackRef.current = callBack
//   })
//   useEffect(() => {
//     function handle (event) {
//       if (event.code === key) {
//         callbackRef.current(event)
//       }
//     }
//     document.addEventListener('keypress', handle);
//     return () => document.removeEventListener('keypress', handle)
//   }, [key])
// }

function App(props) {
  // function handleArrowLeft() {
  //   console.log('ArrowLeft')
  // }
  // function ArrowRight() {
  //   console.log('Space')
  // }
  // function KeyQ() {
  //   console.log('KeyQ')
  // }
  // useKey("Enter", handleArrowLeft)
  // useKey("Space", ArrowRight)
  // useKey("KeyQ", KeyQ)
  return (
    <div className="App bg-secondary">
      <BrowserRouter>
        <Header/>
        <Switch >
          <Route exact path='/' render={() => <Home />} />
          <Route path='/game' render={() => <Game 
            game={ props.state.game } 
            score={ props.state.score } 
            dispatch={ props.dispatch }/>} 
          />
          <Route path='/rules' render={() => <Rules />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/statistic' render={() => <Statistic 
            score={ props.state.score }
            game={ props.state.game } 
            />} 
          />
        </Switch>
        <Footer/>
      </BrowserRouter>        
    </div>
  );
}

export default App;
