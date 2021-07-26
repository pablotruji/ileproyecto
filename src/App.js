import React from 'react';
import Slideshow from './components/SlideShow';
import styled from 'styled-components';

//Estilos de Slideshow
import './styles.css'

const App = () => {
  return (
    <main>
      <Titulo>Productos Destacados</Titulo>
      <Slideshow/>

    </main>
  )
}

const Titulo = styled.p`
  font-size: 18px;
  fontweight: 700;
  text-transform: uppercase;
  margin-botton: 10px;
`;

export default App;


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        PÁGINA WEB DE ILEPSA
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; borrado por el slide */


