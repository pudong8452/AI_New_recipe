// css 모음
import './App.css';
// React 모음
import React, { useEffect } from 'react';
// header 모음
import NavBer from './Components/NavBer';
// body 모음
import Sec1 from './Components/Sec1';
import Sec2 from './Components/Sec2';
import Sec3 from './Components/Sec3';
// js 기능 모음
import { setScrollReveal } from './Components/scrollRevealConfig';
import { startAnimation } from './Components/animation';

function App() {
  useEffect(() => {
    startAnimation();
    setScrollReveal();
  });

  return (
    <div className="App">
      <NavBer></NavBer> 
      <Sec1></Sec1>
      <Sec2></Sec2>
      <Sec3></Sec3>
    </div>
  );
}

export default App;