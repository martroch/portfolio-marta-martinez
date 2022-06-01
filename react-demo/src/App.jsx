import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import SingleProject from './pages/single-project/SingleProject'
import NoMatch from './pages/nomatch/NoMatch'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


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
      <Route path='/:category/:id' element={<SingleProject/>}/>
      <Route path="*" element={<NoMatch />} />
      </Routes>
    </main>
    <Footer></Footer>
</>;
  
}

export default App;

