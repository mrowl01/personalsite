import React, { Component } from 'react';
import './Portfolio.css';



class Portfolio extends Component {
	render(){
		return(
		<div className = 'sections tc' >
			<h1>Portfolio</h1>
			<div className = 'portList'>
				<div className = 'card'>
					<h2>React/Redux</h2>
					<a href="#" className="f3 link dim purple">Starwars Universe Search</a>
				</div>
				<hr/>
				<a href="#" className="f3 link dim purple">Robot Contact Cards</a>
				<hr/>
				<h2> React w/ Express & Node</h2>
				<a href="#" className="f3 link dim purple">Picture Face Detector</a>
				<h2> Unity 3D</h2>
				<a href="#" className="f3 link dim purple">3D Rail Shooter</a>
				<hr/>
				<a href="#" className="f3 link dim purple">2d Space Invader</a>
				<hr/>
				<a href="#" className="f3 link dim purple">Glitch Garden</a>
				<hr/>
				<a href="#" className="f3 link dim purple">Minotaur Dungeon Crawl</a>
				<hr/>
			</div>
		</div>
		)
	}
}

export default Portfolio;