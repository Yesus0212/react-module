import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Calculator from './components/Calculator';
import Counter from './components/Counter/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <Counter />
      </header>
    </div>
  );
}

export default App;
