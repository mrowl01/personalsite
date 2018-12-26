import React, { Component } from 'react';
import './Starwars.css';



class Starwars extends Component {
	render(){
		return(
		<div className = 'sections tc' >
			<h1>StarWars</h1>
			<hr/>
			<img className='starwarsimage'
			alt= ''
			 src='https://i.postimg.cc/7PfW5Vjq/starwars.png'></img>
			<h2>Tech Stack </h2>
			Made with React and Tachyons for stylin
			<h2> Decription</h2>
			This uses an API to get information on the starwars universe.
			The app keeps track of the state of the search field based on what the user types.
			If the user types a series of letters that match something in the API starwars universe, it returns the results.
			The reults that are returned in a form of an array are then styled in cards.
			The background of the cards are generated randomly from an array of royalty free images I found online.
			It was hard to find many good ones but I thought the random backgrounds would be a neat touch.
			<h2>Youtube Demo</h2>
			<a href= 'https://www.youtube.com/watch?v=11HC1KLeuD0'>
			https://www.youtube.com/watch?v=11HC1KLeuD0
			</a>
			<h2>GitHub</h2>
			<a href='https://github.com/mrowl01/starwarsSearch'>
			https://github.com/mrowl01/starwarsSearch
			</a>
		</div>
		)
	}
}

export default Starwars;