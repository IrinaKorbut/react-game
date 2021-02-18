import './App.scss';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Home } from './Home';
import { Game } from './Game';
import { Rules } from './Rules';
import { Settings } from './Settings';
import { Statistic } from './Statistic';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/game' component={Game}/>
          <Route path='/rules' component={Rules}/>
          <Route path='/settings' component={Settings}/>
          <Route path='/statistic' component={Statistic}/>
        </Switch>
        <Footer/>
      </BrowserRouter>        
    </div>
  );
}

export default App;
