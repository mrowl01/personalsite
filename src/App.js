import React, { Component } from 'react';
import logo from './logo.svg';
import Banner from './components/Banner/Banner.js';
import Scroll from './components/Scroll/Scroll.js';
import Summary from './components/Summary/Summary.js';
import Skills from './components/Skills/Skills.js';
import Projects from './components/Projects/Projects.js';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      route:'home'
    }
  }
  render() {
    return (
      <div className="App">
      <Banner/>
      <Summary/>
      <Skills/>
      <Projects/>
      </div>
    );
  }
}

export default App;
