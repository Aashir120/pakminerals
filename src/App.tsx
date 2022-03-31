import React from 'react';
import './App.css';
import Products from './components/Products';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Basket from './components/Basket';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductDetails from './components/ProductDetails';
import Newsletter from "./components/Newsletter"
import Success from './components/Success';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path = "/" element = {<Products/>} />
          <Route path="/product/:slug" element={<ProductDetails/>} />
          <Route path = "/cart" element = {<Basket/>}  />
          <Route path = "/success" element = {<Success/>}  />
        </Routes>
        <Newsletter/>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
