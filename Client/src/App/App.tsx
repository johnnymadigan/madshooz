import React from 'react';
import './App.css';

import Footer from '../Footer/Footer';
import Slide from '../Slide/Slide';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <Slide/>
      <Footer/>
    </div>
  );
}

export default App;
