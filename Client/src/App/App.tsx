import { useEffect, useState } from 'react';
import './App.scss';
import { ShoeDto } from '../Shared/types';
import { GetAllShoes } from '../Shared/ShoeService';
import Footer from '../Footer/Footer';
import Slide from '../Slide/Slide';

function App() {
  const [ shoeCollections, setShoeCollections] = useState<ShoeDto[][]>([]);
  useEffect(() => {
    GetAllShoes()
    .then(res => setShoeCollections(res))
    .catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1 className='noselect'>MAD <i>SHOOZ</i></h1>
      {shoeCollections.map((collection, index) => <Slide shoes={collection} key={index}/>)}
      <Footer/>
    </div>
  );
}

export default App;
