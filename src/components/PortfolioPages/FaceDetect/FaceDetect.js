import React, { Component } from 'react';

class FaceDetect extends Component {
	render(){
		return(
		<div className = 'sections tc' >
			<h1>Picture Face Detector</h1>
			<hr/>
			<img alt='' src='https://i.postimg.cc/gkPTkBLQ/face.png'></img>
			<h2>Tech Stack </h2>
			Made with React Tachyons for styling 
			<h2> Decription</h2>
			This app uses an API called clarify to detect faces. The front end is made with React.
			The front end allows the user to provide an image link. When the user clicks submit
			 the backend then uses clarify to determine the location of the face. It sends this info
			 to the front end where a functions then places a blue box around it. It currently
			 only detects single faces. The sign in logic is also handled by the backend. When the user enters
			 the username and password it sends it to the back end which then compares it to what is held in the
			 database. The database used was mongoose. Don't worry! I didn't save the passwords there. Bcrypt handles
			 the encryptions and provides the hashes. Another thing the backend keeps track of is how many times you have
			 used it to detect a face in a picture. It determines your "Rank". The login page has moving particles
			 as a background because I thought it looked really neat. It seems to cause some issues on mobile. That's a bug
			 I plan on going to explore later on. It is probably the amount of particles floating around may need to be reduced
			 when the screen size is smaller.
			
			<h2>Youtube Demo</h2>
			<a href= 'https://www.youtube.com/watch?v=XBlOqZPc_Dk'>
			https://www.youtube.com/watch?v=XBlOqZPc_Dk
			</a>
			<h2>Heroku Link</h2>
			<a href ='https://face-recognition0.herokuapp.com/'>
			https://face-recognition0.herokuapp.com/
			</a>
			<h2>GitHub</h2>
			<h4>Front-End</h4>
			<a href='https://github.com/mrowl01/FaceRecognitionApp'>
			https://github.com/mrowl01/FaceRecognitionApp
			</a>
			<h4>Backend</h4>
			<a href='https://github.com/mrowl01/FaceRecognitionBackEnd'>
			https://github.com/mrowl01/FaceRecognitionBackEnd
			</a>
		</div>
		)
	}
}

export default FaceDetect;