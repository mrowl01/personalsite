import React, { Component } from 'react';




class Robots extends Component {
	render(){
		return(
		<div className = 'sections tc' >
			<h1>Robot Contact Card Searcher</h1>
			<hr/>
			<img className='starwarsimage'
			alt= ''
			src='https://i.postimg.cc/5N2V0LbJ/robo.png'></img>
			<h2>Tech Stack </h2>
			Made with React with Redux and Tachyons for styling 
			<h2> Decription</h2>
			It uses an API to get random images of robots. It also uses an API to get the random contact information.
			I used redux to start learning it. It handles the different states of the search bar and results of robots that contain the characters in the search bar.
			It returns the results to the user. If the promise is taking a while it provides the user with a loading message.
			I also set up an error boundary in case there is anything wrong the user will know it. 
			I styled using tachyons because it is so light weight and has great documentation. My app is currently called catfriends on github because I eventually want to replace the pictures with cats. 
			
			<h2>Youtube Demo</h2>
			<a href= 'https://www.youtube.com/watch?v=ZwFE5HP2x38'>
			https://www.youtube.com/watch?v=ZwFE5HP2x38
			</a>
			<h2>GitHub</h2>
			<a href='https://github.com/mrowl01/CatFriends'>
			https://github.com/mrowl01/CatFriends
			</a>
		</div>
		)
	}
}

export default Robots;