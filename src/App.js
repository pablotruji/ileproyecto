import React from 'react';
import {Slideshow, Slide, TextoSlide} from './components/SlideShow';
import styled from 'styled-components';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';

//Estilos de Slideshow
import './styles.css'

const App = () => {
  return (
    <main>
      <Titulo>Productos Destacados</Titulo>
      <Slideshow controles={true} autoplay={true} velocidad="500" intervalo="3000">
        <Slide>
            <a href="/">
                <img src={ img1 } alt=""/>
                <TextoSlide colorFondo="#ff8000" colorTexto="#000">
                    <p>15% descuento en productos Apple</p>
                </TextoSlide>
            </a>
        </Slide>
        <Slide>
            <a href="/">
                <img src={ img2 } alt=""/>
                <TextoSlide>
                    <p>15% descuento en productos Apple</p>
                </TextoSlide>
            </a>
        </Slide>
        <Slide>
            <a href="/">
                <img src={ img3 } alt=""/>
                <TextoSlide>
                    <p>15% descuento en productos Apple</p>
                </TextoSlide>
            </a>
        </Slide>
        <Slide>
            <a href="/">
                <img src={ img4 } alt=""/>
                <TextoSlide>
                    <p>15% descuento en productos Apple</p>
                </TextoSlide>
            </a>
        </Slide>
      </Slideshow>

      <Titulo>Otro Productos</Titulo>
      <Slideshow controles={true} autoplay={true} velocidad="500" intervalo="10000">
        <Slide>
            <a href="/">
                <img src={ img1 } alt=""/>
                <TextoSlide colorFondo="#ff8000" colorTexto="#000">
                    <p>15% descuento en productos Apple</p>
                </TextoSlide>
            </a>
        </Slide>
        <Slide>
            <a href="/">
                <img src={ img2 } alt=""/>
                <TextoSlide>
                    <p>15% descuento en productos Apple</p>
                </TextoSlide>
            </a>
        </Slide>
        <Slide>
            <a href="/">
                <img src={ img3 } alt=""/>
                <TextoSlide>
                    <p>15% descuento en productos Apple</p>
                </TextoSlide>
            </a>
        </Slide>
        <Slide>
            <a href="/">
                <img src={ img4 } alt=""/>
                <TextoSlide>
                    <p>15% descuento en productos Apple</p>
                </TextoSlide>
            </a>
        </Slide>
      </Slideshow>

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


