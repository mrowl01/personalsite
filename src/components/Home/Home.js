import React, {Component} from 'react' ; 
import Summary from '../Summary/Summary.js';
import Skills from '../Skills/Skills.js';
import Projects from '../Projects/Projects.js';


class Home extends Component {
	render(){
		return (
		  <div className="">
	      <Summary/>
	      <Skills/>
	      <Projects/>
	      </div>
		)
	}
}

export default Home ;