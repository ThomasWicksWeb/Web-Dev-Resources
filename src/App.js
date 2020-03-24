import React from 'react';
import NavBar from './NavBar';

import HomePage from './HomePage';
import ColorBar from './ColorBar';
import JavascriptSec from './sections/JavascriptSec';
import CssSec from './sections/CssSec';
import ColorsSec from './sections/ColorsSec';
import BackgroundsSec from './sections/BackgroundSec';
import ImagesSec from './sections/ImagesSec';
import HTMLSec from './sections/HTMLSec';
import InspirationSec from './sections/InspirationSec';
import ArticalSec from './sections/ArticleSec';

import AppFooter from './AppFooter';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ColorBar />
        <NavBar />
        <Route exact path="/" component={ HomePage } />
        <Route path="/Colors" component={ ColorsSec } />
        <Route path="/Images" component={ ImagesSec } />
        <Route path="/Backgrounds" component={ BackgroundsSec } />
        <Route path="/CSS" component={ CssSec } />
        <Route path="/HTML" component={ HTMLSec } />
        <Route path="/Inspiration" component={ InspirationSec } />
        <Route path="/Javascript" component={ JavascriptSec } />
        <Route path="/Articles" component={ ArticalSec } />
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
