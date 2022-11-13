import React from 'react';
import './App.scss';

import Footer from '../Footer/Footer';
import Slide from '../Slide/Slide';

function App() {
  return (
    <div className="App">
      <h1 className='noselect'>MAD <i>SHOOZ</i></h1>
      <Slide/>
      <Slide reverse={true}/>
      <Slide/>
      <Slide reverse={true}/>
      <Footer/>
    </div>
  );
}

export default App;
