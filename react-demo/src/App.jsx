import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import DigitalProject from './pages/digital-project/DigitalProject'
import NoMatch from './pages/nomatch/NoMatch'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ProductProject from './pages/product-project/ProductProject';
import GraphicProject from './pages/graphic-project/GraphicProject';


// /algo/otracosa
// /algo
function App() {
  
  return <>
    <Header></Header>
    <main>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path='/:category' element={<Projects/>}/>
      <Route path='/digital-design/:id' element={<DigitalProject/>}/>
      <Route path='/product-design/:id' element={<ProductProject/>}/>
      <Route path='/graphic-design/:id' element={<GraphicProject/>}/>
      <Route path="*" element={<NoMatch />} />
      </Routes>
    </main>
    <Footer></Footer>
</>;
  
}

export default App;

