import React from 'react';
import { useState } from 'react';
import './App.css';
import Landing from './Container/Landing';
import Aboutme from './Container/Aboutme';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Landing />
    <Aboutme />
    </>
  );
}

export default App;
