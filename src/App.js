import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route component={ SearchForm } />
          <Nav />

          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/search/dogs%20surfing" /> } />
            {/*{ removes "/" from path so that it can be used in the component to fetch data }*/}
            <Route path={ ["/puppies", "/kittens", "/surfing"] } render={ ({ match }) => <PhotoContainer data={ match.path.substring(1) } /> } />
            <Route path="/search/:query" render={ ({ match }) => <PhotoContainer data={ match.params.query } /> } />
            <Route component={ NotFound } />
          </Switch>
    
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
