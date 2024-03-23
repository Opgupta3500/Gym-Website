import React from 'react';
import { useState } from 'react';
import './App.css';
import Landing from './Container/Landing';
import Aboutme from './Container/Aboutme';
import Pricing from './Container/Pricing';
import Trainer from './Container/Trainer';
import Contact from './Container/Contact';
import Footer from './Container/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Landing />
    <Aboutme />
    <Pricing />
    <Trainer />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
