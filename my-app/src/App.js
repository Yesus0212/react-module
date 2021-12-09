import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <Counter />
        <NavBar />
      </header>
    </div>
  );
}

export default App;
