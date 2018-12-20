import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './components/Home/Home.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Starwars from './components/PortfolioPages/Starwars/Starwars.js';
import Banner from './components/Banner/Banner.js';
import {Switch, Route} from 'react-router-dom';

import './App.css';

const Main = () =>(
  <Switch>
    <Route exact path ='/' component = {Home}></Route>
    <Route exact path ='/portfolio' component = {Portfolio}></Route>
    <Route exact path ='/portfolio/starwars' component = {Starwars}></Route>
    <Route exact path ='/portfolio/robots' component = {Portfolio}></Route>
    <Route exact path ='/portfolio/facedetect' component = {Portfolio}></Route>
    <Route exact path ='/portfolio/3dshoot' component = {Portfolio}></Route>
    <Route exact path ='/portfolio/2dshoot' component = {Portfolio}></Route>
    <Route exact path ='/portfolio/glitch' component = {Portfolio}></Route>
    <Route exact path ='/portfolio/dungeon' component = {Portfolio}></Route>
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
