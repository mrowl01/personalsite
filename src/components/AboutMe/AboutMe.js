import React, { Component } from 'react';


class AboutMe extends Component {
	render(){
		return(
		<div className = ''>

			<div className = 'sections fl mv4 '>
			<h1 className = 'tc'>Who am I?</h1>
				I'm a self-taught programmer. I began teaching myself to code because Virtual Reality got me excited.
				Started by learning Unity3D, making many half finished games that taught me a lot. I ended up going to a GameJam and winning a Nooby Award with my team (impressive title, right?).
				My interests quickly went to web development because of how practicle it is. You can do so much with it so I started picking up the common full-stack techs to learn more.
				Taught myself mostly through books, youtube and udemy. 
				<br/>
				I think I'm ready for a job. I know this is my passion and I'll work harder than most to learn and prove myself. If there is something I don't know I will learn it- and will learn it quickly.
				If you're not bored yet bellow are my hobbies and current self-teaching projects.
			</div>

			<div className = 'sections fl mv4'> 
			<h1 className = 'tc'> Hobbies </h1>
			<ul >
				<li>MMA (Brazilian Jiu-Jitsu, Judo)</li>
				<li>Guitar (Playing and Singing - self taught)</li>
				<li>Udemy Courses(Learning is awesome)</li>
				<li>Dungeons and Dragons (fun)</li>
				<li>Unity and Unreal Engines (VR and AR!)</li>
			</ul>
			</div>

			<div className = 'sections fl mv4'>
			<h1 className = 'tc'> Current Projects </h1>
			These are things I'm currently teaching myself.
			<ul>
				<li> Data Structures and Algorithms</li>
				<li> Security in Web Development </li>
				<li> SSH </li>
				<li> Redux (I know it already but I want to make more projects with it)</li>
				<li>PHP</li>
			</ul>
			Things that I will be teaching myself next.
			<ul>
				<li> Machine Learning with Linear Algebra </li>
				<li> <a href= 'http://www.nand2tetris.org/'>NAND to Tetris Course</a> (really excited for this)</li>
				<li> Virtual Reality and Augmented Reality in Unity and Unreal Engine </li>
				<li> Ethical Hacking </li>
			</ul>
			</div>
		</div>
		)
	}
}

export default AboutMe; 