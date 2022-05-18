import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Digital from './pages/digital/Digital'
import Graphic from './pages/graphic/Graphic'
import Product from './pages/product/Product'
import NoMatch from './pages/nomatch/NoMatch'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  
  return <>
    <Header></Header>
    <main>

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/digital-design" element={<Digital />} />
      <Route path="/graphic-design" element={<Graphic />} />
      <Route path="/product-design" element={<Product />} />
      <Route path="*" element={<NoMatch />} />
      </Routes>
    </main>
    <Footer></Footer>
</>;
  
}

export default App;

