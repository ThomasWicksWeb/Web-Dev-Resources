import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ColorBar from './ColorBar';
import Footer from './Footer';
import NavBar from './NavBar';
import Artical from './sections/ArticleSec';
import Backgrounds from './sections/BackgroundSec';
import Colors from './sections/ColorsSec';
import CSS from './sections/CssSec';
import HTML from './sections/HTMLSec';
import Images from './sections/ImagesSec';
import Inspiration from './sections/InspirationSec';
import Javascript from './sections/JavascriptSec';

export default function App() {
  return (
    <div>
      <Router>
        <ColorBar />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Colors} />
          <Route exact path="/colors" component={Colors} />
          <Route exact path="/images" component={Images} />
          <Route exact path="/backgrounds" component={Backgrounds} />
          <Route exact path="/css" component={CSS} />
          <Route exact path="/html" component={HTML} />
          <Route exact path="/inspiration" component={Inspiration} />
          <Route exact path="/javascript" component={Javascript} />
          <Route exact path="/articles" component={Artical} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
