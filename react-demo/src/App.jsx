import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
//import Home from '/'//
import About from './pages/About'
import Digital from './pages/Digital'
import Graphic from './pages/Graphic'
import Product from './pages/Product'
import NoMatch from './pages/NoMatch'
import Header from './components/common/Header';


function App() {
  
  return <>
    <Header></Header>
    <main>
    <nav>
				<Link to="/">Home</Link>
				<Link to="/about">About me</Link>
        <Link to="/digital-design">Digital design</Link>
        <Link to="/graphic-design">graphic design</Link>
        <Link to="/product-design">product design</Link>
			</nav>
      <Routes>
      {/*<Route path="/" element={<Home />} />*/}
      <Route path="/about" element={<About />} />
      <Route path="/digital-design" element={<Digital />} />
      <Route path="/graphic-design" element={<Graphic />} />
      <Route path="/product-design" element={<Product />} />
      <Route path="*" element={<NoMatch />} />
      </Routes>
    </main>
    <footer></footer>
</>;
  
}

export default App;

