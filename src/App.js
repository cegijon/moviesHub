import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Series from './components/Series';
import Movies from './components/Movies';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/tv" component={Series}></Route>
            <Route exact path="/movies" component={Movies}></Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;