import './styles/App.css';
import { Data } from './components/Data';
import ItemList from './components/ItemList.js';
import { useState } from 'react';
function App() {
 /* const arrayProduct =[
    {
      name:"mathidy",
      image:"/images/im11.jpg",
      price:"100£"
    },
    {
      name:"argent",
      image:"/images/im9.jpg",
      price:"150£"
    },
    {
      name:"cuir",
      image:"/images/im4.jpg",
      price:"100£"
    },
    {
      name:"argent",
      image:"/images/im2.png",
      price:"100£"
    },
    {
      name:"luxe",
      image:"/images/im1.png",
      price:"100£"
    }
    
  ]*/
  //const arrayProduct= [...Data];
  const [arrayProduct, setArrayProduct] = useState([...Data]);
  return (
    <div className="App">
      <ItemList product={arrayProduct}/>
    </div>
  );
}

export default App;
