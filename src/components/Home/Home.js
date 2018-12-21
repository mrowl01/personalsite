import React, {Component} from 'react' ; 

import Banner from '../Banner/Banner.js';
import Scroll from '../Scroll/Scroll.js';
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