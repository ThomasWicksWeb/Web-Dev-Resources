import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ColorBar from './ColorBar';
import Footer from './Footer';
import NavBar from './NavBar';
import ArticalSec from './sections/ArticleSec';
import BackgroundsSec from './sections/BackgroundSec';
import ColorsSec from './sections/ColorsSec';
import CssSec from './sections/CssSec';
import HTMLSec from './sections/HTMLSec';
import ImagesSec from './sections/ImagesSec';
import InspirationSec from './sections/InspirationSec';
import JavascriptSec from './sections/JavascriptSec';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ColorBar />
        <NavBar />
        <Route exact path="/" component={ColorsSec} />
        <Route path="/Colors" component={ColorsSec} />
        <Route path="/Images" component={ImagesSec} />
        <Route path="/Backgrounds" component={BackgroundsSec} />
        <Route path="/CSS" component={CssSec} />
        <Route path="/HTML" component={HTMLSec} />
        <Route path="/Inspiration" component={InspirationSec} />
        <Route path="/Javascript" component={JavascriptSec} />
        <Route path="/Articles" component={ArticalSec} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
