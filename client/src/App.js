import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Virtual from './components/Virtual/Virtual';
import Exclusive from './components/Exclusive/Exclusive';
import Sustainable from './components/Sustainable/Sustainable';
import Gram from './components/Gram/Gram';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Virtual />
      <Exclusive />
      <Sustainable/>
      <Gram/>
    </div>
  );
}

export default App;