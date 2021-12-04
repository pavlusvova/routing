import React, {useState} from 'react';
import './App.css';
import Nav from './Nav';
import Shop from './shop/Shop';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddName from './add/AddName';
import AddPrice from './add/AddPrice';

function App() {
  const [shops, setShops] = useState ([
    { id:1, name: "ковбаса", price: "30"},
    { id:2, name: "хліб", price: "10"},
    { id:3, name: "майонез", price: "20"}
  ])
  const [shopsName, setShopsName] = useState('')
  const [shopsPrice, setShopsPrice] = useState('')

  function addName(name){
    setShops(
      shops.concat([
        {
          name,
          id: Date.now()
        }
      ])
    )
  }
  function addPrice(price){
    setShops(
      shops.concat([
        {
          price,
          id: Date.now()
        }
      ])
    )
  }
  return (
    <Router>
      <div className="App">
        <Nav />
          <div className="Shop">
            <AddName onCreate={addName} />
            <AddPrice onCreate={addPrice}/>
            <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop shops={shops}/>} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
