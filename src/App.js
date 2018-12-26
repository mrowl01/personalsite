import React, { Component } from 'react';
<<<<<<< HEAD
// import Home from './components/Home/Home.js';
//import Portfolio from './components/Portfolio/Portfolio.js';
// import Starwars from './components/PortfolioPages/Starwars/Starwars.js';
// import FaceDetect from './components/PortfolioPages/FaceDetect/FaceDetect.js';
// import Shoot3D from './components/PortfolioPages/Shoot3D/Shoot3D.js';
// import Shoot2D from './components/PortfolioPages/Shoot2D/Shoot2D.js';
// import Glitch from './components/PortfolioPages/Glitch/Glitch.js';
// import Dungeon from './components/PortfolioPages/Dungeon/Dungeon.js';
// import AboutMe from './components/AboutMe/AboutMe.js';
// import Robots from './components/PortfolioPages/Robots/Robots.js';
import Banner from './components/Banner/Banner.js';

import {Switch, Route} from 'react-router-dom';

import './App.css';

class DynamicImport extends Component {
  state = {
    component: null
  }
  componentDidMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}

const Home = (props) => (
  <DynamicImport load={() => import('./components/Home/Home.js')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const Portfolio = (props) => (
  <DynamicImport load={() => import('./components/Portfolio/Portfolio.js')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const Starwars = (props) => (
  <DynamicImport load={() => import('./components/PortfolioPages/Starwars/Starwars.js')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)
const Robots = (props) => (
  <DynamicImport load={() => import('./components/PortfolioPages/Robots/Robots.js')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const FaceDetect = (props) => (
  <DynamicImport load={() => import('./components/PortfolioPages/FaceDetect/FaceDetect.js')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const Shoot3D = (props) => (
  <DynamicImport load={() => import('./components/PortfolioPages/Shoot3D/Shoot3D.js')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const Shoot2D = (props) => (
  <DynamicImport load={() => import('./components/PortfolioPages/Shoot2D/Shoot2D.js')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const Glitch = (props) => (
  <DynamicImport load={() => import('./components/PortfolioPages/Glitch/Glitch.js')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const Dungeon = (props) => (
  <DynamicImport load={() => import('./components/PortfolioPages/Dungeon/Dungeon.js')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const AboutMe = (props) => (
  <DynamicImport load={() => import('./components/AboutMe/AboutMe.js')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const Main = () =>(
  <Switch>
    <Route exact path ='/' component = {Home}/>
    <Route exact path ='/portfolio' component = {Portfolio}/>
    <Route exact path ='/portfolio/starwars' component = {Starwars}/>
    <Route exact path ='/portfolio/robots' component = {Robots}/>
    <Route exact path ='/portfolio/facedetect' component = {FaceDetect}/>
    <Route exact path ='/portfolio/shoot3d' component = {Shoot3D}/>
    <Route exact path ='/portfolio/shoot2d' component = {Shoot2D}/>
    <Route exact path ='/portfolio/glitch' component = {Glitch}/>
    <Route exact path ='/portfolio/dungeon' component = {Dungeon}/>
    <Route exact path ='/aboutme' component = {AboutMe}/>
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
