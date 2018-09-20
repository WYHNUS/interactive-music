import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from 'components/Header';

// Pages
import Landing from 'pages/Landing';
import NotesPlayground from 'pages/NotesPlayground';
import ChordsPlayground from 'pages/ChordsPlayground';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={ Landing } />

          <Route path="/notes" component={ NotesPlayground } />
          <Route path="/chords" component={ ChordsPlayground } />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;