import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ColorBar from './ColorBar';
import Footer from './Footer';
import { NavBar } from './components';
import * as ROUTES from './routes';

export default function App() {
  return (
    <Router>
      <ColorBar />
      <NavBar />
      <main>
        <Switch>
          {Object.values(ROUTES).map(({ component, path }) => (
            <Route path={path} exact component={component} key={path} />
          ))}
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}
