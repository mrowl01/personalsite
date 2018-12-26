import React, { Component } from 'react';
import Home from './components/Home/Home.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Starwars from './components/PortfolioPages/Starwars/Starwars.js';
import FaceDetect from './components/PortfolioPages/FaceDetect/FaceDetect.js';
import Shoot3D from './components/PortfolioPages/Shoot3D/Shoot3D.js';
import Shoot2D from './components/PortfolioPages/Shoot2D/Shoot2D.js';
import Glitch from './components/PortfolioPages/Glitch/Glitch.js';
import Dungeon from './components/PortfolioPages/Dungeon/Dungeon.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import Robots from './components/PortfolioPages/Robots/Robots.js';
import Banner from './components/Banner/Banner.js';
import {Switch, Route} from 'react-router-dom';

import './App.css';

const Main = () =>(
  <Switch>
    <Route exact path ='/' component = {Home}></Route>
    <Route exact path ='/portfolio' component = {Portfolio}></Route>
    <Route exact path ='/portfolio/starwars' component = {Starwars}></Route>
    <Route exact path ='/portfolio/robots' component = {Robots}></Route>
    <Route exact path ='/portfolio/facedetect' component = {FaceDetect}></Route>
    <Route exact path ='/portfolio/shoot3d' component = {Shoot3D}></Route>
    <Route exact path ='/portfolio/shoot2d' component = {Shoot2D}></Route>
    <Route exact path ='/portfolio/glitch' component = {Glitch}></Route>
    <Route exact path ='/portfolio/dungeon' component = {Dungeon}></Route>
    <Route exact path ='/aboutme' component = {AboutMe}></Route>
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
