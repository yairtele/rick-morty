import imageRickMorty from './img/rick-morty.png'
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();

    //console.log(characterApi);
    setCharacters(characterApi.results);
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
