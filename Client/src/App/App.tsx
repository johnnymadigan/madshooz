import { useEffect, useState } from 'react';
import './App.scss';

import Footer from '../Footer/Footer';
import Slide from '../Slide/Slide';


function App() {

  const [ shoes, setShoes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = "data.json"; // replace with API endpoint
      try {
        const response = await fetch(url, {
          headers: {
            /* headers to let client know that we
            are accessing JSON from a server */
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        const jsonData = await response.json();

        let arrays: any = [], size = 4;
            
        while (jsonData.length > 0) arrays.push(jsonData.splice(0, size));
        console.log(arrays);

        setShoes(arrays);
      } catch(e) {
        console.log(e);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className='noselect'>MAD <i>SHOOZ</i></h1>
      {shoes.map(set => <Slide set={set}/>)}
      <Footer/>
    </div>
  );
}

export default App;
