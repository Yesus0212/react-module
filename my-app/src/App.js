import logo from './logo.svg';
import './App.css';
import RickandMortyCards from './components/RickandMortyCards';
// import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <NavBar />        */}
        <h1>The Rick and Morty API</h1>
        <RickandMortyCards />
      </header>
    </div>
  );
}

export default App;
