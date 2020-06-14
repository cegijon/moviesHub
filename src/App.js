import React from 'react';
// no estamos usando Link aqui, asi que no deberiamos importarlo. 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Series from './components/Series';
import Movies from './components/Movies';
import ShowAll from './components/ShowAll';
import IndivCard from './components/IndivCard';
import Footer from './components/Footer';


const App = () => {
  // Ojo a la prolijidad en este componente, fijate que a veces cerras los componentes con </Route> y a veces 
  // lo haces en la misma etiqueta de apertura <Route />
  // Lo ideal es de la segunda manera, pero en cualquier caso, lo mas importante es hacerlo consistente. 


  // Movies y Series podrian ser el mismo componente, si usas useParams() como en ShowAll
  // y te fijas en que ruta estas para hacer el fetch 
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/tv" component={Series}></Route>
          <Route exact path="/movies" component={Movies}></Route>
          <Route exact path="/:media/:genres/page/:pageNumber" component={ShowAll}></Route>
          <Route exact path="/:media/:id/" component={IndivCard} />
          <Route exact path="/:media/:id/:section" component={IndivCard} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
