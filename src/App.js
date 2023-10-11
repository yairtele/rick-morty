import imageRickMorty from './img/rick-morty.png'
import logo from './logo.svg';
import './App.css';

function App() {

  const reqApi = () => {
    console.log("Click has been done")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <img src={imageRickMorty} alt="Rick & Morty" className="img-home"></img>
        <button onClick={reqApi} className="btn-search">Search Characters</button>
      </header> 
    </div>
  );
}

export default App;
