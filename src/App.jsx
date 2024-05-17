import React from 'react';
import './App.css';
import Header from './header';
import Hero from './hero';
import About from './about';
import Share from './share';
import Footer from './footer';
import Snippets from '../src/snippets';

function App() {
  return (
      <>
        <Header />
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="share">
          <Share />
        </div>
        <div id="snippets">
          <Snippets />
        </div>
       <div>
        <Footer />
        </div>
     </>
  );
}

export default App;
