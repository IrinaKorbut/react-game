import './App.scss';
import { Header } from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
        <Header/>
      </div>      
    </div>
  );
}

export default App;
