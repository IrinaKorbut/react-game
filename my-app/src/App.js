import './App.scss';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Home/Home';
import { Game } from './Components/Game/Game';
import { Rules } from './Components/Rules/Rules';
import { Settings } from './Components/Settings/Settings';
import { Statistic } from './Components/TableStatistic/Statistic';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";



function App(props) {

  return (
    <div className="App bg-secondary">
      <BrowserRouter>
        <Header/>
        <Switch >
          <Route exact path='/' render={() => <Home />} />
          <Route path='/game' render={() => <Game game={ props.state.game } />} />
          <Route path='/rules' render={() => <Rules />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/statistic' render={() => <Statistic />} />
        </Switch>
        <Footer/>
      </BrowserRouter>        
    </div>
  );
}

export default App;
