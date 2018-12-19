import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './components/Home/Home.js';
import Banner from './components/Banner/Banner.js';
import {Switch, Route} from 'react-router-dom';
import './App.css';

const Main = () =>(
  <Switch>
    <Route exact path ='/' component = {Home}></Route>
    <Route exact path ='/portfolio' component = {Home}></Route>
  </Switch>
);

class App extends Component {
  render() {
    return (
      <div className="App">
      <Banner/>
      <Main/>
      </div>
    );
  }
}

export default App;
