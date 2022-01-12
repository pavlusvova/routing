import React from "react";
import "./App.css";
import Nav from "./Nav";
import Shop from "./shop/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from "./Counter";

function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <div className="Shop">
            <Routes>
              <Route path="/count" element={<Counter />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/" element={<Shop />} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
