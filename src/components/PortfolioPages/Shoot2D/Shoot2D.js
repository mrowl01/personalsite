import React, { Component } from 'react';

class Shoot2D extends Component {
	render(){
		return(
		<div className = 'sections tc' >
			<h1>3D Rail Shooter</h1>
			<hr/>
			<img alt='' src='https://i.postimg.cc/zvsCx5XC/2dspace.png'></img>
			<h2>Tech Stack </h2>
			Unity3D
			<h2> Decription</h2>
			This is game is based on alien invaders. It uses 2d assets found on google.
			The enemies are animated to fly back in when they are destroyed. They fly in the same formation.
			The user is able to move right and left and spacebar to shoot. The ammo is generated in real time through instantion at the players vector2 location.
			The enemies also shoot at the player. The amount of times they shoot is based on probability. I gave them about a 30% chance to shoot.
			If I were to add levels I would just increase that probability and add new enemy ships.
			The screen size is determined by casting a raycast from the camera to the edges. That way the character can not go past that point.
			The UI consist of score keeper at the bottom right corner. It just inrements as the player destroys enemies.
			The player has 3 lives available. As he dies they are subtracted and a small animation plays that makes it flash red.
			This game does have a lose screen. There is no win screen because there isn't a way to win it. Just infinte aliens to destory.
			
			<h2>Youtube Demo</h2>
			<a href= 'https://www.youtube.com/watch?v=GcD19xx9t68'>
			https://www.youtube.com/watch?v=GcD19xx9t68
			</a>
			<h2>GitHub</h2>
			<a href='https://github.com/mrowl01/Space_Shooter_2D'>
			https://github.com/mrowl01/Space_Shooter_2D
			</a>
		</div>
		)
	}
}

export default Shoot2D;