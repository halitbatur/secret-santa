import './App.css';
import SecretSantaList from './components/SecretSanta';
import santaGif from "./resources/santagif.gif";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={santaGif} alt="Logo" />
        <SecretSantaList />
      </header>
    </div>
  );
}

export default App;
